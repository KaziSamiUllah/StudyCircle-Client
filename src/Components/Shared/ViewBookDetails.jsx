const ViewBookDetails = ({sessionData}) => {
  return (
    <div >
      <h1 className="text-2xl font-bold mb-2">{sessionData?.sessionTitle}</h1>
      <p className="text-lg font-medium mb-1">
        Tutor: {sessionData?.tutorName}
      </p>
      <p className="text-lg font-medium mb-1">Average Rating: {sessionData?.rating}</p>
      <p className="text-base text-gray-600 mb-4">
        {sessionData?.sessionDescription}
      </p>
      <div className="text-lg text-gray-800">
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
        <p className="text-lg">
          <strong>Fee: </strong>{" "}
          {sessionData?.fee > 0 ? (
            <span>{sessionData?.fee}$</span>
          ) : (
            <span className="text-green-500 font-bold">Free</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default ViewBookDetails;
