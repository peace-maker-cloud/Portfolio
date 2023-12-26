import React, { useState, useEffect } from "react";
import { Subnavbar } from "./Subnavbar";
import { Machine } from "./Machine";

export const Navbar = ({
  ms1Rotate,
  ms2Rotate,
  ms3Rotate,
  setMs1Rotate,
  setMs2Rotate,
  setMs3Rotate,
}) => {
  return (
    <div className="Navbars flex flex-col justify-around p-2 text-xl bg-black text-white">
      <a href="#HOME">
        <Machine
          ms1Rotate={ms1Rotate}
          ms2Rotate={ms2Rotate}
          ms3Rotate={ms3Rotate}
        />
      </a>
      <Subnavbar
        ms1Rotate={ms1Rotate}
        ms2Rotate={ms2Rotate}
        ms3Rotate={ms3Rotate}
        setMs1Rotate={setMs1Rotate}
        setMs2Rotate={setMs2Rotate}
        setMs3Rotate={setMs3Rotate}
      />
    </div>
  );
};
