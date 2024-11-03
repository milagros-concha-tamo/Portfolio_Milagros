"use client";

import Head from 'next/head';
import Navbar from '../../components/Navbar';
import { useState } from 'react';
import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components';
import ThemeSwitcher from '../../components/ThemeSwitcher';
import Footer from '../../components/Footer';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const lightTheme = {
  background: '#ffffff',
  color: '#000000',
};

const darkTheme = {
  background: '#000000',
  color: '#ffffff',
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  min-height: 100vh;
  padding: 20px;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 0px;
  gap: 70px;
`;

const ProfileImage = styled.img`
  width: 270px;
  height: 270px;
  border-radius: 20%;
  object-fit: cover;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const IntroText = styled.div`
  flex: 1;
  margin-bottom: 20px;
  margin-top: 10px;
  line-height: 1.7;

  p + p {
    margin-top: 20px;
  }
`;

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;
  width: 100%;
  gap: 1px; /* Equal space between each contact item */
`;

const ContactInfo = styled.p`
  margin: 2px 0;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 7px; /* Space between icon and text */
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4px;
  gap: 5px; /* Equal space between social links */
`;

const SocialLink = styled.a`
  color: ${(props) => (props.theme === darkTheme ? '#ffffff' : props.theme.color)}; /* Change to white in dark theme */
  text-decoration: none;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    color: #9333ea; /* Keep the hover effect */
    cursor: pointer; /* Ensure cursor is visible */
  }
`;

const ThemeSwitcherContainer = styled.div`
  position: absolute;
  top: 5px;
  left: 10px;
  z-index: 100;
`;

export default function About() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <StyledThemeProvider theme={currentTheme}>
      <Head>
        <title>Portfolio - About</title>
        <meta name="description" content="The about page of my portfolio." />
      </Head>

      <div className="max-w-5xl mx-auto p-1">
        <Navbar />

        <ThemeSwitcherContainer>
          <ThemeSwitcher darkClassName="dark" toggleTheme={toggleTheme} />
        </ThemeSwitcherContainer>

        <header className="text-center mb-8">
          <h1 className="text-5xl font-bold dark:text-white">Milagros Concha Tamo</h1>
        </header>

        <section className="flex-1">
          <ProfileSection>
            <div>
              <ProfileImage src="/mili.png" alt="Milagros's profile" />
              <ContactSection>
                <ContactInfo><FaMapMarkerAlt /> Utah</ContactInfo>
                <ContactInfo><FaEnvelope /> mdc501@ensign.edu</ContactInfo>
                <SocialLinks>
                  <SocialLink href="https://www.linkedin.com/in/milagros-concha-tamo-682220133/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin /> LinkedIn
                  </SocialLink>
                  <SocialLink href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
                    <FaGithub /> GitHub
                  </SocialLink>
                </SocialLinks>
              </ContactSection>
            </div>

            <InfoSection>
              <IntroText>
                <p>Hello! I am Milagros, a peruvian environmental engineer with a passion for employing technology to create sustainable solutions. Currently, I am expanding my skills by pursuing a Computer Science Certificate at Ensign College, where I am exploring how programming and data science can drive impactful environmental change.</p>
                <p>My background in environmental engineering has provided me with a strong foundation in understanding resource management and sustainability challenges, while my computer science education equips me with the technical skills to solve these issues through innovative technology.</p>
              </IntroText>
            </InfoSection>
          </ProfileSection>
        </section>
      </div>
      <Footer
        links={[
          { title: "HOME", url: "/" },
          { title: "ABOUT", url: "/about" },
          { title: "PROJECTS", url: "/projects" },
          { title: "USES", url: "/uses" },
        ]}
      />
    </StyledThemeProvider>
  );
}