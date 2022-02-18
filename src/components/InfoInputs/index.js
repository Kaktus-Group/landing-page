import Guests from "./Guests";
import React from "react";
import Calendar from "./Calendar";
import Location from "./Location";
import Search from "./searchBtn";
const InfoInputs = () => {
  return (
    <div className="bg-infoColor flex justify-between  w-full p-8">
      <div className="flex justify-between align-center w-4/5 ">
        <Location />
        <Calendar />
        <Guests />
      </div>
      <div>
        <Search />
      </div>
    </div>
  );
};

export default InfoInputs;
