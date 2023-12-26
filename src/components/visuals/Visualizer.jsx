import React, { useEffect, useRef, useState } from "react";
import { Home } from "./division/Home";
import { Projects } from "./division/Projects";
import { Educat } from "./division/Educat";
import { Extras } from "./division/Extras";
import { Contact } from "./division/Contact";

export const Visualizer = ({ setMs1Rotate, setMs2Rotate, setMs3Rotate }) => {
  const scrollContainerRef = useRef(null);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("HOME");
      const projectSection = document.getElementById("PROJECT");
      const educatSection = document.getElementById("EDUCAT");
      const extrasSection = document.getElementById("EXTRAS");
      const contactSection = document.getElementById("CONTACT");

      const scrollY = scrollContainerRef.current.scrollTop;
      const scrollSpeed = Math.abs(scrollY - prevScrollY);
      const rotate = 2 + scrollSpeed * 0.05;

      const isScrollingDown = scrollY > prevScrollY;

      if (
        homeSection &&
        scrollY >= homeSection.offsetTop &&
        scrollY < projectSection.offsetTop
      ) {
        setMs1Rotate(
          (prevRotate) => prevRotate + (isScrollingDown ? rotate : -rotate)
        );
        setMs2Rotate(
          (prevRotate) => prevRotate + (isScrollingDown ? rotate : -rotate)
        );
        setMs3Rotate(
          (prevRotate) => prevRotate + (isScrollingDown ? rotate : -rotate)
        );
      } else if (
        projectSection &&
        scrollY >= projectSection.offsetTop &&
        scrollY < educatSection.offsetTop
      ) {
        setMs1Rotate(
          (prevRotate) => prevRotate + (isScrollingDown ? rotate : -rotate)
        );
        setMs2Rotate(
          (prevRotate) => prevRotate + (isScrollingDown ? rotate : -rotate)
        );
        setMs3Rotate(
          (prevRotate) => prevRotate + (isScrollingDown ? rotate : -rotate)
        );
      } else if (
        educatSection &&
        scrollY >= educatSection.offsetTop &&
        scrollY < extrasSection.offsetTop
      ) {
        setMs1Rotate(
          (prevRotate) => prevRotate + (isScrollingDown ? rotate : -rotate)
        );
        setMs2Rotate(
          (prevRotate) => prevRotate + (isScrollingDown ? rotate : -rotate)
        );
        setMs3Rotate(
          (prevRotate) => prevRotate + (isScrollingDown ? rotate : -rotate)
        );
      } else if (
        extrasSection &&
        scrollY >= extrasSection.offsetTop &&
        scrollY < contactSection.offsetTop
      ) {
        setMs1Rotate(
          (prevRotate) => prevRotate + (isScrollingDown ? rotate : -rotate)
        );
        setMs2Rotate(
          (prevRotate) => prevRotate + (isScrollingDown ? rotate : -rotate)
        );
        setMs3Rotate(
          (prevRotate) => prevRotate + (isScrollingDown ? rotate : -rotate)
        );
      } else if (contactSection && scrollY >= contactSection.offsetTop) {
        setMs1Rotate(
          (prevRotate) => prevRotate + (isScrollingDown ? rotate : -rotate)
        );
        setMs2Rotate(
          (prevRotate) => prevRotate + (isScrollingDown ? rotate : -rotate)
        );
        setMs3Rotate(
          (prevRotate) => prevRotate + (isScrollingDown ? rotate : -rotate)
        );
      }

      setPrevScrollY(scrollY);
    };

    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [setMs1Rotate, setMs2Rotate, setMs3Rotate, prevScrollY]);

  return (
    <div
      ref={scrollContainerRef}
      className="w-[96vw] h-full hide-scrollbar overflow-y-scroll snap-y snap-proximity transition-all scroll-smooth bg-black text-white"
    >
      <section id="HOME" className="w-full h-screen snap-start">
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
