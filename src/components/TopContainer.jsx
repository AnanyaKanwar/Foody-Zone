import React, { useState } from "react";
import logo from "../Images/Foody Zone.png";
import Button from "./Button";
import BottomContainer from "./BottomContainer";

const TopContainer = () => {
  const [filtered, setfiltered] = useState(null);
  const [selected,setselected]=useState('all')

  const choice=((type)=>{
    if(type==="All"){
      setfiltered(foodData)
      setselected('All')
      return;
    }
    const filter = foodData?.filter((foodData) =>
      foodData.type.toLowerCase().includes(type.toLowerCase()))
    setfiltered(filter)
    setselected(type)




  })

  const searchfood = (e) => {
    const searchvalue = e.target.value;
    console.log(searchvalue);
    if (searchvalue == " ") {
      setfiltered(null);
    } 
    else{
      const filter = foodData?.filter((foodData) =>
        foodData.name.toLowerCase().includes(searchvalue.toLowerCase())
    );
    setfiltered(filter);
  }
  };

  return (
    <div className="bg-[#323335] pt-16 px-16 py-10 h-[22%]">
      <div className="flex justify-between items-center">
        <img src={logo} alt="" />
        <input
          onChange={searchfood}
          type="text"
          placeholder="Search Food"
          className=" w-[285px] h-[40px] bg-transparent border-[1px] border-red-800 font-[16px] p-[10px] mb-5"
        />
      </div>
      <div className=" flex gap-2 items-center justify-center l:mb-2">
        <Button name="All"  />
        <Button name="Breakfast" />
        <Button name="Lunch" />
        <Button name="Dinner" />
      </div>
    </div>
  );
};

export default TopContainer;
