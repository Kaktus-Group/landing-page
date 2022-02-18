import { FaUserFriends } from "react-icons/fa";

const Guests = () => {
  return (
    <div className="flex align-center justify-center">
      <FaUserFriends className="text-infoWord mb-0 text-xl mr-2 mt-1" />
      <p className="font-bolder text-infoWord text-xl">Guests</p>
    </div>
  );
};

export default Guests;
