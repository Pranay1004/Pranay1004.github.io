import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Section, Container, SectionTitle } from '../styles/AppStyles';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  background: rgba(30, 30, 30, 0.5);
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

const LocationSection = styled.div`
  text-align: left;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(45deg, #3d5afe, #00b0ff);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  font-size: 1.2rem;
  box-shadow: 0 10px 20px rgba(61, 90, 254, 0.3);
`;

const ContactText = styled.div`
  h4 {
    font-size: 1.2rem;
    color: #f5f5f5;
    margin-bottom: 5px;
  }
  
  p {
    color: #d8d8d8;
  }
  
  a {
    color: #3d5afe;
    transition: color 0.3s ease;
    
    &:hover {
      color: #00b0ff;
    }
  }
`;

const ContactCTA = styled.div`
  text-align: center;
  margin-top: 20px;
  color: #d8d8d8;
  
  p {
    font-size: 1.1rem;
    margin-bottom: 20px;
  }
`;

const Contact = () => {
  return (
    <Section id="contact">
      <Container>
        <SectionTitle data-aos="fade-up">Contact Me</SectionTitle>
        
        <ContactContainer>
          <LocationSection data-aos="fade-up">
            <ContactIcon>
              <FaMapMarkerAlt color="#fff" />
            </ContactIcon>
            <ContactText>
              <h4>Location</h4>
              <p>Kharghar, Navi-Mumbai, Maharashtra, India</p>
            </ContactText>
          </LocationSection>
          
          <ContactGrid>
            <ContactInfo data-aos="fade-right">
              <ContactItem
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <ContactIcon>
                  <FaEnvelope color="#fff" />
                </ContactIcon>
                <ContactText>
                  <h4>Email</h4>
                  <p><a href="https://mail.google.com/mail/?view=cm&fs=1&to=pranaypandey82@gmail.com" target="_blank" rel="noreferrer">pranaypandey82@gmail.com</a></p>
                </ContactText>
              </ContactItem>
              
              <ContactItem
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <ContactIcon>
                  <FaPhone color="#fff" />
                </ContactIcon>
                <ContactText>
                  <h4>Phone</h4>
                  <p><a href="tel:+919082571606">+91 9082571606</a></p>
                </ContactText>
              </ContactItem>
            </ContactInfo>
            
            <ContactInfo data-aos="fade-left">
              <ContactItem
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <ContactIcon>
                  <FaLinkedin color="#fff" />
                </ContactIcon>
                <ContactText>
                  <h4>LinkedIn</h4>
                  <p><a href="https://linkedin.com/in/pranay10" target="_blank" rel="noreferrer">linkedin.com/in/pranay10</a></p>
                </ContactText>
              </ContactItem>
              
              <ContactItem
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <ContactIcon>
                  <FaGithub color="#fff" />
                </ContactIcon>
                <ContactText>
                  <h4>GitHub</h4>
                  <p><a href="https://github.com/Pranay1004" target="_blank" rel="noreferrer">github.com/Pranay1004</a></p>
                </ContactText>
              </ContactItem>
            </ContactInfo>
          </ContactGrid>
          
          <ContactCTA>
          </ContactCTA>
        </ContactContainer>
      </Container>
    </Section>
  );
};

export default Contact;