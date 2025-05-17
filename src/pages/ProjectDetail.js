import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Section, Container, Button } from '../styles/AppStyles';
import { FaArrowLeft } from 'react-icons/fa';

const ProjectDetailContainer = styled.div`
  background: rgba(30, 30, 30, 0.5);
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.05);
  margin-top: 100px;
`;

const ProjectTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #f5f5f5;
`;

const ProjectMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
`;

const ProjectYear = styled.span`
  font-size: 1rem;
  background: linear-gradient(90deg, #3d5afe, #00b0ff);
  padding: 5px 15px;
  border-radius: 20px;
  color: white;
`;

const ProjectContent = styled.div`
  color: #d8d8d8;
  line-height: 1.8;
  margin-bottom: 40px;
  
  h3 {
    color: #f5f5f5;
    margin: 25px 0 15px;
  }
  
  p {
    margin-bottom: 15px;
  }
  
  ul {
    margin-left: 20px;
    margin-bottom: 15px;
    
    li {
      margin-bottom: 10px;
    }
  }
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
    margin-bottom: 30px;
  color: #3d5afe;
  font-weight: 500;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateX(-5px);
  }
`;

// Placeholder project data
const projectDetails = {
  1: {
    title: "Computational Analysis of a Spiked Blunt Body Using ANSYS Fluent",
    year: "2023",
    content: `
      <h3>Project Overview</h3>
      <p>This project involved using Computational Fluid Dynamics (CFD) to analyze the aerodynamic characteristics of a spiked blunt body. The main focus was on understanding drag reduction mechanisms and flow separation patterns.</p>
      
      <h3>Methodology</h3>
      <ul>
        <li>Created detailed 3D models of various spiked blunt body configurations</li>
        <li>Set up simulation parameters including boundary conditions and turbulence models in ANSYS Fluent</li>
        <li>Conducted mesh independence studies to ensure solution accuracy</li>
        <li>Performed parametric studies by varying spike length, geometry, and flow conditions</li>
      </ul>
      
      <h3>Results</h3>
      <p>The analysis demonstrated significant drag reduction (up to 30%) with optimal spike configurations. The study revealed the formation of recirculation zones and shear layers that contribute to the aerodynamic performance improvements. The results were validated against experimental data from literature with good agreement.</p>
      
      <h3>Technical Skills Applied</h3>
      <ul>
        <li>ANSYS Fluent for CFD simulations</li>
        <li>Mesh generation and refinement techniques</li>
        <li>Post-processing and visualization using Paraview</li>
        <li>Data analysis and comparison with theoretical models</li>
      </ul>
    `
  },
  // Other project details would be defined similarly
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectDetails[id] || {
    title: "Project Not Found",
    year: "",
    content: "<p>The requested project details are not available.</p>"
  };
  
  return (
    <Section>
      <Container>
        <ProjectDetailContainer>
          <BackButton to="/">
            <FaArrowLeft /> Back to Portfolio
          </BackButton>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectMeta>
              {project.year && <ProjectYear>{project.year}</ProjectYear>}
            </ProjectMeta>
            
            <ProjectContent dangerouslySetInnerHTML={{ __html: project.content }} />
            
            <Button as={Link} to="/">
              Return to Portfolio
            </Button>
          </motion.div>
        </ProjectDetailContainer>
      </Container>
    </Section>
  );
};

export default ProjectDetail;