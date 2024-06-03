import { useParams } from "react-router-dom";


import useFetchSessionbyId from "../../../Hooks/useFetchSessionbyId";
import ViewBookDetails from "../../../Components/Shared/ViewBookDetails";
import useUser from "../../../Hooks/useUser";
import useMoment from "../../../Hooks/useMoment";
import useAxiosSecure, { axiosSecure } from "../../../Hooks/useAxiosSecure";
import { useEffect } from "react";


const SessionDetails = () => {
const {savedUser} = useUser()
const currentDate = useMoment()
const axiosSecure = useAxiosSecure()


  const id = useParams();
  const ID = id.id;
  const { sessionData } = useFetchSessionbyId(ID);

  const handleBooking = async ()=>{

     const res = await axiosSecure.post('/bookings' )
      console.log(res);
  }





  return (
    <div className="my-10 max-w-5xl mx-auto p-10 bg-white shadow-md rounded-lg">
      <ViewBookDetails sessionData={sessionData}></ViewBookDetails>
      <div className="flex mt-5 justify-end">
        <button onClick={()=>handleBooking(ID)} disabled={(savedUser?.role !== "student") || !(sessionData?.regEnd > currentDate > sessionData?.regStart)} className="btn btn-neutral text-white font-bold hover:bg-secondary hover:text-black text-lg">
          {(sessionData?.regEnd > currentDate > sessionData?.regStart)? "Book Now" : "Registration Closed" }</button>
      </div>
    </div>
  );
};

export default SessionDetails;
