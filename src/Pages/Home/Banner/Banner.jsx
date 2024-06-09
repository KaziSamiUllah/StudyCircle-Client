const Banner = () => {
  return (
    <div className="h-[calc(100vh-50px)] bg-cover bg-bo bg-[url(https://i.ibb.co/jGpJtsp/Abstract-art-bg.jpg)] " >
      <div className="flex flex-row ">
        <div className="w-1/2 flex justify-center items-center h-[calc(100vh-50px)] ">
          <h1 className=" text-left ml-24  text-5xl reddit-mono-600  ">
            <span className="text-primary">Learn</span>,{" "}
            <span className="text-secondary">Achieve</span>,{" "}
            <span className="text-[#06D6A0]">Succeed</span>: <br />
            Your Gateway to Endless Knowledge and Growth.
          </h1>
        </div>
        <div className="w-1/2">
          <div className="relative h-full flex justify-center items-center ">
            <div className="relative w-full h-full ">
              <img
                className="w-1/2 absolute rounded-xl "
                src="https://st4.depositphotos.com/4218696/38146/i/450/depositphotos_381466772-stock-photo-millennial-african-american-student-with.jpg"
                alt="Student with a book"
                style={{ left: "40%", top: "20%" }}
              />
              <img
                className="w-1/2 absolute rounded-xl "
                src="https://t3.ftcdn.net/jpg/07/20/73/24/360_F_720732482_fyaeUgvFO0Up28Zwb0WKaHQ80tTivdY6.jpg"
                alt="Woman with headphones"
                style={{ right: "40%", top: "50%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
