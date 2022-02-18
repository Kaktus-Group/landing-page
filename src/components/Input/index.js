import { Button } from "@mui/material";
import React from "react";
function Email() {
  return (
    <div className=" w-full my-2 rounded-md container flex justify-between align-center py-2 px-2 bg-inputPlaceholder">
      <input
        type="text"
        placeholder="Enter address"
        className="pl-1 px-3 bg-transparent outline-none font-sans"
      />

      <Button
        variant="secondary"
        sx={{
          backgroundColor: "#B32000",
          color: "white",
          font: "sans",
          fontSize: "13px",
          padding: "9px 10px",
        }}
      >
        Subscribe
      </Button>
      {/* yasayman */}
    </div>
  );
}

export default Email;
