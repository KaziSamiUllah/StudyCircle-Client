import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const useUser = () => {
  const { user, SignOut } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate()

  const {
    data = {},
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["userData"],
    queryFn: async() => await axiosSecure.get(`/users/${user.email}`),
    enabled: !!user?.email,
  });
  return { user, SignOut, savedUser: data.data, isPending, refetch };
};

export default useUser;
