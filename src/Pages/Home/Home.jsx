import Banner from "./Banner/Banner";
import Tutors from "./Tutors/Tutors";
import StudySessions from "./Study sessions/StudySessions";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="mx-2 lg:mx-24">
      <StudySessions></StudySessions>
      <Tutors role ={"Tutor"}></Tutors>
      </div>
    </div>
  );
};

export default Home;
