import { Button } from '@mui/material';
import React from 'react'

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const ArrowL = () => {
  return (
    <Button
      variant="rounded"
      className="z-50 bg-green"
      sx={{
        position: "absolute",
        top: "8rem",
        right: "0rem",
        transform: "translateX(50%) rotate(90deg)",
      }}
      aria-label="next"
      style={{
        backgroundColor: "transparent",
        color: "black",
        border: "none",
        shadow: "none",
      }}
    >
      <ArrowForwardIosIcon className="" sx={{ transform: "rotate(-90deg)" }} />
    </Button>
  );
}

export default ArrowL
