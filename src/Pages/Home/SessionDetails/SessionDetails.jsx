import { useParams } from "react-router-dom";


import useFetchSessionbyId from "../../../Hooks/useFetchSessionbyId";
import ViewBookDetails from "../../../Components/Shared/ViewBookDetails";
import useUser from "../../../Hooks/useUser";
import useMoment from "../../../Hooks/useMoment";
import useAxiosSecure, { axiosSecure } from "../../../Hooks/useAxiosSecure";
import { useEffect } from "react";
import Swal from "sweetalert2";
import StarRating from "../../../Components/Shared/StarRating";


const SessionDetails = () => {
const {savedUser} = useUser()
const currentDate = useMoment()
const axiosSecure = useAxiosSecure()


  const id = useParams();
  const ID = id.id;
  const { sessionData } = useFetchSessionbyId(ID);

  const bookingData = {sessionID: ID, sessionTitle: sessionData?.sessionTitle, StudentEmail: savedUser?.email, tutorName: sessionData?.tutorName, tutorEmail: sessionData?.tutorEmail}


  const handleBooking = async ()=>{

     const res = await axiosSecure.post('/bookings', bookingData )
      console.log(res.data.acknowledged);
      if(res.data.acknowledged){
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Study session has been booked",
          showConfirmButton: false,
          timer: 1500
        });
      }
  }
  const ongoing = (sessionData?.regEnd >= currentDate && currentDate >= sessionData?.regStart)
console.log(ongoing);
const reviews = [
  {
    "title": "Amazing Product!",
    "body": "I absolutely love this product. It exceeded my expectations in every way.",
    "rating": 5,
    "author": "John Doe"
  },
  {
    "title": "Not What I Expected",
    "body": "I was really hoping for better quality. The product broke after just a few uses.",
    "rating": 2,
    "author": "Jane Smith"
  },
  {
    "title": "Great Service",
    "body": "Had an issue with my order, but customer service was incredibly helpful and resolved it quickly.",
    "rating": 4,
    "author": "Alex Johnson"
  }
]





  return (
    <div className="my-10 max-w-5xl mx-auto p-10 bg-white shadow-md rounded-lg">
      <ViewBookDetails sessionData={sessionData}></ViewBookDetails>
      <div className="flex mt-5 justify-end">
        <button onClick={()=>handleBooking(ID)} 
        disabled={(savedUser?.role !== "student") || !ongoing}
        
        className="btn btn-neutral text-white font-bold hover:bg-secondary hover:text-black text-lg">
          {ongoing? "Book Now" : "Registration Closed" }</button>
      </div>
      <div className="review-list bg-gray-100 p-6 rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4">Student Reviews</h2>
      {reviews.map((review, index) => (
        <div key={index} className=" rounded-lg m-2 border-b bg-white p-5 border-gray-300 pb-4 mb-4">
          <h3 className="text-xl font-semibold mb-2">{review.title}</h3>
         
          <p className="text-gray-800 mb-2">{review.body}</p>
          <p className="text-gray-600 font-semibold">-{review.author}</p>
          {/* <p className="text-gray-600">Rating: {review.rating}/5</p> */}
          <StarRating rating={review.rating} ></StarRating>
          
          
        </div>
      ))}
    </div>
    </div>
  );
};

export default SessionDetails;
