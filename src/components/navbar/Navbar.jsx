import React from "react";
import { Subnavbar } from "./Subnavbar";
import { Machine } from "./Machine";

export const Navbar = ({ ms1Rotate, ms2Rotate, actvSec, setActvSec }) => {
  return (
    <div className="Navbars flex flex-col gap-20 p-2 text-xl bg-black text-white">
      <Machine ms1Rotate={ms1Rotate} ms2Rotate={ms2Rotate} />
      <Subnavbar actvSec={actvSec} setActvSec={setActvSec} />
    </div>
  );
};
