"use client";
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { useState } from 'react';
import ThemeSwitcher from '../../components/ThemeSwitcher';
import Footer from '../../components/Footer';
import UsesSection from '../../components/UsesSection';

const lightTheme = {
  background: '#ffffff',
  color: '#000000',
  borderColor: '#e2e8f0',
  textColor: '#4a5568',
  linkColor: '#6b46c1',
};

const darkTheme = {
  background: '#1a202c',
  color: '#ffffff',
  borderColor: '#2d3748',
  textColor: '#a0aec0',
  linkColor: '#9f7aea',
};

const UsesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  font-family: Arial, sans-serif;
  color: ${(props) => props.theme.color};
  padding: 20px;
  border-radius: 0px;
  margin-top: 10px;
`;

const ThemeSwitcherContainer = styled.div`
  position: absolute;
  top: 5px;
  left: 10px;
  z-index: 100;
`;


const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 0;
  margin: 0;
  background-color: ${(props) => props.theme.background};
`;

export default function Uses() {
  const [theme, setTheme] = useState("light");
  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Sample "uses" data
  const usesData = [
    {
      groupName: 'Software',
      items: [
        { title: 'GitHub', description: 'Version control and collaboration platform for development projects.' },
        { title: 'IntelliJ IDEA', description: 'Powerful IDE for Java development and other languages.' },
        { title: 'SQL', description: 'Structured Query Language for managing and querying databases.' },
        { title: 'JavaScript', description: 'Versatile programming language for web development.' },
        { title: 'ArcGIS', description: 'Geographic Information System software for mapping and spatial analysis.' },
      ],
    },
    {
      groupName: 'Methodologies',
      items: [
        {title: 'Work Approach',description: 'I utilize Agile methodologies, Scrum, and Design Thinking to ensure flexible and efficient project management.'},
        {title: 'Documentation',description: 'I use Google Docs, Microsoft Teams, and Dropbox for effective documentation and collaboration.'},
        {title: 'Results-Oriented Focus',description: 'I prioritize outcomes by setting clear goals and metrics, ensuring that every project aligns with desired objectives and delivers value.'},
        {title: 'Environmental Engineering Knowledge',description: 'As an environmental engineer, I incorporate sustainable practices and environmental considerations into software solutions, enhancing the impact of technology on ecological well-being.'},
      ],
    },
  ];

  return (
    <StyledThemeProvider theme={currentTheme}>
      <div className="max-w-5xl mx-auto p-1">
        <Head>
          <title>Portfolio - Uses</title>
          <meta name="description" content="The uses page of my portfolio." />
        </Head>

        <Navbar />

        <ThemeSwitcherContainer>
          <ThemeSwitcher darkClassName="dark" onToggle={toggleTheme} />
        </ThemeSwitcherContainer>

        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold">Tools and Setup</h1>
          <p className="text-gray-500 mt-2">
            Here’s a breakdown of the tools, software, and methodologies I use for my work and projects.
          </p>
        </header>

        <UsesContainer>
          <UsesSection items={usesData} />
        </UsesContainer>

        <FooterContainer>
          <Footer
            links={[
              { title: "HOME", url: "/" },
              { title: "ABOUT", url: "/about" },
              { title: "PROJECTS", url: "/projects" },
              { title: "USES", url: "/uses" },
            ]}
          />
        </FooterContainer>
      </div>
    </StyledThemeProvider>
  );
}