import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import cafeteriaCart from "../assets/img/cafeteria-cart.png";
import soccerForm from "../assets/img/soccer-form.png";
import soccerError from "../assets/img/soccer-error.png";
import soccerSuccess from "../assets/img/soccer-success-email.png";

const projects = [
  {
    title: "Cafeteria Ordering System",
    description: "A React-based ordering interface with cart integration, item quantity updates, dynamic pricing, and order submission flow. Built with client-side form validation and responsive UI using Flexbox and styled-components.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/HunterTran10/CPSC-362-Cafeteria-Ordering-System",
    images: [cafeteriaCart],
  },
  {
    title: "Soccer League Management System",
    description: "A web-based league management system supporting user accounts and team administration. Implemented password recovery, form validation, and email-based reset delivery.",
    techStack: ["PHP", "MySQL", "HTML", "CSS"],
    githubUrl: "https://github.com/HunterTran10/Soccer-League-Management-System",
    images: [soccerForm, soccerError, soccerSuccess],
  },
];

export const Projects = () => {
  const [lightboxImg, setLightboxImg] = useState(null);

  return (
    <section className="project" id="projects">
      <Container>
        <h2 className="text-center">Projects</h2>
        {projects.map((project, index) => (
          <Row
            key={index}
            className={`align-items-center mb-5 ${index % 2 !== 0 ? "flex-row-reverse" : ""}`}
          >
            <Col xs={12} md={6} className="mb-4 mb-md-0">
              <div className="proj-img-group">
                {project.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="proj-img"
                    onClick={() => setLightboxImg(img)}
                  />
                ))}
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="proj-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="github-link">
                    View on GitHub →
                  </a>
                )}
              </div>
            </Col>
          </Row>
        ))}
      </Container>

      {lightboxImg && (
        <div className="lightbox-overlay" onClick={() => setLightboxImg(null)}>
          <img src={lightboxImg} alt="Enlarged screenshot" className="lightbox-img" />
          <button className="lightbox-close" onClick={() => setLightboxImg(null)}>
            ×
          </button>
        </div>
      )}
    </section>
  );
};