import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useUser from "../../../Hooks/useUser";
import { FaEdit } from "react-icons/fa";

import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyNotes = () => {
  const { user } = useUser();
  const axiosSecure = useAxiosSecure();

  const {
    isLoading,
    error,
    refetch,
    data: notes = [],
  } = useQuery({
    queryKey: ["notes"],
    queryFn: async () =>
      await axiosSecure.get(`/notes/${user.email}`)
     
  });

  //   const {
  //     isPending,
  //     error,
  //     data:notes = [],
  //   } = useQuery({
  //     queryKey: ["notes"],
  //     queryFn: async () => {
  //       await axiosSecure.get(`/notes/${user?.email}`);

  //     },
  //   });

  console.log(notes);

  const deleteNote = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/notesById/${id}`);
        console.log(res);
        if (res.status === 200) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
         
        }
        refetch()
      }
    });
  };

  return (
    <div className="w-full">
      {isLoading ? (
        <div className="flex justify-center items-center min-h-screen text-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <div>
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Note Title</th>
                <th className="py-2 px-4 border-b">Descriptio</th>
                <th className="py-2 px-4 border-b">Edit</th>
                <th className="py-2 px-4 border-b">Delete</th>
              </tr>
            </thead>
            <tbody>
              {notes?.data?.length > 0 &&
                notes?.data?.map((note) => (
                  <tr key={note._id}>
                    <td className="py-2 px-4 border-b text-center">
                      {note?.noteTitle}
                    </td>
                    <td className="py-2 px-4 border-b text-center">
                      {note?.noteDescription}
                    </td>
                    <td className="py-2 px-4 border-b text-center">
                      <Link to={`/dashboard/updateNote/${note?._id}`}>
                        <button className="text-2xl">
                          <FaEdit />
                        </button>
                      </Link>
                    </td>
                    <td className="py-2 px-4 border-b ">
                      <button
                        onClick={() => deleteNote(note?._id)}
                        className="text-3xl text-red-500"
                      >
                        <MdDeleteForever />
                      </button>
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

export default MyNotes;
