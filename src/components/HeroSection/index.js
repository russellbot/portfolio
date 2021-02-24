import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElement";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <Fade left>
          <HeroH1>Russell Hart</HeroH1>
        </Fade>
        <Fade right>
          <HeroP>Web Developer / Designer</HeroP>
        </Fade>
        <Fade up>
          <HeroBtnWrapper>
            <Button
              to="/contact"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
            >
              Available for work {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </Fade>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
