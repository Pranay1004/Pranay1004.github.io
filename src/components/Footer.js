import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: rgba(10, 10, 10, 0.9);
  padding: 40px 0 20px;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterLogo = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(90deg, #3d5afe, #00b0ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
`;

const SocialIcon = styled.a`
  font-size: 1.5rem;
  color: #f5f5f5;
  transition: color 0.3s ease, transform 0.3s ease;
  
  &:hover {
    color: #3d5afe;
    transform: translateY(-5px);
  }
`;

const FooterNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
`;

const FooterLink = styled.a`
  color: #d8d8d8;
  transition: color 0.3s ease;
  
  &:hover {
    color: #3d5afe;
  }
`;

const Copyright = styled.p`
  color: #a0a0a0;
  text-align: center;
  font-size: 0.9rem;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLogo>Pranay Kumar Pandey</FooterLogo>
        
        <SocialLinks>
            <SocialIcon 
                href="https://linkedin.com/in/pranay10" 
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaLinkedin />
            </SocialIcon>
            <SocialIcon 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=pranaypandey82@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                >
                <FaEnvelope />
            </SocialIcon>
            <SocialIcon 
                href="https://github.com/Pranay1004" 
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaGithub />
            </SocialIcon>
        </SocialLinks>
        
        
        <Copyright>
          &copy; {currentYear} Pranay Kumar Pandey. All Rights Reserved.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;