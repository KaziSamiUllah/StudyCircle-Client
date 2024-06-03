import React, { useState } from "react";
import useFetchSessionbyId from "./useFetchSessionbyId";
import useMoment from "./useMoment";

const useOngoing = (ID) => {
  const currentDate = useMoment();
  const { sessionData } = useFetchSessionbyId(ID);

  if (sessionData !== undefined && sessionData?.regEnd < currentDate) {
    return { ongoing: false };
  } else return { ongoing: true };
};

export default useOngoing;
