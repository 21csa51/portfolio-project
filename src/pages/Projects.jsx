import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import kickstart from "../assets/projects/kickstart.png";
import lift from "../assets/projects/lift.png";
import project from "../assets/projects/project.jpeg";
import Particle from "../components/Particle";
import ProjectCard from "../components/Projects/ProjectCard";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="Smart Education"
              description="Identify slow learners for remedial teaching and capacity building for innovative methods.Solution:Students take a common test to determine their level of understanding. 
              The pupils are divided into three groups based on the assessment or test: slow learners, average learners, and brilliant learners. 
              To help people increase their existing knowledge, our model offers videos, audios, AI tutors, chat bots, and backlinks.This will help the students to improve form their current knowledge level. 
              "
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Social Media"
              description="This platform features a responsive interface built with Reactjs and CSS, allowing users to easily manage their profiles and posts through CRUD activities. The option to follow other users and interact with their posts (like or dislike) is also available, with suggestions for new users to follow. Users can only view posts from their followed users and can only engage in chat with those they follow. The backend is powered by Nodejs and Expressjs server, while MongoDB is utilized as the database."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="E‑Commerce Website"
              description="This ecommerce website utilizes a REST API built with Nodejs and Expressjs, allowing for easy CRUD operations on user profiles, products and admin panel. The user interface is designed for efficient product management and includes a complete purchase process. The admin panel, accessible for CRUD on users and products, includes a chart for statistics display. Stripe API is integrated to handle customer payments. The website uses MongoDB and Firebase as the database."
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
    
  )
}


export default Projects