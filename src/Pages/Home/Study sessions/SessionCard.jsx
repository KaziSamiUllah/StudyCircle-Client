import { FaArrowRight } from "react-icons/fa";

const SessionCard = () => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl m-5 p-5">
        <div>
          <h1 className="text-xl font-semibold">
            Session title will be added here
          </h1>
          <div className="p-2 flex items-center gap-5">
            <div className="avatar">
              <div className="w-8 rounded-full ">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <h1>Tutor name</h1>
          </div>
          <p>
            Description: Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Vitae explicabo consequatur eveniet aliquam nostrum repellat.
            Dignissimos aspernatur fuga quae. Rem itaque maiores dolor sit
            voluptatem delectus nulla dignissimos quidem unde.
          </p>
        </div>
        <div className="card-body">
          <div className="flex justify-between">
            <h1>24 Lessons</h1>
            <h1>rating</h1>
          </div>

          <hr className="text-slate-500 border-slate-500 w-full" />

          <div className="card-actions justify-between items-center ">
            <button className="btn">Ongoing</button>
            <button className="flex items-center gap-1">
              {" "}
              Read more{" "}
              <span>
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionCard;
