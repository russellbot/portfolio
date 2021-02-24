import React, {useState, useEffect} from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Projects from '../components/Projects';
import { homeObjOne } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { Element, animateScroll as scroll, scroller } from 'react-scroll';

const Home = ({ section }) => {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if(section === 'about') {
            scroller.scrollTo('about')
        }
        return () => {
            setIsOpen(false);
        }
    }, [section])

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle} />
          <HeroSection />
          <Projects />
          <Element name="about">
            <InfoSection {...homeObjOne}/>  
          </Element>          
          <Footer />
        </>
    )
}

export default Home
