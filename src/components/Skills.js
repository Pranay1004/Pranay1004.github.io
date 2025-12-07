import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Section, Container, SectionTitle } from '../styles/AppStyles';

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCategory = styled(motion.div)`
  background: rgba(30, 30, 30, 0.5);
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #f5f5f5;
  padding-bottom: 10px;
  border-bottom: 2px solid #3d5afe;
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 15px;
`;

const SkillBadge = styled(motion.div)`
  background: rgba(50, 50, 50, 0.5);
  border-radius: 8px;
  padding: 12px 15px;
  text-align: center;
  color: #f5f5f5;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(45deg, rgba(61, 90, 254, 0.2), rgba(0, 176, 255, 0.2));
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

const LanguageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 20px;
`;

const LanguageBadge = styled(motion.div)`
  background: rgba(50, 50, 50, 0.5);
  border-radius: 8px;
  padding: 12px 20px;
    color: #f5f5f5;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  span.level {
    margin-left: 10px;
    font-size: 0.8rem;
    color: #3d5afe;
  }
`;

const AchievementsContainer = styled.div`
  margin-top: 30px;
`;

const AchievementsList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const AchievementItem = styled(motion.li)`
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
  color: #d8d8d8;
  
  &:before {
    content: '•';
    color: #3d5afe;
    font-weight: bold;
    margin-right: 10px;
  }
`;

const ConferenceContainer = styled.div`
  margin-top: 30px;
`;

const ConferenceList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ConferenceItem = styled(motion.li)`
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
  color: #d8d8d8;
  
  &:before {
    content: '✱';
    color: #00b0ff;
    font-weight: bold;
    margin-right: 10px;
  }
`;

const Skills = () => {
  const softwareSkills = [
    "Abaqus", "Ansys Fluent", "Ansys Workbench", "AutoCAD", "CNCTRAIN", "Fusion 360", 
    "GasTurb", "ICEM", "OpenFOAM", "OpenVSP", "Paraview", "Scilab", "SolidWorks", "Matlab", "Simulink", "MS Office"
  ];
  
  const programmingSkills = ["C/C++", "Java", "Python"];
  
  const softSkills = ["Leadership", "Effective Communication", "Public Speaking"];
  
  const interests = [
    "Advanced Manufacturing",
    "Finite Element Analysis",
    "Aircraft & UAV Design",
    "Computational Fluid Dynamics",
    "Computer Aided Manufacturing",
    "Aerospace Composites",
    "Propulsion Systems",
    "Aerospace Structures",
    "Flight Mechanics"
  ];
  
  const languages = [
    { name: "Hindi", level: "Native" },
    { name: "Marathi", level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "German", level: "A2" }
  ];
  
  const achievements = [
    "Global Qualifier, NASA Space Hackathon (Oct 2024)",
    "Champion – First Prize in CFD Hackathon hosted by FOSSEE, IIT Bombay (Dec 2023)",
    "NPTEL Course Topper in Aeroengine Gas Turbine Cycle, IIT Kharagpur (Oct 2023)",
    "FOSSEE Summer Fellowship, IIT Bombay (May 2023)",
    "GATE 2025 Qualified"
  ];
  
  const conferences = [
    "System Dynamics Theory & Practice, 2024 hosted by IEOR, IIT-Bombay",
    "International Conference on Advances in Aerospace & Energy Systems, 2024 hosted by Liquid Propulsion Systems Centre, ISRO – Vaniala, Thiruvananthapuram, Kerala"
  ];
  
  return (
    <Section id="skills">
      <Container>
        <SectionTitle data-aos="fade-up">Skills & Achievements</SectionTitle>
        
        <SkillsContainer>
          <SkillCategory 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <CategoryTitle>Technical Skills</CategoryTitle>
            <SkillGrid>
              {softwareSkills.map((skill, index) => (
                <SkillBadge
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {skill}
                </SkillBadge>
              ))}
            </SkillGrid>
            
            <CategoryTitle style={{ marginTop: '30px' }}>Programming & Scripting</CategoryTitle>
            <SkillGrid>
              {programmingSkills.map((skill, index) => (
                <SkillBadge
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {skill}
                </SkillBadge>
              ))}
            </SkillGrid>
            
            <CategoryTitle style={{ marginTop: '30px' }}>Soft Skills</CategoryTitle>
            <SkillGrid>
              {softSkills.map((skill, index) => (
                <SkillBadge
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {skill}
                </SkillBadge>
              ))}
            </SkillGrid>
            
            <CategoryTitle style={{ marginTop: '30px' }}>Languages</CategoryTitle>
            <LanguageContainer>
              {languages.map((lang, index) => (
                <LanguageBadge
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {lang.name} <span className="level">({lang.level})</span>
                </LanguageBadge>
              ))}
            </LanguageContainer>
            
            <CategoryTitle style={{ marginTop: '30px' }}>Areas of Interest</CategoryTitle>
            <SkillGrid>
              {interests.map((interest, index) => (
                <SkillBadge
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {interest}
                </SkillBadge>
              ))}
            </SkillGrid>
          </SkillCategory>
          
          <SkillCategory
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <CategoryTitle>Achievements and Awards</CategoryTitle>
            <AchievementsList>
              {achievements.map((achievement, index) => (
                <AchievementItem
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {achievement}
                </AchievementItem>
              ))}
            </AchievementsList>
            
            <ConferenceContainer>
              <CategoryTitle>Conferences</CategoryTitle>
              <ConferenceList>
                {conferences.map((conference, index) => (
                  <ConferenceItem
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {conference}
                  </ConferenceItem>
                ))}
              </ConferenceList>
            </ConferenceContainer>
          </SkillCategory>
        </SkillsContainer>
      </Container>
    </Section>
  );
};

export default Skills;