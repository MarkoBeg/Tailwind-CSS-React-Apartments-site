import React from "react";

export default function Buttons({
  guest,
  priceHigh,
  priceLow,
  brekfast,
  pets,
  allRooms,
  singleRoom,
  luxuryRoom,
  doubleRoom,
}) {
  return (
    <div className="flex justify-center items-center p-5 ">
      <div className="sm:flex flex-col ">
        <button
          className="sm:m-4 p-2 rounded-2xl border-2 border-gray-700 mr-5 text-black font-roboto font-medium hover:border-red-400 "
          type="button"
          onClick={() => allRooms()}
        >
          All rooms
        </button>
        <button
          className="sm:m-4 p-2 rounded-2xl border-2 border-gray-700 mr-5 text-black font-roboto font-medium hover:border-red-400 "
          type="button"
          onClick={() => singleRoom()}
        >
          Single room
        </button>
        <button
          className=" sm:m-4 p-2 md:mt-4 rounded-2xl border-2 border-gray-700 mr-5 text-black font-roboto font-medium hover:border-red-400"
          onClick={() => luxuryRoom()}
        >
          Luxury room
        </button>
        <button
          className=" sm:m-4 p-2 rounded-2xl xl:mt-4 border-2 border-gray-700 mr-5 text-black font-roboto font-medium hover:border-red-400"
          onClick={() => doubleRoom()}
        >
          2 Rooms Apartment
        </button>
      </div>
      <div className="sm:flex flex-col">
        <button
          className=" sm:m-4 p-2 rounded-2xl border-2 border-gray-700 mr-5 text-black font-roboto font-medium hover:border-red-400"
          onClick={() => guest()}
        >
          Family Pack
        </button>
        <button
          className=" sm:m-4 p-2 rounded-2xl border-2 border-gray-700 mr-5 text-black font-roboto font-medium hover:border-red-400"
          onClick={() => priceLow()}
        >
          Low to high price
        </button>
        <button
          className=" sm:m-4 p-2 md:mt-4 lg:mt-4 rounded-2xl border-2 border-gray-700 mr-5 text-black font-roboto font-medium hover:border-red-400"
          onClick={() => priceHigh()}
        >
          High to low price
        </button>

        <label className=" sm:m-4 p-2 text-black text-lg font-robot font-normal">
          Pets{" "}
        </label>
        <input
          className="sm:ml-10"
          type="checkbox"
          onClick={() => pets()}
        ></input>
        <label className="sm:m-4 p-2  text-black text-lg font-robot font-normal">
          Brekfast
        </label>
        <input
          type="checkbox"
          className="sm:ml-10 xl:mt-4"
          onClick={() => brekfast()}
        ></input>
      </div>
    </div>
  );
}
