import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { SignIn } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  console.log(from);
  const [showPass, setShowPass] = useState(false);
  const toggleView = () => {
    setShowPass(!showPass);
    showPass;
  };

  const onSubmit = (data) => {
    console.log(data);
    SignIn(data.email, data.password).then((res) => {
      console.log(res.user.email);
      if (res.user.email) {
        navigate(from, { replace: true });
      }
    });
  };

  return (
    <div className="bg-white mx-2 lg:w-1/3  lg:mx-auto p-10 m-10 rounded-2xl drop-shadow-xl">
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
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password:
        </label>
        <div className="flex items-center relative mb-4">
          <div className="absolute right-3 top-1/3" onClick={toggleView}>
            {!showPass ? <FaEye /> : <FaEyeSlash />}
          </div>

          <input
            type={showPass ? "text" : "password"}
            name="password"
            autoComplete="current-password"
            required
            {...register("password", { required: true })}
            className="appearance-none rounded-md block w-full px-3 py-2 border bg-transparent text-black border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
            placeholder="Password"
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
        <h2 className="text-black mt-5">
                Do not have an account?
                <Link to="/signUp" className="text-blue-500 font-bold">
                  REGISTER
                </Link>
              </h2>
      </form>
    </div>
  );
};

export default Login;
