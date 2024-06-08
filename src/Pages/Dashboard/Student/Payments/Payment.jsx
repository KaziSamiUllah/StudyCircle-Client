import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckOutForm";
import { useParams } from "react-router-dom";
import useFetchSessionbyId from "../../../../Hooks/useFetchSessionbyId";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_GW);

const Payment = () => {
  
  const { id } = useParams();

  const { sessionData } = useFetchSessionbyId(id);
  console.log(sessionData?.fee);





 
  

  return (
    <div className="min-h-screen">
      <h1 className="text-center font-bold text-2xl my-10">Proceed Paymment</h1>
      <div className="drop-shadow-lg  mx-auto w-1/3 border-slate-300 bg-white border-2 rounded-xl">
        <Elements stripe={stripePromise}>
          <CheckoutForm sessionData={sessionData} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
