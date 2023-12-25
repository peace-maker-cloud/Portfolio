import React from "react";
import { Home } from "./division/Home";
import { Projects } from "./division/Projects";
import { Educat } from "./division/Educat";
import { Extras } from "./division/Extras";
import { Contact } from "./division/Contact";

export const Visualizer = () => {
  return (
    <div className="w-[96vw] h-full hide-scrollbar overflow-y-scroll snap-y snap-proximity transition-all scroll-smooth  bg-black text-white">
      <section id="HOME" className="w-full h-screen snap-start home-anime">
        <Home />
      </section>
      <section
        id="PROJECT"
        className="w-full h-screen snap-start project-anime"
      >
        <Projects />
      </section>
      <section id="EDUCAT" className="w-full h-screen snap-start educat-anime">
        <Educat />
      </section>
      <section id="EXTRAS" className="w-full h-screen snap-start extras-anime">
        <Extras />
      </section>
      <section
        id="CONTACT"
        className="w-full h-screen snap-start contact-anime"
      >
        <Contact />
      </section>
    </div>
  );
};
