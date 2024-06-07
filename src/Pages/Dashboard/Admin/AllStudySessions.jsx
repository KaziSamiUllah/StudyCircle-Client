import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import ApprovedTab from "./ApprovedTab";

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
  const [ApprOpen, setApprOpen] = useState(false);
  const [RejOpen, setRejOpen] = useState(false);
  const [free, setFree] = useState(true);

  /////////////////////Approve Functions////////////////

  const handleApprove = (id) => {
    setID(id);
    // updateStatus(id, "Approved", "");
    setApprOpen(true);
  };

  const handleToggle = () => {
    setFree(!free);
  };
  // console.log(free);

  const handleApproveData = async (e) => {
    e.preventDefault();
    const fee = e.target.elements.fee.value;
    console.log(fee);
    setRejOpen(false);
    updateStatus(updatedID, "Approved", "", fee);
    setApprOpen(false)
    refetch();
  };

  /////////////////////Reject Functions////////////////
  const handleReject = (id) => {
    setID(id);
    setRejOpen(true);
  };

  const handleRejectData = async (e) => {
    e.preventDefault();
    const reason = e.target.elements.reason.value;
    setRejOpen(false);
    updateStatus(updatedID, "Rejected", reason);
    refetch();
  };

  const updateStatus = async (id, status, reason, fee) => {
    console.log(id);
    const res = await axiosSecure.put(`/updateSessions/${id}`, {
      status,
      reason: reason || "",
      fee: fee || 0,
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
    <div className="w-11/12 mx-auto">
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
                                onClick={() => {
                                  document.getElementById("Approve_Modal");
                                  handleApprove(session._id, {
                                    status: "Approved",
                                  });
                                }}
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
              {RejOpen && (
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
                      onSubmit={handleRejectData}
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
                        className="btn-error bg-opacity-20 btn btn-sm w-2/5 mx-auto border-none"
                      />
                    </form>
                    <div className="modal-action">
                      <button
                        className="btn btn-sm w-2/5 mx-auto"
                        onClick={() => setRejOpen(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </dialog>
              )}
              {/* AAAAAAAPPPPPPPPPRRRRRRROOOOOOOVVVVVVVEEEEEEEEEDDDDDDDD */}
              {ApprOpen && (
                <dialog
                  id="Approve_Modal"
                  className="modal modal-bottom sm:modal-middle"
                  open
                >
                  <div className="modal-box">
                    <h3 className="font-bold text-lg mb-5">
                      Set Charge for the Session
                    </h3>
                    <form
                      onSubmit={handleApproveData}
                      className="flex flex-col gap-5"
                    >
                      <div className="flex items-center justify-between">
                        <h1>Is this session Paid?</h1>
                        <input
                          type="checkbox"
                          className="toggle toggle-success my-2"
                          checked={!free}
                          onChange={handleToggle}
                        />
                      </div>

                      <input
                        type="number"
                        name="fee"
                        defaultValue={0}
                        placeholder="Enter the amount you want to charge"
                        className={`my-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                          free && "hidden"
                        }`}
                      />

                      <input
                        type="submit"
                        value="Approve"
                        className="btn-success bg-opacity-20 btn btn-sm border-none w-2/5 mx-auto"
                      />
                    </form>
                    <div className="modal-action">
                      <button
                        className="btn btn-sm w-2/5 mx-auto"
                        onClick={() => {
                          setApprOpen(false), setFree(true);
                        }}
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
              <ApprovedTab refetch={refetch} sessions={sessions}></ApprovedTab>
            
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllStudySessions;
