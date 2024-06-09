import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const Tutors = ({ role }) => {
  const axiosSecure = useAxiosSecure();
  console.log(role);
  const {
    data = {},
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["RoleSpecificData"],
    queryFn: async () => await axiosSecure.get(`/usersbyRole/${role}`),
    enabled: !!role,
  });
  console.log(data.data);

  return (
    <div>
      Best Tutors to assist you
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {data?.data?.map((tutor) => (
        <div key={tutor._id} className="bg-white shadow-md rounded-lg p-4">
          <img 
            src={tutor.profilePicture || "https://via.placeholder.com/150"} 
            alt={`${tutor.name}'s profile`} 
            className="w-24 h-24 rounded-full mx-auto"
          />
          <h1 className="text-xl font-semibold text-center mt-4">{tutor.name}</h1>
          <p className="text-center text-gray-600">{tutor.email}</p>
        </div>
      ))}
    </div>
      {/* {isPending?
        <div className="w-full h-screen flex justify-center items-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>:
            
} */}
    </div>
  );
};

export default Tutors;
