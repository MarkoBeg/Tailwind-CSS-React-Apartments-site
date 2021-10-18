import React from "react";
import PublicIcon from "@mui/icons-material/Public";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import Hero from "./Hero";
import { useHistory } from "react-router-dom";

export default function Header() {
  const history = useHistory();

  return (
    <div className="bg-header2 bg-cover h-screen bg-center-center bg-no-repeat w-auto ">
      <div className="flex justify-between pt-10 items-center sticky w-full px-8">
        <div className="text-gray-500 ">
          <h3
            className="text-6xl font-roboto font-extrabold text-white xsm:text-lg sm:text-2xl mr-2 md:text-4xl "
            onClick={() => history.push("/")}
          >
            MarkApart
          </h3>
        </div>
        <div className="flex item-center justify-center cursor-pointer ">
          <h3
            className="text-2xl text-white pr-10 font-lato font-normal hover:text-gray-300 xsm:text-base sm:text-lg pl-2 xsm:pr-2 "
            onClick={() => history.push("/")}
          >
            Home
          </h3>
          <h3
            className="text-2xl text-white font-lato font-normal hover:text-gray-300 xsm:text-base sm:text-lg "
            onClick={() => history.push("/apartments")}
          >
            Apartments
          </h3>
        </div>
        <div className="sm:ml-8">
          <PublicIcon className="text-white cursor-pointer mr-4 "></PublicIcon>
          <AccessibilityIcon className="text-white cursor-pointer"></AccessibilityIcon>
        </div>
      </div>
      <Hero></Hero>
    </div>
  );
}
