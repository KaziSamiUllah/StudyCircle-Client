import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../../Hooks/useAxiosSecure";
import useUser from "../../../Hooks/useUser";
import { Link } from "react-router-dom";

const BookedSessions = () => {
  const { user } = useUser();

  const {
    isLoading,
    data: bookedSessions = [],
  } = useQuery({
    queryKey: ["studentBookedSessions"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookingsByEmail/${user.email}`);
      return res;
    },
  });

console.log(bookedSessions.data);

  return (
    <div className="w-full">
      {isLoading ? (
        <div className=" flex justify-center items-center min-h-screen text-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <div>
          <h1 className=" px-6 py-3 bg-gray-50 text-2xl text-center leading-4 font-medium text-gray-500 uppercase tracking-wider ">
          My Sessions
        </h1>
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
