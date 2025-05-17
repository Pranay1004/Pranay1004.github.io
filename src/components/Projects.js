import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Section, Container, SectionTitle } from '../styles/AppStyles';
import { FaRocket, FaWind, FaPlane, FaRobot, FaBrain, FaCode } from 'react-icons/fa';

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  
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
    title: "Computational Analysis of a Spiked Blunt Body Using ANSYS Fluent",
    year: "2023",
    description: "Conducted CFD analysis to study the aerodynamic characteristics of a spiked blunt body, focusing on drag reduction and flow separation.",
    icon: <FaWind />
  },
  {
    id: 2,
    title: "Numerical Simulation of Flow Over a 2D Prism Using OpenFOAM",
    year: "2023",
    description: "Performed steady-state CFD simulations to analyze the flow behavior around a 2D prism, evaluating pressure distribution and vortex shedding using simpleFoam.",
    icon: <FaCode />
  },
  {
    id: 3,
    title: "Conceptual Design of a UAV for Mars Exploration",
    year: "2024",
    description: "Worked on a preliminary UAV design for Mars exploration at NACDEC VII, considering aerodynamic feasibility, propulsion, and environmental constraints.",
    icon: <FaRocket />
  },
  {
    id: 4,
    title: "Thermal Fluid Flow Simulation of a U-Bend Duct Using OpenFOAM",
    year: "2025",
    description: "Simulated conjugate heat transfer and fluid flow through a U-bend duct to assess temperature gradients and flow characteristics using buoyantPimpleFoam.",
    icon: <FaWind />
  },
  {
    id: 5,
    title: "Development of Brain Tumor Detection using Scilab for Cancer",
    year: "2025",
    description: "Implemented a brain tumor detection system using Scilab, leveraging image processing techniques to identify cancerous regions in medical scans.",
    icon: <FaBrain />
  },
  {
    id: 6,
    title: "Autonomous Navigation of a Drone in GPS-Denied Martian Terrain",
    year: "2025",
    description: "LiDAR Navigation System Load for autonomous navigation solution for a drone using computer vision, sensor fusion, and flight control algorithms.",
    icon: <FaPlane />
  },
  {
    id: 7,
    title: "Conceptual Design of a Supersonic UAV for Military Applications",
    year: "2025",
    description: "Contributions to the conceptual design of a supersonic UAV for military operations at NACDEC VIII, focusing on aerodynamics, propulsion, and mission adaptability.",
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