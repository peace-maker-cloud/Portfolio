import React, { useEffect, useRef, useState } from "react";
import { Home } from "./division/Home";
import { Projects } from "./division/Projects";
import { Educat } from "./division/Educat";
import { Extras } from "./division/Extras";
import { Contact } from "./division/Contact";

export const Visualizer = ({
  setMs1Rotate,
  setMs2Rotate,
  actvSec,
  setActvSec,
}) => {
  // Code Space

  // Scroll Effect

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

      const isScrollingDown = scrollY >= prevScrollY;

      if (
        homeSection &&
        scrollY >= homeSection.offsetTop &&
        scrollY < projectSection.offsetTop
      ) {
        setActvSec("HOME");
        setMs1Rotate(
          (prevRotate) => prevRotate + (isScrollingDown ? rotate : -rotate)
        );
        setMs2Rotate(
          (prevRotate) => prevRotate + (isScrollingDown ? rotate : -rotate)
        );
      } else if (
        projectSection &&
        scrollY >= projectSection.offsetTop &&
        scrollY < educatSection.offsetTop
      ) {
        setActvSec("PROJECT");
        setMs1Rotate(
          (prevRotate) => prevRotate + (isScrollingDown ? rotate : -rotate)
        );
        setMs2Rotate(
          (prevRotate) => prevRotate + (isScrollingDown ? rotate : -rotate)
        );
      } else if (
        educatSection &&
        scrollY >= educatSection.offsetTop &&
        scrollY < extrasSection.offsetTop
      ) {
        setActvSec("EDUCAT");
        setMs1Rotate(
          (prevRotate) => prevRotate + (isScrollingDown ? rotate : -rotate)
        );
        setMs2Rotate(
          (prevRotate) => prevRotate + (isScrollingDown ? rotate : -rotate)
        );
      } else if (
        extrasSection &&
        scrollY >= extrasSection.offsetTop &&
        scrollY < contactSection.offsetTop
      ) {
        setActvSec("EXTRAS");
        setMs1Rotate(
          (prevRotate) => prevRotate + (isScrollingDown ? rotate : -rotate)
        );
        setMs2Rotate(
          (prevRotate) => prevRotate + (isScrollingDown ? rotate : -rotate)
        );
      } else if (contactSection && scrollY >= contactSection.offsetTop) {
        setActvSec("CONTACT");
        setMs1Rotate(
          (prevRotate) => prevRotate + (isScrollingDown ? rotate : -rotate)
        );
        setMs2Rotate(
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
  }, [setMs1Rotate, setMs2Rotate, prevScrollY]);

  // Scroll Effect

  // End oF Code Space

  return (
    <div
      ref={scrollContainerRef}
      className="w-[97vw] h-full hide-scrollbar overflow-y-scroll snap-y snap-proximity transition-all scroll-smooth bg-black text-white"
    >
      <section id="HOME" className="w-full h-screen snap-start">
        <Home actvSec={actvSec} />
      </section>
      <section id="PROJECT" className="w-full h-screen snap-start">
        <Projects actvSec={actvSec} />
      </section>
      <section id="EDUCAT" className="w-full h-screen snap-start">
        <Educat actvSec={actvSec} />
      </section>
      <section id="EXTRAS" className="w-full h-screen snap-start ">
        <Extras actvSec={actvSec} />
      </section>
      <section id="CONTACT" className="w-full h-screen snap-start ">
        <Contact actvSec={actvSec} />
      </section>
    </div>
  );
};
