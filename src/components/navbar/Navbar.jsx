import React from "react";

export const Navbar = () => {
  return (
    <div className="Navbars flex flex-col gap-1 p-2 text-xl">
      <a href="#HOME">Machine</a>
      <div className="SubNavbars flex flex-col justify-between gap-9 text-xl">
        <a href="#HOME">Home</a>
        <h1>.</h1>
        <h1>.</h1>
        <a href="#PROJECT">Project</a>
        <h1>.</h1>
        <h1>.</h1>
        <a href="#EDUCAT">Educat</a>
        <h1>.</h1>
        <h1>.</h1>
        <a href="#EXTRAS">Extras</a>
        <h1>.</h1>
        <h1>.</h1>
        <a href="#CONTACT">Contact</a>
      </div>
    </div>
  );
};
