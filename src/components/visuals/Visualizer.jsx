import React from "react";
import { Home } from "./division/Home";
import { Projects } from "./division/Projects";
import { Educat } from "./division/Educat";
import { Extras } from "./division/Extras";
import { Contact } from "./division/Contact";

export const Visualizer = () => {
  return (
    <div className="w-[96vw] h-full hide-scrollbar overflow-y-scroll snap-y snap-proximity transition-all scroll-smooth  bg-black text-white">
      <section id="HOME" className="w-full h-screen snap-start">
        <Home />
      </section>
      <section id="PROJECT" className="w-full h-screen snap-start">
        <Projects />
      </section>
      <section id="EDUCAT" className="w-full h-screen snap-start">
        <Educat />
      </section>
      <section id="EXTRAS" className="w-full h-screen snap-start">
        <Extras />
      </section>
      <section id="CONTACT" className="w-full h-screen snap-start">
        <Contact />
      </section>
    </div>
  );
};
