import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import SessionCard from "./SessionCard";
import { Link } from "react-router-dom";

const AllDisplaySessions = () => {
  const axiosSecure = useAxiosSecure();

  const { isLoading, data = [] } = useQuery({
    queryKey: ["viewSessions"],
    queryFn: async () => {
      const res = await axiosSecure.get("/approvedSessions");
      return res.data;
    },
  });

  return (
    <div>
      <h1 className="section-title">Sessions</h1>
      <div>
        {isLoading ? (
          <div className="flex lg:flex-row flex-col">
            <div className="flex flex-col gap-4 w-96 m-5 ">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
            <div className="flex flex-col gap-4 w-96 m-5  ">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5">
            {data?.map((session) => (
              <SessionCard key={session._id} session={session}></SessionCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllDisplaySessions;
