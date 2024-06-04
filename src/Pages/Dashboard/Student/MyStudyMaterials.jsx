import React from "react";
import useUser from "../../../Hooks/useUser";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { RiH1 } from "react-icons/ri";

const MyStudyMaterials = () => {
    const axiosSecure = useAxiosSecure()
  const { user } = useUser();

  const { isLoading, data: bookedSessionmaterials = {} } = useQuery({
    queryKey: ["bookedSessionmaterials"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookedSessionMaterials/${user.email}`);
      return res;
    },
  });

console.log(bookedSessionmaterials);


  return <div>
    {bookedSessionmaterials?.data?.length>0 && bookedSessionmaterials?.data?.map((material, idx)=><h1 key={idx} >{material.materialTitle}</h1>) }
    </div>;
};

export default MyStudyMaterials;
