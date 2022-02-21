import { FaCalendar } from "react-icons/fa";

const Calendar = () => {
  return (
    <div className="flex align-center justify-between w-1/3">
      <p className="border-l-2"></p>
      <div className="flex align-center justify-around">
        <FaCalendar className="text-infoWord mb-0 text-xl mr-2 mt-1" />
        <p className="font-bolder text-infoWord text-xl">Departure day</p>
      </div>
      <p className="border-r-2"></p>
    </div>
  );
};

export default Calendar;
