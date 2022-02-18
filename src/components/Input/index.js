import { Button } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
const primary = red[500];
function Email() {
  return (
    <div className=" w-full my-2 rounded-md container flex justify-between align-center py-2 px-2 bg-inputPlaceholder">
      <input
        type="text"
        placeholder="Enter address"
        className="pl-1 px-3 bg-transparent outline-none font-sans"
      />
      <Button variant="outlined">Subscribe</Button>
    </div>
  );
}

export default Email;
