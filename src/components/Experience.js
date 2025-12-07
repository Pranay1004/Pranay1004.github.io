import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Section, Container, SectionTitle } from '../styles/AppStyles';
import { FaBriefcase, FaFlask } from 'react-icons/fa';

const TimelineContainer = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 3px;
    background: linear-gradient(180deg, #3d5afe, #00b0ff);
    transform: translateX(-50%);
    
    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 60px;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  &:nth-child(even) {
    .content {
      float: right;
      
      @media (max-width: 768px) {
        float: none;
      }
    }
  }
  
  &:after {
    content: '';
    display: block;
    clear: both;
  }
`;

const TimelineContent = styled(motion.div)`
  position: relative;
  width: calc(50% - 40px);
  float: left;
  background: rgba(30, 30, 30, 0.5);
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.05);
  
  @media (max-width: 768px) {
    width: calc(100% - 70px);
    float: right;
    margin-left: 70px;
  }
  
  &:before {
    content: '';
    position: absolute;
    right: -10px;
    top: 20px;
    width: 20px;
    height: 20px;
    transform: rotate(45deg);
    background: rgba(30, 30, 30, 0.5);
    border-right: 1px solid rgba(255, 255, 255, 0.05);
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    
    @media (max-width: 768px) {
      right: auto;
      left: -10px;
      border-right: none;
      border-left: 1px solid rgba(255, 255, 255, 0.05);
      border-top: 1px solid rgba(255, 255, 255, 0.05);
    }
  }
  
  ${TimelineItem}:nth-child(even) &:before {
    right: auto;
    left: -10px;
    border-right: none;
    border-left: 1px solid rgba(255, 255, 255, 0.05);
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    
    @media (max-width: 768px) {
      left: -10px;
    }
  }
`;

const TimelineDate = styled.div`
  position: absolute;
  top: 150px;
  color: #f5f5f5;
  font-weight: 500;
  
  ${TimelineItem}:nth-child(odd) & {
    left: calc(50% + 15px); // Much closer to the center line
    
    @media (max-width: 768px) {
      left: 75px;
      top: -25px;
    }
  }
  
  ${TimelineItem}:nth-child(even) & {
    right: calc(50% + 15px); // Much closer to the center line
    text-align: right;
    
    @media (max-width: 768px) {
      right: auto;
      left: 75px;
      top: -25px;
      text-align: left;
    }
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  top: 20px;
  left: 50%;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: linear-gradient(45deg, #3d5afe, #00b0ff);
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  box-shadow: 0 0 0 5px rgba(61, 90, 254, 0.2);
  
  @media (max-width: 768px) {
    left: 20px;
  }
`;

const ExperienceTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 5px;
  color: #f5f5f5;
`;

const ExperiencePlace = styled.h4`
  font-size: 1.1rem;
  color: #3d5afe;
  margin-bottom: 15px;
`;

const ExperienceDescription = styled.ul`
  color: #d8d8d8;
  line-height: 1.6;
  padding-left: 20px;
  
  li {
    margin-bottom: 8px;
  }
`;

const Experience = () => {
  return (
    <Section id="experience">
      <Container>
        <SectionTitle data-aos="fade-up">Experience</SectionTitle>
        
        <TimelineContainer>
          <TimelineItem>
            <TimelineDot>
              <FaBriefcase color="#fff" />
            </TimelineDot>
            <TimelineDate>Mar 2025 - Aug 2025</TimelineDate>
            <TimelineContent 
              className="content"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ExperienceTitle>Research Assistant</ExperienceTitle>
              <ExperiencePlace>FOSSEE, Indian Institute of Technology, Bombay</ExperiencePlace>
              <ExperienceDescription>
                <li>Mentoring interns and fellows on simulation projects, ensuring technical depth and quality</li>
                <li>Collaborating on national workshops and capacity-building programs for CFD outreach</li>
              </ExperienceDescription>
            </TimelineContent>
          </TimelineItem>
          
          <TimelineItem>
            <TimelineDot>
              <FaBriefcase color="#fff" />
            </TimelineDot>
            <TimelineDate>Jun 2024 - Jul 2024</TimelineDate>
            <TimelineContent 
              className="content"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ExperienceTitle>Aeroengine Development Intern</ExperienceTitle>
              <ExperiencePlace>Indian Institute of Technology, Kharagpur</ExperiencePlace>
              <ExperienceDescription>
                <li>Research Title: Analysis Of Variable Cycle Engine Performance Using Gasturb</li>
                <li>Conducted parametric analysis of aircraft gas turbine engines</li>
                <li>Used Gasturb software for detailed performance evaluations and thermodynamic cycle analysis</li>
                <li>Optimized engine parameters to enhance design condition efficiency</li>
              </ExperienceDescription>
            </TimelineContent>
          </TimelineItem>
          
          <TimelineItem>
            <TimelineDot>
              <FaFlask color="#fff" />
            </TimelineDot>
            <TimelineDate>May 2023 - Aug 2023</TimelineDate>
            <TimelineContent 
              className="content"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ExperienceTitle>Computational Fluid Dynamics Intern</ExperienceTitle>
              <ExperiencePlace>Indian Institute of Technology, Bombay</ExperiencePlace>
              <ExperienceDescription>
                <li>Research Title: Numerical Study of Non-Newtonian Fluid across Sinusoidal Microchannel</li>
                <li>Performed literature survey, scientific writing, and pre/post-processing using OpenFOAM</li>
                <li>Implemented rheological models in open-source CFD software for simulations</li>
              </ExperienceDescription>
            </TimelineContent>
          </TimelineItem>
        </TimelineContainer>
      </Container>
    </Section>
  );
};

export default Experience;