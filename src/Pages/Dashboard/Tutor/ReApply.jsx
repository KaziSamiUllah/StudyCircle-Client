import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import useUser from "../../../Hooks/useUser";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useNavigate, useParams } from "react-router-dom";
import useFetchSessionbyId from "../../../Hooks/useFetchSessionbyId";

const ReApply = () => {
  const axiosSecure = useAxiosSecure();
  const { savedUser } = useUser();
  const { id: ID } = useParams();
  const navigate = useNavigate()

  const { sessionData, isLoading } = useFetchSessionbyId(ID);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      sessionTitle: "",
      tutorName: savedUser?.name,
      tutorEmail: savedUser?.email,
      sessionDescription: "",
      regStart: "",
      regEnd: "",
      classStart: "",
      classEnd: "",
      status: "Pending",
      lessons: "",
      fee: 0,
      duration: ""
    }
  });

  useEffect(() => {
    if (sessionData) {
      reset({
        sessionTitle: sessionData.sessionTitle || "",
        sessionDescription: sessionData.sessionDescription || "",
        regStart: sessionData.regStart || "",
        regEnd: sessionData.regEnd || "",
        classStart: sessionData.classStart || "",
        classEnd: sessionData.classEnd || "",
        lessons: sessionData.lessons || "",
        duration: sessionData.duration || "",
        tutorName: savedUser?.name || "",
        tutorEmail: savedUser?.email || "",
        fee: 0,
        status: "Pending",
      });
    }
  }, [sessionData, reset, savedUser]);

  const onSubmit = async (data) => {
    try {
      const res = await axiosSecure.post("/sessions", data);
      if (res.status === 200) {
        const deleteRes = await deleteSession(ID);
        if (deleteRes.status === 200) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "New session has been posted for approval",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/dashboard/tutorSessions")
    
        } else {
          throw new Error("Failed to delete old session.");
        }
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  };

  const deleteSession = async (id) => {
    const res = await axiosSecure.delete(`/sessions/${id}`);
    return res;
  };

  return (
    <div className="w-full">
      {isLoading ? (
        <div className="flex justify-center items-center min-h-screen text-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="w-10/12 mx-auto mt-8">
          <h1 className="text-center text-3xl font-semibold my-5">
            Re-Submit the session for Approval
          </h1>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Session Title:
                </label>
                <input
                  type="text"
                  {...register("sessionTitle")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Tutor Name:
                </label>
                <input
                  type="text"
                  {...register("tutorName")}
                  readOnly
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Tutor Email:
                </label>
                <input
                  type="text"
                  {...register("tutorEmail")}
                  readOnly
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Session Description:
                </label>
                <textarea
                  {...register("sessionDescription")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Registration Start:
                </label>
                <input
                  type="date"
                  {...register("regStart")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Registration End:
                </label>
                <input
                  type="date"
                  {...register("regEnd")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
            <div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Class Start Date:
                </label>
                <input
                  type="date"
                  {...register("classStart")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Class End Date:
                </label>
                <input
                  type="date"
                  {...register("classEnd")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Session Duration (in hours):
                </label>
                <input
                  type="number"
                  {...register("duration")}
                  min="0"
                  step="0.5"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Number of lessons:
                </label>
                <input
                  type="number"
                  {...register("lessons")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Registration Fee:
                </label>
                <input
                  type="number"
                  {...register("fee")}
                  min="0"
                  readOnly
                  value={0}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-200"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Status:
                </label>
                <input
                  {...register("status")}
                  readOnly
                  value="Pending"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
          </div>
          <input
            type="submit"
            className="bg-secondary hover:bg-neutral hover:text-white btn w-full"
          />
        </form>
      )}
    </div>
  );
};

export default ReApply;
