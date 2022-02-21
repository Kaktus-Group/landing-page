import Guests from "./Guests";
import React from "react";
import Calendar from "./Calendar";
import Location from "./Location";
import Search from "./searchBtn";
const InfoInputs = () => {
  return (
    <div className="bg-infoColor flex justify-between w-full p-8">
      <Location />
      <Calendar />
      <Guests />
      <Search />
    </div>
  );
};

export default InfoInputs;
