import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import useOngoing from "../../../Hooks/useOngoing";
import useMoment from "../../../Hooks/useMoment";

const SessionCard = ({ session }) => {
  // console.log(session);
  const { sessionTitle, tutorName, sessionDescription, lessons,regStart, regEnd, _id } =
    session;
  const currentDate = useMoment()
 


  return (
    <div>
      <div className="card w-96  shadow-xl m-5 p-10 bg-white">
        <div>
          <h1 className="text-xl font-semibold">{sessionTitle}</h1>
          <div className="my-2 flex items-center gap-5">
            <h1>{tutorName}</h1>
          </div>
          <p className="w-full">{sessionDescription?.slice(0, 150)}</p>
        </div>
        <div className="card-body">
          <div className="flex justify-between">
            <h1>Lessons: {lessons}</h1>
            <h1>Ratings</h1>
          </div>

          <hr className="text-slate-500 border-slate-500 w-full" />

          <div className="card-actions justify-between items-center ">
            <h1 className="font-bold">{ (regEnd > currentDate > regStart)? "Ongoing" : "Closed"}</h1>
           
              <Link
                to={`/sessionDetails/${_id}`}
                className="text-base btn btn-sm btn-ghost rounded-full flex flex-row items-center gap-1"
              >
                Read more <FaArrowRight className="text-secondary"/>
              </Link>
       
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionCard;
