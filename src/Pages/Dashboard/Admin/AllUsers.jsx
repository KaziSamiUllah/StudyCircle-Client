import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import { GrUserAdmin } from "react-icons/gr";
import { useState } from "react";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const [isEditing, setEditing] = useState(false);
  const [editingID, setEditingID] = useState();
  const [newRole, setNewRole] = useState();

  //   console.log(editingID);
  const {
    isPending,
    error,
    refetch,
    data: allUsers = [],
  } = useQuery({
    queryKey: ["allUserData"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allUsers");
      return res;
    },
  });

  const handleRoleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newRole = formData.get("roleSelect");
    const res = await axiosSecure.put(`/editUsers/${editingID}`, { newRole });
    if (res.status === 200) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: `User has been assigned as ${newRole}`,
        showConfirmButton: false,
        timer: 1500,
      });
      refetch();
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
    setEditing(false);
  };

  return (
    <div>
      {isPending ? (
        <div className="flex justify-center items-center min-h-screen text-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <div>
          <div className="overflow-x-auto">
            <h1 className=" px-6 py-3 w-full text-2xl text-center leading-4 font-medium text-gray-500 uppercase tracking-wider ">
              All Users
            </h1>
            <div className=" flex justify-end my-5 mx-24">
              <label className="input input-sm input-bordered flex items-center gap-2 w-1/4">
                <input type="text" name="search" className="grow" placeholder="Search" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>

            <table className=" w-10/12 mx-auto drop-shadow-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className=" px-6 py-3 w-2/5 text-center  ">Users</th>
                  <th className=" px-6 py-3 w-2/5 text-center   ">User Role</th>
                  <th className="px-6 py-3 w-1/5 ">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y  ">
                {allUsers &&
                  allUsers?.data.map((user) => (
                    <tr key={user._id}>
                      <td className="px-6 py-4 ">
                        <div className="flex items-center ">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full "
                              src={user.image}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm leading-5 font-medium text-gray-900">
                              {user.name}
                            </div>
                            <div className="text-sm leading-5 text-gray-500">
                              {user.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 ">
                        <h1 className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline text-center">
                          {user?.role}
                        </h1>
                      </td>
                      <td className="flex items-center justify-end mx-5 py-4  text-right   font-medium">
                        {!isEditing ? (
                          <button
                            onClick={() => {
                              setEditing(true);
                              setEditingID(user._id);
                            }}
                            className="btn btn-sm btn-ghost  flex flex-row "
                          >
                            Update Role <GrUserAdmin />
                          </button>
                        ) : (
                          editingID === user._id && (
                            <form
                              onSubmit={handleRoleUpdate}
                              className="flex flex-col space-y-2 w-full  border-2 p-1 rounded-xl"
                            >
                              <select
                                name="roleSelect"
                                className="select select-bordered select-sm w-full"
                              >
                                <option disabled selected>
                                  Select a role
                                </option>
                                <option value="Student">Student</option>
                                <option value="Tutor"> Tutor</option>
                                <option value="Admin">Admin</option>
                              </select>
                              <input
                                type="submit"
                                value="Update"
                                className="btn-sm btn bg-secondary"
                              />
                            </form>
                          )
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
export default AllUsers;
