import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaArrowDown, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import ParticleBackground from './ParticleBackground';
// Add this import (create an assets folder in your src directory and place your image there)
import profileImage from '../assets/profile.jpg'; // Replace with your actual image path

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  text-align: center;
  z-index: 1;
  max-width: 800px;
  padding: 0 20px;
`;

// New styled component for the profile image
const ProfileImageContainer = styled(motion.div)`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 30px;
  border: 3px solid #3d5afe;
  box-shadow: 0 5px 20px rgba(61, 90, 254, 0.4);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Name = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 20px;
  background: linear-gradient(90deg, #3d5afe, #00b0ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 2rem;
  margin-bottom: 30px;
  color: #f5f5f5;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Badge = styled(motion.div)`
  display: inline-block;
  background: linear-gradient(90deg, #6200ea, #651fff);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 500;
  margin-bottom: 30px;
  box-shadow: 0 5px 15px rgba(101, 31, 255, 0.4);
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
`;

const SocialIcon = styled(motion.a)`
  font-size: 1.5rem;
  color: #f5f5f5;
  transition: color 0.3s ease;
  
  &:hover {
    color: #3d5afe;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  color: #f5f5f5;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Hero = () => {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroSection id="home">
      <ParticleBackground />
      <HeroContent>
        {/* Add the profile image here */}
        <ProfileImageContainer
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src={profileImage} alt="Pranay Kumar Pandey" />
        </ProfileImageContainer>
        
        <Name
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Pranay Kumar Pandey
        </Name>
        
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Aerospace Engineer & CFD Specialist
        </Title>
        
        <Badge
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          GATE 2025 Qualified
        </Badge>
        
        <SocialLinks>
          <SocialIcon 
            href="https://linkedin.com/in/pranay10" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FaLinkedin />
          </SocialIcon>
          <SocialIcon 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=pranaypandey82@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FaEnvelope />
          </SocialIcon>
          <SocialIcon 
            href="https://github.com/Pranay1004" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FaGithub />
          </SocialIcon>
        </SocialLinks>
      </HeroContent>
      
      <ScrollIndicator 
        onClick={scrollToNextSection}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        whileHover={{ scale: 1.2 }}
      >
        <FaArrowDown />
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;