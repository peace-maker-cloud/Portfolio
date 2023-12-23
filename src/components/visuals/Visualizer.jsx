import React from "react";

export const Visualizer = () => {
  return (
    <div className="w-[96vw] h-full hide-scrollbar overflow-y-scroll snap-y snap-proximity transition-all scroll-smooth">
      <section id="HOME" className="w-full h-screen snap-start">
        Page one
      </section>
      <section id="PROJECT" className="w-full h-screen snap-start">
        Page Two
      </section>
      <section id="EDUCAT" className="w-full h-screen snap-start">
        Page Three
      </section>
      <section id="EXTRAS" className="w-full h-screen snap-start">
        Page Four
      </section>
      <section id="CONTACT" className="w-full h-screen snap-start">
        Page Five
      </section>
    </div>
  );
};
