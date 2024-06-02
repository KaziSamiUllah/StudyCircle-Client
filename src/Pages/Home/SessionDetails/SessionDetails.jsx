import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useFetchSessionbyId from "../../../Hooks/useFetchSessionbyId";

const SessionDetails = () => {
  const id = useParams();
  const ID = id.id;

  console.log(ID);

  const {sessionData} = useFetchSessionbyId(ID)
  console.log(sessionData);

  return (
    <div>
      <div className="my-20 max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-2">{sessionData?.sessionTitle}</h1>
        <p className="text-lg font-medium mb-1">
          Tutor: {sessionData?.tutorName}
        </p>
        <p className="text-lg font-medium mb-1">Average Rating: 5</p>
        <p className="text-sm text-gray-600 mb-4">
          {sessionData?.sessionDescription}
        </p>
        <div className="text-sm text-gray-800">
          <p>
            <strong>Registration Start Date:</strong> {sessionData?.regStart}
          </p>
          <p>
            <strong>Registration End Date:</strong> {sessionData?.regEnd}
          </p>
          <p>
            <strong>Class Start Time:</strong> {sessionData?.classStart}
          </p>
          <p>
            <strong>Class End Time:</strong> {sessionData?.classEnd}
          </p>
          <p>
            <strong>Session Duration:</strong> {sessionData?.duration}
          </p>
          <p>
            <strong>Total lessons:</strong> {sessionData?.lessons}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SessionDetails;
