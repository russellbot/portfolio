import React from 'react';
import Icon1 from '../../images/ezshop-home.png';
import Icon2 from '../../images/smartface.PNG';
import Icon3 from '../../images/nasapix.PNG';
import {
    ProjectsContainer,
    ProjectsH1,
    ProjectsWrapper,
    ProjectsCard,
    ProjectsH2,
    ProjectsP,
    ProjectsIcon    
} from './ProjectsElements';

const Projects = () => {
    return (
        <ProjectsContainer id="projects">
            <ProjectsH1>Projects</ProjectsH1>
            <ProjectsWrapper>
                <ProjectsCard>
                    <ProjectsIcon src={Icon1} />
                    <ProjectsH2>ez-shop</ProjectsH2>
                    <ProjectsP>MERN stack App</ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon src={Icon2} />
                    <ProjectsH2>smart-face</ProjectsH2>
                    <ProjectsP>full stack App</ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon src={Icon3} />
                    <ProjectsH2>Nasa Pix</ProjectsH2>
                    <ProjectsP>Front End App</ProjectsP>
                </ProjectsCard>
            </ProjectsWrapper>            
        </ProjectsContainer>
    )
}

export default Projects;
