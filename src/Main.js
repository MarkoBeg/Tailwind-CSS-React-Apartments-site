import React from "react";
import mainData from "./mainData";

export default function Main() {
  return (
    <div>
      <h1 className="text-black text-4xl font-openSans font-extrabold pl-20 pt-8">
        Explore
      </h1>
      <div className="grid grid-cols-3 pt-10 pb-4 gap-2 mx-10 justify-center items-center lg:flex flex-col">
        {mainData.map((item, i) => {
          return (
            <div key={i} className="rounded-lg cursor-pointer">
              <div className="h-96 mb-20 lg:h-80">
                <img
                  src={item.image}
                  alt="mainData"
                  className="w-full h-full bg-contain bg-center-center bg-no-repeat rounded-lg sm:w-80 lg:w-96"
                ></img>
                <h4 className="text-gray-700 text-2xl font-lato font-normal xsm:text-base sm:text-lg lg:text-xl ">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-xl font-lato font-normal tracking-wide italic xsm:text-sm sm:text-base lg:text-lg">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
