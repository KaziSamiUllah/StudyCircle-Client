import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProviders";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import useUploadUserData from "../../Hooks/useUploadUserData";

const SignUp = () => {
  const { user, SignUp, loading, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);
    const { uploadUserData, error } = useUploadUserData();

  
  const { register, handleSubmit } = useForm();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    let imageURL = "";
    if (data.image[0]) {
      const formData = new FormData();
      formData.append("image", data.image[0]);

      const response = await axios.post(
        "https://api.imgbb.com/1/upload",
        formData,
        {
          params: {
            key: "0797d4ee38bdb9a92d846524045a5347",
          },
        }
      );
      imageURL = response.data.data.url;
    }
    const userData = {
      name: data.name,
      email: data.email,
      role: data.role,
      imageURL: imageURL || "",
    };

    SignUp(data.email, data.password).then((res) => {
      console.log(res.user.uid);
      console.log(userData);

      if (res.user.uid) {
        uploadUserData(userData)
        navigate('/');
      }
    });
  };

  const handleGoogleLogIn=()=>{
   signInWithGoogle()
    
  }







  // const uploadUserData = async (userData) => {
  //   axiosSecure
  //     .post("/users", userData)
  //     .then((response) => {
  //       console.log("Response:", response.data);
  //       Swal.fire({
  //         position: "top-end",
  //         icon: "success",
  //         title: "Successfully Signed UP",
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //       navigate("/");
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // };

  return (
    <div className="bg-white p w-1/3  mx-auto p-10 m-10 rounded-2xl drop-shadow-xl">
      <h1 className="text-2xl text-center">Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-8">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            {...register("password", { required: true })}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="role"
            className="block text-sm font-medium text-gray-700"
          >
            Role:
          </label>
          <select
            id="role"
            {...register("role", { required: true })}
            className="mt-1 p-2 border rounded-md w-full"
          >
            <option value="Student">Student</option>
            <option value="Tutor">Tutor</option>
            {/* <option value="admin">Admin</option> */}
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Profile Image:
          </label>
          <input
            type="file"
            id="image"
            {...register("image")}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary"
          >
            Sign Up
          </button>
        </div>
        <h2 className="text-black mt-5">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 font-bold">
            LOGIN
          </Link>
        </h2>
      </form>
      <hr />
      <div
              onClick={handleGoogleLogIn}
              className="text-black mt-5 text-4xl  flex w-fit mx-auto btn rounded-full px-1"
            >
              <FcGoogle />
            </div>
    </div>
  );
};

export default SignUp;
