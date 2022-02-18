import { FaMapMarkerAlt } from "react-icons/fa";

const Location = () => {
  return (
    <div className="flex align-center">
      <FaMapMarkerAlt className="text-infoWord mb-0 text-xl mr-2 mt-1" />
      <p className="font-bolder text-infoWord text-xl ">where we go?</p>
    </div>
  );
};

export default Location;
