import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useUser from "../../../Hooks/useUser";
import { useState } from "react";
import { FaEdit, FaRegSave } from "react-icons/fa";

import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";

const MyNotes = () => {
  const { user } = useUser();
  const axiosSecure = useAxiosSecure();

  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(`http://localhost:5000/notes/${user.email}`).then((res) =>
        res.json()
      ),
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

  //   console.log(data);
  const [isEditing, setEditing] = useState(false);

  const deleteNote = () => {};

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
                <th className="py-2 px-4 border-b">Note Title</th>
                <th className="py-2 px-4 border-b">Descriptio</th>
                <th className="py-2 px-4 border-b">Edit</th>
                <th className="py-2 px-4 border-b">Delete</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((note) => (
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
                    <button onClick={deleteNote} className="text-3xl text-red-500">
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
