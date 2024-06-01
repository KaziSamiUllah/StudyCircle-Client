const Banner = () => {
  return (
    <div className="h-[calc(100vh-50px)] ">
      <div className="flex flex-row">
        <div className="w-1/2 flex justify-center items-center h-full">
          <h1 className=" text-center  text-5xl reddit-mono-600 ">
            Learn, Achieve, Succeed: <br />
            Your Gateway to Endless Knowledge and Growth.
          </h1>
        </div>
        <div>
            <div className="">
                <img className="h-72 absolute bottom-32 right-32 rounded-xl" src="https://st4.depositphotos.com/4218696/38146/i/450/depositphotos_381466772-stock-photo-millennial-african-american-student-with.jpg" alt="" />
                <img className="h-72 absolute top-40 rounded-xl" src="https://st4.depositphotos.com/12985790/21900/i/450/depositphotos_219003960-stock-photo-portrait-focused-woman-headphones-taking.jpg" alt="" />
            </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;
