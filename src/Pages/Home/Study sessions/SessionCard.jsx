import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import useMoment from "../../../Hooks/useMoment";
import StarRating from "../../../Components/Shared/StarRating";

const SessionCard = ({ session }) => {
  // console.log(session);
  const {
    sessionTitle,
    tutorName,
    sessionDescription,
    lessons,
    regStart,
    regEnd,
    _id,
    rating,
  } = session;
  const currentDate = useMoment();

  return (
    <div>
      <div className="card lg:w-11/12 mx-auto  shadow-xl m-5  lg:h-[50vh] px-5 lg:px-10 py-10 bg-white">
        <div className="">
          <h1 className="text-xl font-semibold min-h-14">{sessionTitle}</h1>
          <div className="my-2 flex items-center gap-5">
            <h1>Tutor: {tutorName}</h1>
          </div>
          <p className="w-full min-h-28 ">
            {sessionDescription?.slice(0, 150)}
          </p>
        </div>
        <div className="card-body">
          <div className="flex justify-between">
            <h1>Lessons: {lessons}</h1>
            <StarRating rating={rating}></StarRating>
          </div>

          <hr className="text-slate-500 border-slate-500 w-full" />

          <div className="card-actions justify-between items-center ">
            <h1 className="font-bold uppercase text-blue-800">
              {(regEnd >= currentDate &&
                currentDate >= regStart &&
                "Ongoing") ||
                (regStart > currentDate && "Upcoming") ||
                (regStart < currentDate && "Closed")}
            </h1>

            <Link
              to={`/sessionDetails/${_id}`}
              className="text-base btn btn-sm btn-ghost rounded-full flex flex-row items-center gap-1"
            >
              Read more <FaArrowRight className="text-secondary" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionCard;
