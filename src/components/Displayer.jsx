import React, { useState, useEffect } from "react";
import { Navbar } from "./navbar/Navbar";
import { Visualizer } from "./visuals/Visualizer";

export const Displayer = () => {
  // Code Space

  const [ms1Rotate, setMs1Rotate] = useState(0);
  const [ms2Rotate, setMs2Rotate] = useState(45);
  const [actvSec, setActvSec] = useState("HOME");

  // End of code space
  return (
    <div className="MainContainer flex h-screen w-screen">
      <Navbar ms1Rotate={ms1Rotate} ms2Rotate={ms2Rotate} actvSec={actvSec} />
      <Visualizer
        ms1Rotate={ms1Rotate}
        ms2Rotate={ms2Rotate}
        setMs1Rotate={setMs1Rotate}
        setMs2Rotate={setMs2Rotate}
        setActvSec={setActvSec}
      />
    </div>
  );
};
