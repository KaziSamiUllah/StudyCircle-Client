import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useUser = () => {
  const { user, SignOut } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const {
    data = {},
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["userData"],
    queryFn: () => axiosSecure.get(`/users/${user.email}`),
    enabled: !!user?.email,
  });
  return { user, SignOut, savedUser: data.data, isPending, refetch };
};

export default useUser;
