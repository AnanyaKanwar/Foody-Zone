import React from "react";
import Button from "./Button";

const Cards = ({ name, price, text, image }) => {
  return (
    <div
      className="border-[2px] border-[#98F9FF
    ] w-[340px] h-[180px] overflow-hidden"
    >
      <div className=" w-[340px] h-[180px] bg-slate-600  opacity-30 blur-sm absolute "></div>
      <div className=" w-[340px] h-[180px] z-20">
        <div className=" flex justify-between">
          <img src={image} className=" h-[30%] z-50" alt="" />
          <div className="z-50 flex flex-col gap-2 py-2 justify-center">
            <h1 className="text-white font-bold text-xl ">{name}</h1>
            <p className="text-white">{text}</p>
            <div className="w-full flex justify-end px-6">

            <Button name={"$"+price+".00"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
