import React, { useState, useEffect } from "react";
import InfoSection from "../components/InfoSection";
import {
  ezShop,
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
    if (section === 'smartface') {
      scroller.scrollTo('smartface');
    } else if (section === 'nasapix') {
      scroller.scrollTo('nasapix');
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
      <Element name="smartface">
        <InfoSection {...smartFace} />
      </Element>
      <Element name="nasapix">
        <InfoSection {...nasaPix} />
      </Element>      
      <InfoSection {...paintClone} />
      <InfoSection {...starWars} />
      <Footer />
    </>
  );
};

export default WorkPage;
