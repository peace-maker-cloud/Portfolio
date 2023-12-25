import React from "react";
import { Subnavbar } from "./Subnavbar";
import { Machine } from "./Machine";

export const Navbar = () => {
  return (
    <div className="Navbars flex flex-col gap-1 p-2 text-xl bg-black text-white">
      <a href="#HOME">
        <Machine />
      </a>
      <Subnavbar />
    </div>
  );
};
