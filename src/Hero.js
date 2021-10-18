import React from "react";
import { useHistory } from "react-router-dom";

export default function Hero() {
  const history = useHistory();
  return (
    <div className="flex flex-col pt-80 pl-20 w-1/3  xsm:pl-14 xl:w-1/2 sm:pl-16 sm:pt-14  xl:pt-20">
      <h1 className="text-white text-6xl xsm:pt-2   md:pt-24 xl:pt-32 xsm:text-4xl  lg:text-4xl">
        Great Apartments, even better deals.
      </h1>
      <p className="text-2xl text-white pt-4 pb-4 xsm:text-lg sm:text-xl ">
        Check out all kind of beautiful{" "}
        <span className="text-red-400">apartments</span> that we provide.
      </p>
      <button
        className="xsm:text-lg  sm:w-56 md:w-64 bg-red-400 text-white text-xl w-96 text-center cursor-pointer p-6 rounded-2xl hover:bg-white hover:text-red-400 "
        onClick={() => history.push("/apartments")}
      >
        Search apartment
      </button>
    </div>
  );
}
