import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProviders";

const SignUp = () => {
  const { SignUp, loading } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    SignUp(data.email, data.password).then((res) => {
      console.log(res);
    });
  };

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
            <option value="student">Student</option>
            <option value="tutor">Tutor</option>
            <option value="admin">Admin</option>
          </select>
        </div>
       <div className="flex justify-center">
       <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary"
        >
          Sign Up
        </button>
       </div>
      </form>
    </div>
  );
};

export default SignUp;
