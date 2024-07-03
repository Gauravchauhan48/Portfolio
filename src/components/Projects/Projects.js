import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import p4 from "../../Assets/Projects/p4.png";
import p3 from "../../Assets/Projects/p3.png";
import p1 from "../../Assets/Projects/p1.png";
import p2 from "../../Assets/Projects/p2.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p1}
              isBlog={false}
              title="Awareness & Preparedness for Disaster"
              description="The  Awareness & Preparedness for Disaster project aims to educate and empower communities to effectively respond to and mitigate the impact of disasters. This project recognizes the importance of proactive measures in minimizing loss of life, infrastructure damage, and economic disruption caused by natural or man-made disasters."
              ghLink="https://github.com/Gauravchauhan48?tab=repositories"
              demoLink="https://mini2023.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p2}
              isBlog={false}
              title="StudyNotion"
              description="Designed and developed a virtual classroom enhancement tool using the MERN.Implemented features to enhance engagement, collaboration, and knowledge retention in virtual classrooms."
              ghLink="https://github.com/Gauravchauhan48/Study_Notion"
              demoLink="https://study-notion-rahulnaval.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p3}
              isBlog={false}
              title="Password Generator"
              description="Developed a web application using HTML, CSS, and JavaScript to generate strong passwords for online accounts.Implemented algorithms to ensure password strength and security"
              ghLink="https://github.com/Gauravchauhan48/Password_Generator"
              demoLink="https://gauravchauhan48.github.io/Password_Generator/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p4}
              isBlog={false}
              title="Weather App"
              description="The Weather App project is a user-friendly application designed to provide accurate and up-to-date weather information to users around the globe. With a sleek and intuitive interface, this app aims to enhance user experience by delivering essential weather data in a convenient and accessible format."
              ghLink="https://github.com/Gauravchauhan48/weather-app-using-javascript-css-HTML-"
              demoLink="https://gauravchauhan48.github.io/weather-app-using-javascript-css-HTML-/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
