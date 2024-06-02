import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useFetchSessionbyId from "../../../Hooks/useFetchSessionbyId";
import axios from "axios";

const UploadMaterials = () => {
  const id = useParams();
  const ID = id.id;
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const { sessionData } = useFetchSessionbyId(ID);
  const [image, setImage] = useState();
  const [imageURL, setImageURL] = useState();
//   const [materialOBJ, setMaterial] = useState();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const materialTitle = formData.get("materialTitle");
    const link = formData.get("link");

    if (image) {
      const apiKey = "0797d4ee38bdb9a92d846524045a5347";
      const uploadData = new FormData();
      uploadData.append("key", apiKey);
      uploadData.append("image", image);

      axios
        .post("https://api.imgbb.com/1/upload", uploadData)
        .then((response) => {
          const data = response.data;
          if (data.success) {
            setImageURL(data.data.url);
              uploadMaterial({ materialTitle, link, URL: data.data.url });
            
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
              footer: `<a href="#">${data.error.message}</a>`,
            });
            console.error("Image upload failed:", data.error.message);
          }
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: `<a href="#">${error.message}</a>`,
          });
          console.error("Image upload failed:", error.message);
        });
    } else {
    
        uploadMaterial({ materialTitle, link, URL: "" });
      
    }
  };

  const uploadMaterial = async (materialOBJ) => {
    const res = await axiosSecure
      .patch(`/updateSessions/${ID}`, materialOBJ)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your materials have been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          //   navigate("dashboard/tutorMaterials")
        }
      })
      .catch((error) => console.log(error));
    return res;
  };

  return (
    <div>
      <h1 className="text-center text-3xl font-semibold my-5">
        Upload Materials
      </h1>
      <div className="w-10/12 mx-auto my-10">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Material Title:
            </label>
            <input
              type="text"
              name="materialTitle"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Session Title:
            </label>
            <input
              type="text"
              name="sessionTitle"
              defaultValue={sessionData?.sessionTitle}
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
              defaultValue={sessionData?.tutorEmail}
              readOnly
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Link:
            </label>
            <input
              type="url"
              name="link"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Upload Image:
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <input
            type="submit"
            className="bg-secondary hover:bg-neutral hover:text-white btn w-full"
          />
        </form>
      </div>
    </div>
  );
};

export default UploadMaterials;
