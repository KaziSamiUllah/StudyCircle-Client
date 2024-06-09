import Banner from "./Banner/Banner";
import Tutors from "./SessionDetails/Tutors/Tutors";
import StudySessions from "./Study sessions/StudySessions";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <StudySessions></StudySessions>
      <Tutors role ={"Tutor"}></Tutors>
    </div>
  );
};

export default Home;
