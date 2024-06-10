import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SessionCard from "./SessionCard";
import { Link } from "react-router-dom";

const StudySessions = () => {
  const axiosSecure = useAxiosSecure();

  const { isLoading, data = [] } = useQuery({
    queryKey: ["viewSessions"],
    queryFn: async () => {
      const res = await axiosSecure.get("/approvedSessions");
      const slicedData = res.data.slice(0, 6);
      return slicedData;
    },
  });

  return (
    <div>
      <h1 className="section-title">Sessions</h1>
      <div>
        {isLoading ? (
          <div className="flex ">
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
          <div className="grid grid-cols-3 my-5">
            {data?.map((session) => (
              <SessionCard key={session._id} session={session}></SessionCard>
            ))}
          </div>
        )}
      </div>
      <div className="flex justify-center">
        <Link to="/allDisplaySessions">
          <button className="btn">Vew All</button>
        </Link>
      </div>
    </div>
  );
};

export default StudySessions;
