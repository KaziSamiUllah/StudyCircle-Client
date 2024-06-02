import axios from "axios";
import useSessionData from "../../../Hooks/useSessionData";
import useUser from "../../../Hooks/useUser";
import { useEffect } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const TutorMaterials = () => {
  const { tutorSessions } = useSessionData();
  const{user} = useUser()
  const axiosSecure = useAxiosSecure()
 
useEffect(()=>{
    axiosSecure.get(`/materials/samiullahsagor@outlook.com`)
    .then(response => {
      // Handle successful response
      console.log(response.data); // Assuming the response contains materials data
    })
    .catch(error => {
      // Handle error
      console.error('Error fetching materials:', error);
    });

}, [])



  



  return (
    <div>
      {/* {tutorSessions.map((session) => (
        <div key={session._id}>
          <h1>{session.sessionTitle}</h1>
          
          {session?.materials?.map((material, idx) => (
            <div className="flex bg-slate-300 m-1" key={idx}>
              <p>{material.materialTitle}</p>
              <p>{material.link}</p>
            </div>
          ))}
        </div>
      ))} */}


    </div>
  );
};

export default TutorMaterials;
