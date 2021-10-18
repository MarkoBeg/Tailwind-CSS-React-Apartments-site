import React from "react";
import ApartmentOption from "./ApartmentOption";

export default function Apartments({ data }) {
  return (
    <div>
      <h1 className="text-black text-4xl font-openSans font-extrabold pl-20 pt-5">
        Apartments
      </h1>
      <div className="lg:flex flex-col  grid grid-cols-4 gap-2 justify-center items-center py-10  ">
        {data.map((item, i) => {
          return (
            <ApartmentOption
              id={item.id}
              guest={` ${
                (item.guests > 2 && item.guests && "Family pack") ||
                (item.guests > 1 && item.guests && "For 2 persons") ||
                (item.guests === 1 && item.guests && "For 1 person")
              } `}
              img={item.image}
              title={item.title}
              pets={item.pets}
              brekfast={item.brekfast}
              price={item.price}
              type={item.type}
              desc={item.desc}
              key={item.id}
            ></ApartmentOption>
          );
        })}
      </div>
    </div>
  );
}
