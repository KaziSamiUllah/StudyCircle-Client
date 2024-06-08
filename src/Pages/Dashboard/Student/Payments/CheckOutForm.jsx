import {
  CardElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useUser from "../../../../Hooks/useUser";
import Swal from "sweetalert2";
import useBooking from "../../../../Hooks/useBooking";

const CheckoutForm = ({sessionData}) => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [errorMessage, setError] = useState();
  const [clientSecret, setClientSecret] = useState("");
const price = 50
// const price = sessionData?.fee;
const {user} = useUser()
// const {status, handleBooking, isLoading, error } = useBooking(sessionData?._id);

// console.log(status);


  useEffect(() => {
    if(price){
    axiosSecure.post("/create-payment-intent", { price }).then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });}
  }, [axiosSecure, price, sessionData]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("[error]", error);
      setError(error.code);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }
///////////Payment Confirmation////////////////////

const {paymentIntent, error : paymentError} = await stripe.confirmCardPayment(clientSecret, {
    payment_method: {
        card: card,
        billing_details: {
          name: user.displayName || "Anonymous",
        },
      },
})
if(paymentError){
 console.log("payment Error");   
}
else{
    console.log("paymetn Intent",paymentIntent?.status);
    // if(paymentIntent?.status == 'succeeded')
    //   handleBooking();
    // if(status===true){
    //     Swal.fire({
    //         position: "center",
    //         icon: "success",
    //         title: `Your transaction ID is: ${paymentIntent.id}`,
    //         showConfirmButton: false,
    //         timer: 1500
    //       });
    // }
}


  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        className="m-3 p-2 rounded-lg border-2"
        options={{
          style: {
            base: {
              fontSize: "18px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <div className="flex justify-end">
        <button
          className="btn w-20 m-3 font-bold text-lg"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </div>
      <p className="text-red-400 mx-5 font-semibold">{errorMessage}</p>
    </form>
  );
};

export default CheckoutForm;
