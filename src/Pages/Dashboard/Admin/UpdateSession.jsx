import axios from "axios";
import Swal from "sweetalert2";
import useUser from "../../../Hooks/useUser";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useFetchSessionbyId from "../../../Hooks/useFetchSessionbyId";
import { useParams } from "react-router-dom";

const UpdateSession = () => {
  const axiosSecure = useAxiosSecure();
  const { savedUser } = useUser();
  const ID = useParams().id;
  console.log(ID);
  const { sessionData, refetch } = useFetchSessionbyId(ID);
  console.log(sessionData);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const sessionTitle = formData.get("sessionTitle");
    const tutorName = formData.get("tutorName");
    const tutorEmail = formData.get("tutorEmail");
    const sessionDescription = formData.get("sessionDescription");
    const regStart = formData.get("regStart");
    const regEnd = formData.get("regEnd");
    const classStart = formData.get("classStart");
    const classEnd = formData.get("classEnd");
    const status = formData.get("status");
    const lessons = formData.get("lessons");
    const fee = formData.get("fee");
    const duration = formData.get("duration");

    const data = {
      sessionTitle,
      tutorName,
      tutorEmail,
      sessionDescription,
      regStart,
      regEnd,
      classStart,
      classEnd,
      status,
      lessons,
      fee,
      duration,
    };
    console.log(data);
    axiosSecure
      .put(`/updateSessionFull/${ID}`, data)
      .then((res) => {
        console.log(res);
        if (res.statusText == "OK") {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "New session has been posted for approval",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit} className="w-10/12 mx-auto mt-8 ">
      <h1 className="text-center text-3xl font-semibold my-5">
        Update session data
      </h1>
      <div className="grid grid-cols-2 gap-5">
        <div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Session Title:
            </label>
            <input
              type="text"
              name="sessionTitle"
              defaultValue={sessionData?.sessionTitle}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Tutor Name:
            </label>
            <input
              type="text"
              name="tutorName"
              defaultValue={savedUser?.name}
              readOnly
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Tutor Email:
            </label>
            <input
              type="text"
              name="tutorEmail"
              defaultValue={savedUser?.email}
              readOnly
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Session Description:
            </label>
            <textarea
              type="text"
              name="sessionDescription"
              defaultValue={sessionData?.sessionDescription}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Registration Start:
            </label>
            <input
              type="date"
              name="regStart"
              defaultValue={sessionData?.regStart}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Registration End:
            </label>
            <input
              type="date"
              name="regEnd"
              defaultValue={sessionData?.regEnd}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Class Start Date:
            </label>
            <input
              type="date"
              name="classStart"
              defaultValue={sessionData?.regStart}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Class End Date:
            </label>
            <input
              type="date"
              name="classEnd"
              defaultValue={sessionData?.classEnd}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Session Duration (in hours):
            </label>
            <input
              type="number"
              name="duration"
              min="0"
              step="0.5"
              defaultValue={sessionData?.duration}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Number of lessons:
            </label>
            <input
              type="number"
              name="lessons"
              defaultValue={sessionData?.lessons}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Registration Fee:
            </label>
            <input
              type="number"
              name="fee"
              min="0"
              defaultValue={sessionData?.fee}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight "
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Status:
            </label>
            <input
              name="status"
              defaultValue={sessionData?.status}
              readOnly
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              {/* Add additional status options here */}
            </input>
          </div>
        </div>
      </div>
      <input
        type="submit"
        className="bg-secondary hover:bg-neutral hover:text-white btn w-full"
      />
    </form>
  );
};
export default UpdateSession;