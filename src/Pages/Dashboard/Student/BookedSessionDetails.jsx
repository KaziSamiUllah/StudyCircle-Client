import React from "react";
import ViewBookDetails from "../../../Components/Shared/ViewBookDetails";
import { useParams } from "react-router-dom";
import useFetchSessionbyId from "../../../Hooks/useFetchSessionbyId";
import useUser from "../../../Hooks/useUser";

const BookedSessionDetails = () => {
  const { user } = useUser();
  const id = useParams();
  const ID = id.id;
  const { sessionData } = useFetchSessionbyId(ID);

  return (
    <div className="my-10 max-w-5xl mx-auto p-10 bg-white shadow-md rounded-lg">
      <ViewBookDetails sessionData={sessionData}></ViewBookDetails>
      <div className="m-5">
        <form>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Post a review
          </label>

          <textarea
            name="review"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <input
            type="submit"
            value="Post"
            className="bg-secondary hover:bg-neutral hover:text-white btn w-fir"
          />
        </form>
      </div>
    </div>
  );
};

export default BookedSessionDetails;
