import React, { useState } from "react";

import dp from "../../../assets/Images/profile pic/rvdp.png";

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
  const [tColor, setTColor] = useState(() => {
    const randomIndex = Math.floor(Math.random() * colorList.length);
    return colorList[randomIndex];
  });
  if (actvSec === "HOME") {
  }
  return (
    <>
      <div className="hover:home-anime">
        <div className="introduction flex justify-evenly py-44">
          <div className="about me flex flex-col justify-center gap-5">
            <h1 className=" text-orange-400 text-5xl font-bold">
              My name is <span className="text-7xl">Vigneshwaran Ravi</span>
            </h1>
            <p className="text-4xl font-bold">
              I'm a{" "}
              <span className="text-5xl" style={{ color: tColor }}>
                FrontEnd Web Developer
              </span>
            </p>
          </div>
          <div className="profile pic relative">
            <img src={dp} alt="DP" />
          </div>
        </div>
      </div>
    </>
  );
};
