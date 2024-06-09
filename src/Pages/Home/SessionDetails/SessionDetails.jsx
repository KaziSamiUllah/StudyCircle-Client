import { Link, useParams } from "react-router-dom";

import useFetchSessionbyId from "../../../Hooks/useFetchSessionbyId";
import ViewBookDetails from "../../../Components/Shared/ViewBookDetails";
import useUser from "../../../Hooks/useUser";
import useMoment from "../../../Hooks/useMoment";
import StarRating from "../../../Components/Shared/StarRating";
import useBooking from "../../../Hooks/useBooking";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const SessionDetails = () => {
  const { savedUser } = useUser();
  const currentDate = useMoment();


  const {id} = useParams();
 
  const { sessionData } = useFetchSessionbyId(id);
  const { handleBooking, isLoading, error } = useBooking(id);

  const axiosSecure = useAxiosSecure();
  const {
    data = {},
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["reviewSession"],
    queryFn: async () => await axiosSecure.get(`/reviews/${id}`),
    enabled: !!id,
  });
  console.log(data.data);






  const ongoing =
    sessionData?.regEnd >= currentDate && currentDate >= sessionData?.regStart;
  const reviews = [
    {
      title: "Amazing Product!",
      body: "I absolutely love this product. It exceeded my expectations in every way.",
      rating: 5,
      author: "John Doe",
    },
    {
      title: "Not What I Expected",
      body: "I was really hoping for better quality. The product broke after just a few uses.",
      rating: 2,
      author: "Jane Smith",
    },
    {
      title: "Great Service",
      body: "Had an issue with my order, but customer service was incredibly helpful and resolved it quickly.",
      rating: 4,
      author: "Alex Johnson",
    },
  ];

  return (
    <div className="my-10 max-w-5xl mx-auto p-10 bg-white shadow-md rounded-lg">
      <ViewBookDetails sessionData={sessionData}></ViewBookDetails>
      <div className="flex mt-5 justify-end">
        {sessionData?.fee > 0 ? (
          <Link
            to={`/payment/${sessionData._id}`}
            disabled={savedUser?.role !== "student" || !ongoing}
            className="btn btn-neutral text-white font-bold hover:bg-secondary hover:text-black text-lg"
          >
            {ongoing ? "Book Now" : "Registration Closed"}
          </Link>
        ) : (
          <button
            onClick={() => handleBooking()}
            disabled={savedUser?.role !== "student" || !ongoing}
            className="btn btn-neutral text-white font-bold hover:bg-secondary hover:text-black text-lg"
          >
            {ongoing ? "Book Now" : "Registration Closed"}
          </button>
        )}
      </div>
      <div className="review-list bg-gray-100 p-6 rounded-lg mt-10">
        <h2 className="text-2xl font-bold mb-4 text-center">Student Reviews</h2>
        {data?.data?.map((review, index) => (
          <div
            key={index}
            className=" rounded-lg m-2 border-b bg-white p-5 border-gray-300 pb-4 mb-4"
          >
           <StarRating rating={review.rating}></StarRating>
            <p className="text-gray-600 mb-2 flex my-5"><FaQuoteLeft /><span className="text-lg mx-2 text-black">{review.review}</span><FaQuoteRight /></p>
            <p className="text-gray-600 font-bold">-{review.studentName}</p>
            {/* <p className="text-gray-600">Rating: {review.rating}/5</p> */}
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default SessionDetails;
