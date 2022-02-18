import { FaCalendar } from "react-icons/fa";

const Calendar = () => {
  return (
    <div className="flex align-center justify-center">
      <FaCalendar className="text-infoWord mb-0 text-xl mr-2 mt-1" />
      <p className="font-bolder text-infoWord text-xl">Departure day</p>
    </div>
  );
};

export default Calendar;
