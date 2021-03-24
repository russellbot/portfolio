import React from "react";
import Fade from "react-reveal/Fade";
import Icon1 from "../../images/ezshop-home.png";
import Icon2 from "../../images/cogito.png";
import Icon3 from "../../images/rsty-clothing.png";
import { Button } from "../ButtonElement";
import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsH2,
  ProjectsP,
  ProjectsIcon,
  ProjectsBtnWrap,
} from "./ProjectsElements";

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <Fade down>
        <ProjectsH1>Projects</ProjectsH1>
      </Fade>
      <Fade right>
        <ProjectsWrapper>
          <ProjectsCard to="/work">
            <ProjectsIcon src={Icon1} />
            <ProjectsH2>Ez-Shop</ProjectsH2>
            <ProjectsP>MERN stack App</ProjectsP>
          </ProjectsCard>
          <ProjectsCard to="/cogito">
            <ProjectsIcon src={Icon2} />
            <ProjectsH2>Cogito</ProjectsH2>
            <ProjectsP>Full Stack App</ProjectsP>
          </ProjectsCard>
          <ProjectsCard to="/rsty">
            <ProjectsIcon src={Icon3} />
            <ProjectsH2>RSTY Clothing</ProjectsH2>
            <ProjectsP>Full Stack App</ProjectsP>
          </ProjectsCard>
        </ProjectsWrapper>
        <ProjectsBtnWrap>
          <Button to="/work" primary big dark>
            See all Projects
          </Button>
        </ProjectsBtnWrap>
      </Fade>
    </ProjectsContainer>
  );
};

export default Projects;
