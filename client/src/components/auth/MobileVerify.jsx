import React from "react";

const MobileVerify = () => {
  return (
    <div className="w-[25rem] mx-auto h-[20rem] shadow-lg shadow-purple-600 rounded-lg py-8 px-10 flex flex-col items-center">
      <h1 className="text-xl font-semibold">Invest right, Know the best stock <br /> and Gain your profit</h1>
      <div className="w-full h-full p-4 flex text-base flex-col justify-center items-center gap-6">
        <div className="w-full h-15 flex gap-4 items-center justify-center">
          <div className="w-fit px-1 flex justify-center items-center rounded-full border-2 border-purple-600">
            <span className="w-fit">+91</span>
            <input
              type="text"
              name="phone"
              id="phone"
              className="w-fit px-2 py-1 rounded-2xl placeholder:text-purple-400 border-purple-600 outline-none"
              placeholder="Enter Mobile Number"
            />
          </div>
          <button className="w-fit px-2 py-1 rounded-full border-2 text-white bg-purple-600 hover:bg-white hover:text-purple-600 cursor-pointer">
            Next
          </button>
        </div>
        <p className="text-sm">By proceeding this you agree to all terms & conditions</p>
        <hr className="w-full h-[0.2rem] bg-purple-600"/>
        <p>@copy </p>
      </div>
    </div>
  );
};

export default MobileVerify;
