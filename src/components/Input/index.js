import React from "react";
import styled from "styled-components";

const InputWrapper = styled.button`
  cursor: pointer;
  color: white;
  font: "sans";
  fontsize: 13px;
  padding: 9px 10px;
  border: 1px solid #fa541c;
  border-radius: 8px;
  overflow: hiddden;
  background: #fa541c;
  box-shadow: none;
  &:hover {
    transition: 0.05s;

    background: #bb3828;
  }
`;
function Email() {
  return (
    <div className=" w-full my-2 rounded-md container flex justify-between align-center py-2 px-2 bg-inputPlaceholder">
      <input
        type="text"
        placeholder="Enter address"
        className="pl-1 px-3 bg-transparent outline-none font-sans w-full"
      />

      <InputWrapper>Subcribe</InputWrapper>
    </div>
  );
}

export default Email;
