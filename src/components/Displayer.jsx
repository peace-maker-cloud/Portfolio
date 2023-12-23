import React from "react";
import { Navbar } from "./navbar/Navbar";
import { Visualizer } from "./visuals/Visualizer";

export const Displayer = () => {
  return (
    <div className="MainContainer flex h-screen w-screen">
      <Navbar />
      <Visualizer />
    </div>
  );
};
