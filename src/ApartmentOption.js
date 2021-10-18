import React from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

export default function ApartmentOption({
  img,
  id,
  title,
  desc,
  guest,
  price,
  pets,
  brekfast,
  type,
}) {
  return (
    <div className="">
      <div className="h-1/4 sm:h-96">
        <div
          className="my-5 rounded-md border border-red-400 p-2 py-5 cursor-pointer relative sm:mt-10 "
          id={id}
        >
          <img src={img} alt="" className="w-full h-80 sm:h-44 sm:w-full" />
          <h2 className="text-2xl pl-2 font-roboto font-black text-gray-700 pt-2">
            {title}
          </h2>
          <h4 className="text-xl pl-2 font-roboto font-normal">{type}</h4>
          <span className="text-md font-roboto font-normal italic pl-2">
            {pets && "Pets more then Welcome "}
          </span>
          <span className="text-md font-roboto font-normal italic ">
            {brekfast && "Brekfast alowed"}
          </span>
          <p className="font-roboto font-bold text-red-400 pl-2">{price}</p>
          <p className="font-lato pl-2 text-gray-700 text-lg font-normal">
            {desc}
          </p>
          <p className="font-roboto font-bold text-red-400 pl-2">{guest}</p>
          <FavoriteBorderOutlinedIcon className="absolute right-0 mr-2 mt-2 text-red-400"></FavoriteBorderOutlinedIcon>
          <StarBorderOutlinedIcon className="ml-2 mt-2 text-red-400"></StarBorderOutlinedIcon>
        </div>
        {/*apartmentsOption sa props mozda*/}
      </div>
    </div>
  );
}
