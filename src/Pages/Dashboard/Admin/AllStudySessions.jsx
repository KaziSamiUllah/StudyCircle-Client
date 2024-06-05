import { useQuery } from "@tanstack/react-query";
import useUser from "../../../Hooks/useUser";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { MdDelete } from "react-icons/md";
import { FcViewDetails } from "react-icons/fc";
import useSessionData from "../../../Hooks/useSessionData";
import { Link } from "react-router-dom";

const AllStudySessions = () => {
  const axiosSecure = useAxiosSecure();

  const {
    isLoading,
    refetch,
    data: sessions = [],
  } = useQuery({
    queryKey: ["allSessions"],
    queryFn: async () => {
      const res = await axiosSecure.get("/sessions");
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
                <th className="py-2 px-4 border-b">Registration fee</th>
                <th className="py-2 px-4 border-b">Status</th>
                <th className="py-2 px-4 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {sessions &&
                sessions.data.map((session, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b text-center">
                      {session.sessionTitle}
                    </td>
                    <td className="py-2 px-4 border-b text-center">
                      {session.tutorName}
                    </td>
                    <td className="py-2 px-4 border-b text-center">
                      {session.fee}
                    </td>
                    <td className="py-2 px-4 border-b ">
                      <div className="text-center">{session.status}</div>
                    </td>
                    <td className="py-2 px-4 border-b ">
                      <div className="text-center flex justify-center items-center gap-2">
                        <button className="btn-success btn btn-sm bg-opacity-20 border-none">
                          {" "}
                          Accept{" "}
                        </button>
                        <button className="btn-error bg-opacity-20 btn btn-sm border-none">
                          {" "}
                          Reject{" "}
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

export default AllStudySessions;
