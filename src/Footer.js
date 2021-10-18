import React from "react";
import footerData from "./footerData";

export default function Footer() {
  return (
    <div>
      <div className="md:container md:mx-auto flex justify-around align-center py-10 xsm:flex xsm:flex-col xl:flex xl:flex-row ">
        {footerData.map((item, i) => {
          return (
            <div key={i} className="mx-auto py-40 xsm:py-6 sm:py-6 md:py-6 ">
              <div className="" key={item.id}>
                <h1 className="text-gray-700 text-2xl font-lato font-normal xsm:text-sm sm:text-base lg:text-lg">
                  {item.header}
                </h1>
                <p
                  className="text-gray-600
                  xsm:text-xs
                  sm:text-sm
                  lg:text-lg
                  text-xl
                  font-lato
                  font-normal
                  tracking-wide
                  italic"
                  key={i}
                >
                  {item.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center sm:pb-4">
        <p className="text-black font-lato font-normal">
          Copy right{" "}
          <span className="text-gray-700 font-lato font-normal">
            {new Date().getFullYear()}
          </span>{" "}
          MarkApart
        </p>
      </div>
    </div>
  );
}
