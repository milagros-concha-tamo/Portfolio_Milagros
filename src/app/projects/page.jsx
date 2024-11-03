"use client";
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { useState } from 'react';
import ThemeSwitcher from '../../components/ThemeSwitcher';
import Footer from '../../components/Footer';
import ProjectCard from '../../components/ProjectCard'; // Import the new ProjectCard

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

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
`;

const ThemeSwitcherContainer = styled.div`
  position: absolute;
  top: 5px;
  left: 10px;
  z-index: 100;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
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

export default function Projects() {
  const [theme, setTheme] = useState("light");
  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const projectData = [
    {
      title: 'BYU-Pathway Worldwide',
      description: 'I assist students with course registration issues and corrections to their transcripts and records.',
      url: 'https://www.byupathway.edu/',
      logo: '/BYUP.jpg',
    },
    {
      title: 'Consorsium S&P',
      description: 'I have been working with the safety and environmental management team on the Improvement and Expansion of the Integral Storm Drainage System of the City of Talara',
      url: 'https://syp.com.pe/paquete-d06/',
      logo: '/SyP.png',
    },
    {
      title: 'Proyecta',
      description: 'This project uses basic web design to support the planning and visualization of a multifamily building.',
      url: 'https://www.proyecta.net.pe/',
      logo: '/proyecta.jpg',
    },
  ];

  return (
    <StyledThemeProvider theme={currentTheme}>
      <div className="max-w-5xl mx-auto p-1">
        <Head>
          <title>Portfolio - Projects</title>
          <meta name="description" content="The projects page of my portfolio." />
        </Head>

        <Navbar />

        <ThemeSwitcherContainer>
          <ThemeSwitcher darkClassName="dark" />
        </ThemeSwitcherContainer>

        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold">Welcome to my personal projects space</h1>
          <p className="text-gray-500 mt-2">
          Hello! I'm currently building skills in website and game development. Here, you can explore the projects I’m working on now, along with past projects from my background in Environmental Engineering. I haven't developed any websites just yet, but I'm excited to gain the skills to make that happen! 😊
          </p>
        </header>

        <ProjectsContainer>
          <ProjectsGrid>
            {projectData.map((project, index) => (
              <ProjectCard
                key={index}
                logo={project.logo}
                title={project.title}
                description={project.description}
                url={project.url}
              />
            ))}
          </ProjectsGrid>
        </ProjectsContainer>

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