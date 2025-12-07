import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Section, Container, SectionTitle } from '../styles/AppStyles';

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutContent = styled.div`
  color: #f5f5f5;
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 20px;
  color: #d8d8d8;
  text-align: justify;
`;

const EducationContainer = styled.div`
  background: rgba(30, 30, 30, 0.5);
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

const EducationTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #f5f5f5;
  padding-bottom: 10px;
  border-bottom: 2px solid #3d5afe;
`;

const EducationItem = styled(motion.div)`
  margin-bottom: 25px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const School = styled.h4`
  font-size: 1.2rem;
  color: #f5f5f5;
  margin-bottom: 8px;
`;

const Degree = styled.p`
  font-size: 1rem;
  font-style: italic;
  color: #d8d8d8;
  margin-bottom: 5px;
`;

const DateLocation = styled.div`
  display: flex;
  justify-content: space-between;
  color: #a0a0a0;
  font-size: 0.9rem;
  margin-top: 5px;
`;

const About = () => {
  return (
    <Section id="about">
      <Container>
        <SectionTitle data-aos="fade-up">About Me</SectionTitle>
        
        <AboutContainer>
          <AboutContent data-aos="fade-right">
            <AboutText>
              I am an Aerospace Engineer with a deep interest on Rocket Technologies and Aircraft Design. My main aim is to work and realise vertical landing of rockets.
            </AboutText>
            <AboutText>
              As a GATE 2025 Qualified engineer, I've developed expertise in using various simulation software like ANSYS, OpenFOAM, and GasTurb. My research internships at prestigious institutions like IIT Kharagpur and IIT Bombay have allowed me to work on challenging aerospace engineering problems, deepening my understanding of fluid dynamics and thermal systems.
            </AboutText>
            <AboutText>
              Through my projects and research work, I have gained hands-on experience in designing and analyzing complex aerospace systems. I am passionate about leveraging advanced computational tools and innovative engineering approaches to develop sustainable solutions for modern aerospace challenges. My commitment to continuous learning and problem-solving drives me to explore cutting-edge technologies in propulsion, structures, and control systems.
            </AboutText>
          </AboutContent>
          
          <EducationContainer data-aos="fade-left">
            <EducationTitle>Education</EducationTitle>
            
            <EducationItem 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <School>Indian Institute of Space Science & Technology (IIST)</School>
              <Degree>M.Tech in Manufacturing Technology, Dept. of Aerospace Engineering</Degree>
              <DateLocation>
                <span>2025 - 2027</span>
                <span>Thiruvananthapuram, Kerala</span>
              </DateLocation>
            </EducationItem>
            
            <EducationItem 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true }}
            >
              <School>Amity University Mumbai</School>
              <Degree>B.Tech in Aerospace Engineering — CGPA: 8.28</Degree>
              <Degree>Minor in Business Management</Degree>
              <DateLocation>
                <span>2021 - 2025</span>
                <span>Mumbai, Maharashtra</span>
              </DateLocation>
            </EducationItem>
            
            <EducationItem 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <School>St. Andrews Jr. College, Panvel</School>
              <Degree>Standard 12th / High School Certificate (HSC) — 89.7%</Degree>
              <DateLocation>
                <span>2019 - 2021</span>
                <span>Mumbai, Maharashtra</span>
              </DateLocation>
            </EducationItem>
            
            <EducationItem 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              viewport={{ once: true }}
            >
              <School>Convent of Jesus & Mary High School, Kharghar</School>
              <Degree>Standard 10th / Secondary School Certificate (SSC) — 85%</Degree>
              <DateLocation>
                <span>2008 - 2019</span>
                <span>Mumbai, Maharashtra</span>
              </DateLocation>
            </EducationItem>
          </EducationContainer>
        </AboutContainer>
      </Container>
    </Section>
  );
};

export default About;