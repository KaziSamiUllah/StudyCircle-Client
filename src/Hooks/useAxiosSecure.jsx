import axios from "axios";
import { useContext } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";


export const axiosSecure = axios.create({
  baseURL:"https://study-circle-server-six.vercel.app/"
  // baseURL: "http://localhost:5000",
});

const useAxiosSecure = () => {

  // const navigate = useNavigate()
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("Token");

      config.headers.token = token;
      return config;
    },
    function (error) {
      console.log(error);
      return Promise.reject(error);
    }
  );

  /////Intercept 401 & 403 Status

  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response.status;
      console.log(status);
      if (status === 401 || status === 403) {
        // await SignOut()
        //navigate('/')
///TODO: fix it//////////
      }

      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
