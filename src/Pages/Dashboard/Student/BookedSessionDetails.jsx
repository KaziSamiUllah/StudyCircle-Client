import React, { useState } from "react";
import ViewBookDetails from "../../../Components/Shared/ViewBookDetails";
import { useNavigate, useParams } from "react-router-dom";

import useUser from "../../../Hooks/useUser";
import useFetchSessionbyId from "../../../Hooks/useFetchSessionbyId";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const BookedSessionDetails = () => {
  const axiosSecure = useAxiosSecure();
  const { user, savedUser } = useUser();
  const { id } = useParams();
  const { sessionData, isLoading } = useFetchSessionbyId(id);
  console.log(savedUser);
  const navigate = useNavigate()
  const [rating, setRating] = useState(0); // State to store the current rating
  // console.log(rating);
  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  console.log(sessionData?.rating);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Review submitted:", data.review, rating);
    reset();
    try {
      const res = await axiosSecure.post("/reviews", {
        sessionID: sessionData._id,
        review: data?.review,
        rating,
        studentName: savedUser?.name,
      });
      console.log(res);
      if (res.status === 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your review has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/dashboard/bookedSessions");
      }
    } catch {
      (error) => {
        console.error(error);
      };
    }
  };

  return (
    <div className="my-10 max-w-5xl mx-auto p-10 bg-white shadow-md rounded-lg">
      {isLoading ? (
        <div className="w-full h-screen flex justify-center items-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <ViewBookDetails sessionData={sessionData}></ViewBookDetails>
      )}

      <div className="m-5">
        <h1>Student Revirw</h1>
        <div>
          <div>
            {[...Array(5)].map((_, index) => (
              <span
                className="text-2xl"
                key={index}
                onClick={() => handleStarClick(index + 1)}
                style={{
                  cursor: "pointer",
                  color: index < rating ? "gold" : "gray",
                }}
              >
                ★
              </span>
            ))}
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Post a review
            </label>
            <textarea
              name="review"
              {...register("review", { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.review && (
              <p className="text-red-500 text-xs italic">
                This field is required
              </p>
            )}
            <input
              type="submit"
              value="Post"
              className="bg-secondary hover:bg-neutral hover:text-white btn w-full"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookedSessionDetails;
