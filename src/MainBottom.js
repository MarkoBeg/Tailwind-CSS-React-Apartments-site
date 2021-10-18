import React from "react";

export default function MainBottom() {
  return (
    <div className="">
      <div className="p-32 bg-mainBottom h-96 bg-no-repeat bg-center-center bg-cover rounded-xl w-11/12 mx-auto xsm:p-8 sm:p-16 md:p-20 lg:p-22">
        <h2 className=" text-white  text-4xl sm:text-lg lg:text-2xl">
          The sky that you gonna remember forever.
        </h2>
        <p className="text-white text-2xl py-10 sm:text-lg lg:text-xl">
          Enjoy our spectacular firework in all our destinations
        </p>
        <button className="xsm:w-28 xsm:text-sm sm:w-56 sm:text-base   lg:w-64 lg:p-4 lg:text-lg bg-red-400 text-white text-xl w-96 text-center cursor-pointer p-6 rounded-2xl hover:bg-white hover:text-red-400">
          Check it out
        </button>
      </div>
    </div>
  );
}
