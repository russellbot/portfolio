import React, { useState, useEffect } from "react";
import InfoSection from "../components/InfoSection";
import {
  ezShop,
  cogito,
  rsty,
  smartFace,
  nasaPix,
  paintClone,
  starWars,
} from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Element, animateScroll as scroll, scroller } from "react-scroll";

const WorkPage = ({ section }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (section === "cogito") {
      scroller.scrollTo("cogito");
    } else if (section === "rsty") {
      scroller.scrollTo("rsty");
    }
    return () => {
      setIsOpen(false);
    };
  }, [section]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <InfoSection {...ezShop} />
      <Element name="cogito">
        <InfoSection {...cogito} />
      </Element>
      <Element name="rsty">
        <InfoSection {...rsty} />
      </Element>
      <InfoSection {...smartFace} />
      <InfoSection {...nasaPix} />
      <InfoSection {...paintClone} />
      <InfoSection {...starWars} />
      <Footer />
    </>
  );
};

export default WorkPage;
