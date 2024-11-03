// src/components/ProjectCard.js
import './ProjectCard.css';
import PropTypes from 'prop-types';

const ProjectCard = ({ logo, title, description, url }) => {
  // Determine the size based on the logo filename
  const getLogoSize = (logo) => {
    if (logo.includes('BYP.jpg')) return { width: 64, height: 64 };
    if (logo.includes('SyP.png')) return { width: 150, height: 150 };
    if (logo.includes('proyecta.jpg')) return { width: 80, height: 64 };
    return { width: 64, height: 64 }; // default size
  };

  const { width, height } = getLogoSize(logo);

  return (
    <div data-testid="projectCard" className="project-card">
      <div>
        <div className="project-card-logo">
          {logo.endsWith('.jpg') || logo.endsWith('.png') ? (
            <img src={logo} alt={`${title} logo`} width={width} height={height} />
          ) : (
            logo
          )}
        </div>
        <h2 data-testid="projectCardName">{title}</h2>
      </div>
      <div>
        <p data-testid="projectCardContent">{description}</p>
        <a data-testid="projectCardLink" href={url} target="_blank" rel="noreferrer">
          <img src="/link.svg" alt="link icon" /> View Project
        </a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string,
};

ProjectCard.defaultProps = {
  url: '#',
};

export default ProjectCard;