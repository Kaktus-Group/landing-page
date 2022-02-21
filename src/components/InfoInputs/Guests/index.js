import { createContext, useState } from "react";
import { FaUserFriends } from "react-icons/fa";
export const ModalContext = createContext();
const Guests = () => {
  const [modal, setModal] = useState(false);
  function clickModal() {
    setModal((prev) => !prev);
  }
  return (
    <ModalContext.Provider value={modal}>
      <div className="flex align-center justify-center w-1/3">
        <FaUserFriends className="text-infoWord mb-0 text-xl mr-2 mt-1" />
        <p className="font-bolder text-infoWord text-xl">Guests</p>
      </div>
    </ModalContext.Provider>
  );
};

export default Guests;
