import { useState } from 'react';

import Swal from 'sweetalert2';
import useFetchSessionbyId from './useFetchSessionbyId';
import useUser from './useUser';
import axios from 'axios';
import useAxiosSecure from './useAxiosSecure';

const useBooking = (id) => {
    const axiosSecure= useAxiosSecure()
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const {user} = useUser()
  const { sessionData } = useFetchSessionbyId(id);
  const [status, setStatus] = useState()

  const handleBooking = async () => {
    setIsLoading(true);
    setError(null);
    const bookingData = {
      sessionID: id,
      sessionTitle: sessionData?.sessionTitle,
      StudentEmail: user?.email,
      tutorName: sessionData?.tutorName,
      tutorEmail: sessionData?.tutorEmail,
    };

    try {
      const res = await axiosSecure.post("/bookings", bookingData);
      console.log(res);
      if (res.data.acknowledged) {
        setStatus(true)
        // Swal.fire({
        //   position: "center",
        //   icon: "success",
        //   title: "Study session has been booked",
        //   showConfirmButton: false,
        //   timer: 1500,
        // });
      }
    } catch (err) {
      setError(err);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: error
      });
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { status, handleBooking, isLoading, error };
};

export default useBooking;
