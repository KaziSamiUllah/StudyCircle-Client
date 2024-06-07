import React from "react";

import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ApprovedTab = ({ sessions, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const handleDeleteSession = async (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          deleteSession(id);
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
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
    <div>
      <table className="min-w-full bg-white border border-gray-200 rounded-b-xl">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">SL</th>
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
                <td className="text-center">{index + 1}</td>
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
                   
                 <Link to={`/dashboard/admin/editSession/${session._id}`}> <button  className="btn-success btn btn-sm bg-opacity-20 border-none">Edit</button></Link>
                    
                    <button
                      onClick={() => handleDeleteSession(session._id)}
                      className="btn-error bg-opacity-20 btn btn-sm border-none"
                    >
                      {" "}
                      Delete{" "}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApprovedTab;
