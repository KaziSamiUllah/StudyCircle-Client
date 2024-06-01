import { useQuery } from "@tanstack/react-query";
import useUser from "../../../Hooks/useUser";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { MdDelete } from "react-icons/md";
import { FcViewDetails } from "react-icons/fc";

const TutorSessions = () => {
  const axiosSecure = useAxiosSecure();
  const { savedUser } = useUser();

  const {
    isLoading,
    refetch,
    data = [],
  } = useQuery({
    queryKey: ["userSession"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/sessions/${savedUser.email}`);
      return res;
    },
  });
  const tutorSessions = data.data;

  const handleDelete = async (id) => {
    console.log(id);

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            deleteSession(id)
            
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });

    }

const deleteSession = async (id) =>{
    const res = await axiosSecure.delete(`/sessions/${id}`);
    console.log(res.data);
    if (res.data.acknowledged === true) {
      refetch();
      console.log(res.data.acknowledged);
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
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Session Title</th>
                <th className="py-2 px-4 border-b">Registration Fee</th>
                <th className="py-2 px-4 border-b">Status</th>
                <th className="py-2 px-4 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {tutorSessions.map((session, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b text-center">
                    {session.sessionTitle}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {session.fee}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {session.status}
                  </td>
                  <td className="py-2 px-4 border-b ">
                    <div className="text-center">
                      <button title="Show details" className="btn btn-ghost btn-sm   m-1 w-fit mx-auto text-2xl">
                      <FcViewDetails />
                      </button>
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
