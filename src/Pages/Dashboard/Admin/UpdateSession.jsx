import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import useUser from "../../../Hooks/useUser";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useFetchSessionbyId from "../../../Hooks/useFetchSessionbyId";
import { useParams } from "react-router-dom";

const UpdateSession = () => {
  const axiosSecure = useAxiosSecure();
  const { savedUser } = useUser();
  const { id: ID } = useParams();
  const { sessionData, refetch } = useFetchSessionbyId(ID);

  const [formValues, setFormValues] = useState({
    sessionTitle: "",
    tutorName: "",
    tutorEmail: "",
    sessionDescription: "",
    regStart: "",
    regEnd: "",
    classStart: "",
    classEnd: "",
    duration: "",
    lessons: "",
    fee: "",
    status: ""
  });

  useEffect(() => {
    if (sessionData) {
      setFormValues({
        sessionTitle: sessionData.sessionTitle || "",
        tutorName: savedUser?.name || "",
        tutorEmail: savedUser?.email || "",
        sessionDescription: sessionData.sessionDescription || "",
        regStart: sessionData.regStart || "",
        regEnd: sessionData.regEnd || "",
        classStart: sessionData.classStart || "",
        classEnd: sessionData.classEnd || "",
        duration: sessionData.duration || "",
        lessons: sessionData.lessons || "",
        fee: sessionData.fee || "",
        status: sessionData.status || "Pending"
      });
    }
  }, [sessionData, savedUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axiosSecure
      .put(`/updateSessionFull/${ID}`, formValues)
      .then((res) => {
        if (res.statusText === "OK") {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Session has been updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit} className="w-10/12 mx-auto mt-8">
      <h1 className="text-center text-3xl font-semibold my-5">
        Update Session Data
      </h1>
      <div className="grid grid-cols-2 gap-5">
        <div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Session Title:
            </label>
            <input
              type="text"
              name="sessionTitle"
              value={formValues.sessionTitle}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Tutor Name:
            </label>
            <input
              type="text"
              name="tutorName"
              value={formValues.tutorName}
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
              name="tutorEmail"
              value={formValues.tutorEmail}
              readOnly
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Session Description:
            </label>
            <textarea
              name="sessionDescription"
              value={formValues.sessionDescription}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Registration Start:
            </label>
            <input
              type="date"
              name="regStart"
              value={formValues.regStart}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Registration End:
            </label>
            <input
              type="date"
              name="regEnd"
              value={formValues.regEnd}
              onChange={handleChange}
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
              name="classStart"
              value={formValues.classStart}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Class End Date:
            </label>
            <input
              type="date"
              name="classEnd"
              value={formValues.classEnd}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Session Duration (in hours):
            </label>
            <input
              type="number"
              name="duration"
              min="0"
              step="0.5"
              value={formValues.duration}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Number of lessons:
            </label>
            <input
              type="number"
              name="lessons"
              value={formValues.lessons}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Registration Fee:
            </label>
            <input
              type="number"
              name="fee"
              min="0"
              value={formValues.fee}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Status:
            </label>
            <input
              name="status"
              value={formValues.status}
              readOnly
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
  );
};

export default UpdateSession;
