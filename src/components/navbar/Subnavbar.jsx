import React from "react";

export const Subnavbar = ({ actvSec, setActvSec }) => {
  return (
    <div className="SubNavbars flex flex-col justify-between items-center gap-36 text-center text-xl">
      <a
        onClick={() => {
          setActvSec("HOME");
        }}
        className={`transition-all rounded-full w-11 p-1 ${
          actvSec === "HOME" ? "text-black bg-white" : "text-white bg-black"
        }`}
        href="#HOME"
      >
        <i className="transition-all fa-solid fa-house text-3xl"></i>
      </a>
      <a
        onClick={() => {
          setActvSec("PROJECT");
        }}
        className={`transition-all rounded-full w-11 p-1 ${
          actvSec === "PROJECT" ? "text-black bg-white" : "text-white bg-black"
        }`}
        href="#PROJECT"
      >
        <i className="transition-all fa-solid fa-diagram-project text-3xl"></i>
      </a>
      <a
        onClick={() => {
          setActvSec("EDUCAT");
        }}
        className={`transition-all rounded-full w-11 p-1 ${
          actvSec === "EDUCAT" ? "text-black bg-white" : "text-white bg-black"
        }`}
        href="#EDUCAT"
      >
        <i className="transition-all fa-solid fa-user-graduate text-3xl"></i>
      </a>
      <a
        onClick={() => {
          setActvSec("EXTRAS");
        }}
        className={`transition-all rounded-full w-11 p-1 ${
          actvSec === "EXTRAS" ? "text-black bg-white" : "text-white bg-black"
        }`}
        href="#EXTRAS"
      >
        <i className="transition-all fa-solid fa-computer-mouse text-3xl"></i>
      </a>
      <a
        onClick={() => {
          setActvSec("CONTACT");
        }}
        className={`transition-all rounded-full w-11 p-1 ${
          actvSec === "CONTACT" ? "text-black bg-white" : "text-white bg-black"
        }`}
        href="#CONTACT"
      >
        <i className="transition-all fa-solid fa-address-book text-3xl"></i>
      </a>
    </div>
  );
};
