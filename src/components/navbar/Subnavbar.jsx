import React from "react";

export const Subnavbar = () => {
  return (
    <div className="SubNavbars flex flex-col justify-between items-center gap-7 text-center text-xl text-black">
      <a className="active bg-white rounded-full w-11 p-1" href="#HOME">
        <i className="fa-solid fa-house text-3xl"></i>
      </a>
      <h1>
        <i className="fa-regular fa-circle-dot text-base text-white"></i>
      </h1>
      <h1>
        <i className="fa-regular fa-circle-dot text-base text-white"></i>
      </h1>
      <a className=" rounded-full w-11 p-1 text-white" href="#PROJECT">
        <i className="fa-solid fa-diagram-project text-3xl"></i>
      </a>
      <h1>
        <i className="fa-regular fa-circle-dot text-base text-white"></i>
      </h1>
      <h1>
        <i className="fa-regular fa-circle-dot text-base text-white"></i>
      </h1>
      <a className=" rounded-full w-11 p-1 text-white" href="#EDUCAT">
        <i className="fa-solid fa-user-graduate text-3xl"></i>
      </a>
      <h1>
        <i className="fa-regular fa-circle-dot text-base text-white"></i>
      </h1>
      <h1>
        <i className="fa-regular fa-circle-dot text-base text-white"></i>
      </h1>
      <a className=" rounded-full w-11 p-1 text-white" href="#EXTRAS">
        <i className="fa-solid fa-computer-mouse text-3xl"></i>
      </a>
      <h1>
        <i className="fa-regular fa-circle-dot text-base text-white"></i>
      </h1>
      <h1>
        <i className="fa-regular fa-circle-dot text-base text-white"></i>
      </h1>
      <a className=" rounded-full w-11 p-1 text-white" href="#CONTACT">
        <i className="fa-solid fa-address-book text-3xl"></i>
      </a>
    </div>
  );
};
