import { useQuery } from "@tanstack/react-query";
import React from "react";
import { axiosSecure } from "../../../Hooks/useAxiosSecure";
import useUser from "../../../Hooks/useUser";
import { FcViewDetails } from "react-icons/fc";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";

const BookedSessions = () => {
  const { user } = useUser();

  const {
    refetch,
    isLoading,
    data: bookedSessions = [],
  } = useQuery({
    queryKey: ["studentBookedSessions"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookingsByEmail/${user.email}`);
      return res;
    },
  });

  return (
    <div className="w-full">
      {isLoading ? (
        <div className=" flex justify-center items-center min-h-screen text-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <div>
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Session Title</th>
                <th className="py-2 px-4 border-b">Tutor Name</th>
                <th className="py-2 px-4 border-b">Tutor Email</th>
                <th className="py-2 px-4 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {bookedSessions?.data?.map((bookedSession) => (
                <tr key={bookedSession._id}>
                  <td className="py-2 px-4 border-b text-center">
                    {bookedSession?.sessionTitle}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {bookedSession?.tutorName}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {bookedSession?.tutorEmail}
                  </td>
                  <td className="py-2 px-4 border-b ">
                    <div className="text-center flex justify-center items-center">
                      <button
                        title="vire Details"
                        className="btn btn-ghost btn-sm   m-1 w-fit mx-auto"
                      >
                        <Link
                          to={`/dashboard/bookedSessionDetails/${bookedSession.sessionID}`}
                        >
                          Details
                        </Link>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BookedSessions;
