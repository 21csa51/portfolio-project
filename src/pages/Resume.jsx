import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";

import resumeImage from "../assets/resume.jpg"; // Import your resume image file
import Particle from '../components/Particle';

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={resumeImage} // Use the resume image as the href
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
        
        <Row className="resume" style={{ justifyContent: "center" }}>
          <img src={resumeImage} alt="Resume" style={{ maxWidth: "80%" }} /> {/* Display the resume image */}
        </Row>
      </Container>
    </div>
  );
};

export default Resume;
