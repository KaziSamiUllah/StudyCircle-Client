import { useQuery } from "@tanstack/react-query";
import useUser from "../../../Hooks/useUser";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { MdDelete } from "react-icons/md";
import { FcViewDetails } from "react-icons/fc";
import useSessionData from "../../../Hooks/useSessionData";
import { Link } from "react-router-dom";

const TutorSessions = () => {
  const axiosSecure = useAxiosSecure();

  const { tutorSessions, isLoading, refetch } = useSessionData();

  const handleDelete = async (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteSession(id);

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const deleteSession = async (id) => {
    const res = await axiosSecure.delete(`/sessions/${id}`);
    console.log(res);
    if (res.status === 200) {
      refetch();
    }
  };

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
                <th className="py-2 px-4 border-b">SL</th>
                <th className="py-2 px-4 border-b">Session Title</th>
                <th className="py-2 px-4 border-b">Registration Fee</th>
                <th className="py-2 px-4 border-b ">Status</th>
                <th className="py-2 px-4 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {tutorSessions.map((session, index) => (
                <tr key={index}>
                  <td className="text-center">{index + 1}</td>
                  <td className="py-2 px-4 border-b text-center">
                    {session.sessionTitle}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {session.fee}
                  </td>
                  <td className="py-2 px-4 border-b ">
                    <h1
                      className={`${
                        session.status === "Approved"
                          ? "text-green-400"
                          : session.status === "Pending"
                          ? "text-blue-400"
                          : session.status === "Rejected"
                          ? "text-red-400"
                          : ""
                      } font-semibold text-center `}
                    >
                      {session.status}{" "}
                      <span>
                        <Link
                          to={`/dashboard/reApply/${session._id}`}
                          className="text-black text-shadow"
                        >
                          {session.status === "Rejected" && "(Re-submit)"}{" "}
                        </Link>
                      </span>{" "}
                    </h1>
                  </td>
                  <td className="py-2 px-4 border-b flex  justify-center">
                    <div className="text-right  w-4/5">
                      {session.status === "Approved" && (
                        <button
                          title="Add Materials"
                          className="btn btn-ghost btn-sm   m-1 w-fit mx-auto text-2xl"
                        >
                          <Link
                            to={`/dashboard/uploadMaterials/${session._id}`}
                          >
                            {" "}
                            <FcViewDetails />
                          </Link>
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(session._id)}
                        className="btn btn-ghost btn-sm  text-red-500 m-1 w-fit mx-auto text-2xl"
                      >
                        <MdDelete />
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

export default TutorSessions;
