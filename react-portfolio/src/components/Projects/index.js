import React from 'react';
import Icon1 from '../../images/ezshop-home.png';
import Icon2 from '../../images/smartface.PNG';
import Icon3 from '../../images/nasapix.PNG';
import {Button} from '../ButtonElement';
import {
    ProjectsContainer,
    ProjectsH1,
    ProjectsWrapper,
    ProjectsCard,
    ProjectsH2,
    ProjectsP,
    ProjectsIcon,
    ProjectsBtnWrap    
} from './ProjectsElements';

const Projects = () => {
    return (
        <ProjectsContainer id="projects">
            <ProjectsH1>Projects</ProjectsH1>
            <ProjectsWrapper>
                <ProjectsCard to="/work">
                    <ProjectsIcon src={Icon1} />
                    <ProjectsH2>Ez-Shop</ProjectsH2>
                    <ProjectsP>MERN stack App</ProjectsP>
                </ProjectsCard>
                <ProjectsCard to="/smartface">
                    <ProjectsIcon src={Icon2} />
                    <ProjectsH2>Smart-Face</ProjectsH2>
                    <ProjectsP>Full Stack App</ProjectsP>
                </ProjectsCard>
                <ProjectsCard to="/nasapix">
                    <ProjectsIcon src={Icon3} />
                    <ProjectsH2>Nasa-Pix</ProjectsH2>
                    <ProjectsP>Front End App</ProjectsP>
                </ProjectsCard>
            </ProjectsWrapper>
            <ProjectsBtnWrap>
              <Button to="/work" primary big dark>See all Projects</Button>   
            </ProjectsBtnWrap>                 
        </ProjectsContainer>
    )
}

export default Projects;
