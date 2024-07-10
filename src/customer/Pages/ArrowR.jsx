import { Button } from "@mui/material";
import React from "react";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const ArrowR = () => {
  return (
    <Button
      className="z-50 bg-green"
      sx={{
        position: "absolute",
        top: "8rem",
        left: "0rem",
        transform: "translateX(-50%)  rotate(90deg)",
      }}
      aria-label="next"
    >
      <ArrowForwardIosIcon
        className="bg-green"
        style={{ color: "black" }}
        sx={{ transform: " rotate(90deg)" }}
      />
    </Button>
  );
};

export default ArrowR;
