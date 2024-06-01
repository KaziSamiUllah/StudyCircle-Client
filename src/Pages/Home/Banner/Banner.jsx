const Banner = () => {
  return (
    <div className="h-[calc(100vh-50px)] ">
      <div className="flex flex-row ">
        <div className="w-1/2 flex justify-center items-center h-[calc(100vh-50px)] ">
          <h1 className=" text-left ml-24  text-5xl reddit-mono-600  ">
            <span className="text-primary">Learn</span>,{" "}
            <span className="text-secondary">Achieve</span>,{" "}
            <span className="text-[#06D6A0]">Succeed</span>: <br />
            Your Gateway to Endless Knowledge and Growth.
          </h1>
        </div>
        <div className=" w-1/2">
          <div className="relative">
            <img className="h-72 absolute top-[260px] left-[250px] rounded-xl" src="https://st4.depositphotos.com/4218696/38146/i/450/depositphotos_381466772-stock-photo-millennial-african-american-student-with.jpg" alt="" />
            <img className="h-72 absolute left-24 top-24 rounded-xl" src="https://st4.depositphotos.com/12985790/21900/i/450/depositphotos_219003960-stock-photo-portrait-focused-woman-headphones-taking.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
