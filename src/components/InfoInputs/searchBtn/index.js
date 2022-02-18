import { Button } from "@mui/material";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div>
      <Button variant="contained" sx={{ padding: "12px 0px" }}>
        <FaSearch className="text-xl text-white" />
      </Button>
    </div>
  );
};

export default Search;