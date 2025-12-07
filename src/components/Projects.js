import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Section, Container, SectionTitle } from '../styles/AppStyles';
import { FaRocket, FaPlane } from 'react-icons/fa';

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: rgba(30, 30, 30, 0.5);
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }
`;

const ProjectIconWrapper = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(45deg, #3d5afe, #00b0ff);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 1.8rem;
  box-shadow: 0 10px 20px rgba(61, 90, 254, 0.3);
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: #f5f5f5;
`;

const ProjectYear = styled.span`
  font-size: 0.9rem;
  color: #3d5afe;
  margin-left: 10px;
  font-weight: normal;
`;

const ProjectDescription = styled.p`
  color: #d8d8d8;
  margin-bottom: 20px;
  line-height: 1.6;
  flex-grow: 1;
`;

const projectsData = [
  {
    id: 1,
    title: "Development of Random Positioning Machine for Simulating Microgravity on Earth",
    year: "2025",
    description: "M.Tech course project focusing on model development and digital twin technology for microgravity simulation applications.",
    icon: <FaRocket />
  },
  {
    id: 2,
    title: "Advancement in Affordable and Accessible Avionics Control Systems for Modern Rocketry",
    year: "2025",
    description: "B.Tech final project: Developed cost-effective, robust avionics for model rocketry, focused on lightweight structures and reliability.",
    icon: <FaRocket />
  },
  {
    id: 3,
    title: "Autonomous Drone Navigation in GPS-Denied Martian Terrain",
    year: "2024",
    description: "IROC-U competition: Systems Engineer managing sensor fusion, script development and adherence to competition outcomes for autonomous navigation.",
    icon: <FaPlane />
  },
  {
    id: 4,
    title: "Conceptual Supersonic UAV Design for Military Applications",
    year: "2024",
    description: "NACDEC VIII: Team mentor contributions to aerodynamic and propulsion system design for supersonic flight in military applications.",
    icon: <FaRocket />
  }
];

const Projects = () => {
  return (
    <Section id="projects">
      <Container>
        <SectionTitle data-aos="fade-up">Projects</SectionTitle>
        
        <ProjectsGrid>
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectIconWrapper>
                {project.icon}
              </ProjectIconWrapper>
              <ProjectTitle>
                {project.title}
                <ProjectYear>({project.year})</ProjectYear>
              </ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </Section>
  );
};

export default Projects;