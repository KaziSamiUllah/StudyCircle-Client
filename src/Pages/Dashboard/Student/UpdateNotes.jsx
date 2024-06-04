import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure, { axiosSecure } from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const UpdateNotes = () => {
    const axiosSecure = useAxiosSecure()
  const ID = useParams().id;
  const navigate = useNavigate()
  const {
    isPending,
    error,
    refetch,
    data: notes = {},
  } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => axiosSecure.get(`/notesById/${ID}`),
  });



  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const noteTitle = formData.get("noteTitle");
    const noteDescription = formData.get("noteDescription");
    const note = { noteTitle, noteDescription };
    console.log(note);

    const res = await axiosSecure.put(`/updateNotes/${ID}` , note);
    console.log(res);
    if(res.status===200){
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Your note has been updated",
            showConfirmButton: false,
            timer: 1500
          });
         navigate('/dashboard/myNotes')
    }
  };

  return (
    <div>
      <div className="w-10/12 mx-auto">
        <div>
          <h1 className="font-bold text-3xl text-center">Update Note</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email:
            </label>
            <input
              type="text"
              name="email"
              defaultValue={notes?.data?.userEmail}
              readOnly
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Title
            </label>
            <input
              type="text"
              name="noteTitle"
              defaultValue={notes?.data?.noteTitle}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Description:
            </label>
            <textarea
              type="text"
              name="noteDescription"
              defaultValue={notes?.data?.noteDescription}
              className="h-40 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <input
            type="submit"
            value="Update Note"
            className="btn btn-primary"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateNotes;
