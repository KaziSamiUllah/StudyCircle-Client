import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { MdDelete } from "react-icons/md";
import { FcViewDetails } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const AllStudySessions = () => {
  const axiosSecure = useAxiosSecure();
  const [showTab, setShowTab] = useState("Pending");

  const {
    isLoading,
    refetch,
    data: sessions = [],
  } = useQuery({
    queryKey: ["allSessions", showTab],
    queryFn: async () => {
      const res = await axiosSecure.get(`/sessionsByStatus/${showTab}`);
      return res;
    },
  });
  useEffect(() => {
    refetch();
  }, [showTab, refetch]);
 

  ////////////data submit in pending TAB///////////////////////

  const [updatedID, setID] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  

  const handleApprove =  (id) => {
    setID(id);
console.log(id);
    updateStatus(id, "Approved", "");
  };

  const handleReject = (id) => {
    setID(id);
    setIsModalOpen(true);
  };

  const handleModalData = async (e) => {
    e.preventDefault();
    const reason = e.target.elements.reason.value;
    setIsModalOpen(false);
    updateStatus( updatedID ,"Rejected", reason);
    refetch()
  };





  const updateStatus = async (id , status, reason) => {
    console.log(id);
    const res = await axiosSecure.put(`/updateSessions/${id}`, {
      status,
      reason: reason || "",
    });
    console.log(res);
    if (res?.status === 200) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Session has been ${status}!`,
        showConfirmButton: false,
        timer: 1500,
      });
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
          <h1 className=" px-6 py-3 w-full text-2xl text-center leading-4 font-medium text-gray-500 uppercase tracking-wider ">
            All Sessions
          </h1>
          <div role="tablist" className="tabs tabs-lifted ">
            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab bg-white font-bold"
              aria-label="Pending"
              checked={showTab === "Pending"}
              onChange={() => {
                setShowTab("Pending");
              }}
            />
            <div
              role="tabpanel"
              className={`tab-content bg-white border-base-300 rounded-box p-6 ${
                showTab === "Pending" ? "" : "hidden"
              }`}
            >
              {/* Show the pending list on first tab */}
              <div className="">
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
                        <tr key={session._id}>
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
                              <button
                                onClick={() =>
                                  handleApprove(session._id, {
                                    status: "Approved",
                                  })
                                }
                                className="btn-success btn btn-sm bg-opacity-20 border-none"
                              >
                                {" "}
                                Approve{" "}
                              </button>
                              <button
                                className="btn-error bg-opacity-20 btn btn-sm border-none"
                                onClick={() => {
                                  document.getElementById("my_modal_5");
                                  handleReject(session._id);
                                }}
                              >
                                Reject
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              {isModalOpen && (
                <dialog
                  id="my_modal_5"
                  className="modal modal-bottom sm:modal-middle"
                  open
                >
                  <div className="modal-box">
                    <h3 className="font-bold text-lg mb-5">
                      Reason for rejecting the session in brief.
                    </h3>
                    <form
                      onSubmit={handleModalData}
                      className="flex flex-col gap-5"
                    >
                      <textarea
                        required
                        type="text"
                        name="reason"
                        className="h-32"
                      />
                      <input
                        type="submit"
                        value="Reject"
                        className="btn-error bg-opacity-20 btn btn-sm border-none"
                      />
                    </form>
                    <div className="modal-action">
                      <button
                        className="btn btn-sm w-full"
                        onClick={() => setIsModalOpen(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </dialog>
              )}
            </div>

            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab bg-re font-bold"
              aria-label="Approved"
              checked={showTab === "Approved"}
              onChange={() => {
                setShowTab("Approved");
              }}
            />
            <div
              role="tabpanel"
              className={`tab-content bg-white border-base-300 rounded-b-xl rounded-tr-xl p-6 ${
                showTab === "Approved" ? "" : "hidden"
              }`}
            >
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllStudySessions;
