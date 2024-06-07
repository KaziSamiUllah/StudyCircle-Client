import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SessionCard from "./SessionCard";

const StudySessions = () => {
  const axiosSecure = useAxiosSecure();

  const { isLoading, data = [] } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const res = await axiosSecure.get("/approvedSessions");
      return res;
    },
  });
  // console.log(isLoading, data.data);

  return (
    <div>
      <h1 className="section-title">Sessions</h1>

      <div >
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
            {data?.data?.map((session) => (
              <SessionCard key={session._id} session={session}></SessionCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StudySessions;
