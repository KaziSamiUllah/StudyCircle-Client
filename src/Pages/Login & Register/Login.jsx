import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProviders";

const Login = () => {
    const {SignIn} = useContext(AuthContext)
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    SignIn(data.email, data.password)
    .then(res=>console.log(res))
  };

  return (
    <div className="bg-white p w-1/3  mx-auto p-10 m-10 rounded-2xl drop-shadow-xl">
      <h1 className="text-2xl text-center">Log In</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-8">
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
        <div className="flex justify-center">
          <button
            type="submit"
            className=" bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
