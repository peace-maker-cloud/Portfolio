import React, { useState } from "react";

import dp from "../../../assets/Images/profile pic/rvdp.png";
import lWing from "../../../assets/Images/wings/left wing.png";
import rWing from "../../../assets/Images/wings/right wing.png";

export const Home = ({ actvSec }) => {
  const colorList = [
    "orange",
    "blue",
    "red",
    "green",
    "purple",
    "pink",
    "yellow",
  ];
  const tColor = colorList[Math.floor(Math.random() * colorList.length)];

  if (actvSec === "HOME") {
  }
  return (
    <>
      <div>
        <div className="introduction flex justify-evenly py-44">
          <div className="about me flex flex-col justify-center gap-5">
            <h1 className="text-orange-400 text-4xl font-bold">
              My name is <span className="text-6xl">Vigneshwaran Ravi</span>
            </h1>
            <p className="text-3xl font-bold">
              I'm a{" "}
              <span className="text-4xl" style={{ color: tColor }}>
                FrontEnd Web Developer
              </span>
            </p>
          </div>
          <div
            className={`${
              actvSec === "HOME" ? "profile-pic" : ""
            } relative transition-all`}
          >
            <img
              className="left-wing absolute bottom-24 left-32"
              src={lWing}
              alt="Left Wing"
            />
            <img className="dp z-50 relative" src={dp} alt="DP" />
            <img
              className="right-wing absolute bottom-24 right-32"
              src={rWing}
              alt="Right Wing"
            />
          </div>
        </div>
      </div>
    </>
  );
};
