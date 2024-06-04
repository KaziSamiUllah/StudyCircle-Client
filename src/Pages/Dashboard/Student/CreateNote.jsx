import useUser from "../../../Hooks/useUser";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CreateNote =  () => {
  const { user } = useUser();
  const axiosSecure = useAxiosSecure()
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const noteTitle = formData.get("noteTitle");
    const noteDescription = formData.get("noteDescription");
    const note ={ userEmail: user?.email, noteTitle, noteDescription };
    console.log(note);
    const res =  await axiosSecure.post('/notes', note)
    console.log(res);
    if(res.status===200)
        {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Your note has been saved",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/dashboard/myNotes')
        }
  };





  return (
    <div className="w-10/12 mx-auto">
      <div>
        <h1 className="font-bold text-3xl text-center">Add Note</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email:
          </label>
          <input
            type="text"
            name="email"
            defaultValue={user?.email}
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
            className="h-40 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <input type="submit" value="Save Note" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default CreateNote;
