import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px 0;
  background: rgba(10, 10, 10, 0.9);
  backdrop-filter: blur(10px);
  z-index: 1000;
  transition: all 0.3s ease;
  
  &.scrolled {
    padding: 15px 0;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  background: linear-gradient(90deg, #3d5afe, #00b0ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 30px;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 70%;
    height: 100vh;
    background: #0a0a0a;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: right 0.3s ease;
    z-index: 1000;
  }
`;

const NavLink = styled(motion.a)`
  font-size: 1rem;
  font-weight: 500;
  position: relative;
  cursor: pointer;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #3d5afe, #00b0ff);
    transition: width 0.3s ease;
  }
  
  &:hover:after,
  &.active:after {
    width: 100%;
  }
  
  @media (max-width: 768px) {
    margin: 15px 0;
    font-size: 1.2rem;
  }
`;

const MenuToggle = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Update active link based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveLink(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (linkId) => {
    setActiveLink(linkId);
    setIsMenuOpen(false);
  };

  return (
    <HeaderContainer className={scrolled ? 'scrolled' : ''}>
      <NavContainer>
        <Logo to="/"></Logo>
        
        <MenuToggle onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </MenuToggle>
        
        <NavLinks isOpen={isMenuOpen}>
          {[
            { id: 'home', label: 'Home' },
            { id: 'about', label: 'About' },
            { id: 'experience', label: 'Experience' },
            { id: 'projects', label: 'Projects' },
            { id: 'skills', label: 'Skills' },
            { id: 'contact', label: 'Contact' }
          ].map(link => (
            <NavLink
              key={link.id}
              href={`#${link.id}`}
              className={activeLink === link.id ? 'active' : ''}
              onClick={() => handleLinkClick(link.id)}
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {link.label}
            </NavLink>
          ))}
        </NavLinks>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;