import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import previewer from "../../Assets/Projects/markdownPreviewer.png";
import quoteApp from "../../Assets/Projects/quoteApp.png";
import jsPractise from "../../Assets/Projects/jsPractise.png";
import pomodoro from "../../Assets/Projects/pomodoro.png";
import drumMachine from "../../Assets/Projects/drumMachine.png";
import calculator from "../../Assets/Projects/calculator.png";
import { Prev } from "react-bootstrap/esm/PageItem";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pomodoro}
              isBlog={false}
              title="Pomodoro Clock"
              description="Pomodoro is a learning technique. Set your timer for 25 minutes, and focus on a single task until the timer rings. When your session ends, then enjoy a five-minute break. This project is accomplished with React, Js and simples Css. One is also able to change timing of session/break according to their learning preferences."
              ghLink="https://github.com/Kvirike/pomodoro-clock?tab=readme-ov-file"
              demoLink="https://kvirike.github.io/pomodoro-clock/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="JS Calculator"
              description="It’s a simple calculator made with React, Js and Css. The calculator can handle numeric input, perform basic arithmetic calculations, and display the results accordingly. Users can clear the display, clear the last element entered, and perform multiple calculations sequentially."
              ghLink="https://github.com/Kvirike/js-calculator?tab=readme-ov-file"
              demoLink="https://kvirike.github.io/js-calculator/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={previewer}
              isBlog={false}
              title="Markdown Prewiever"
              description="This markdown previewer is a HTML to -text conversion tool. It allows you to write HTML syntaxed script and gives you a plain text format. Thing is to give it correct cormat of HTML that is structurally valid. On the left side is the editor and on the right is the previewer. Simple HTML and basics of Js is used on this project."
              ghLink="https://github.com/Kvirike/Markdown-previewer?tab=readme-ov-file"
              demoLink="https://kvirike.github.io/Markdown-previewer/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jsPractise}
              isBlog={false}
              title="JS Practise"
              description="test"
              ghLink="https://github.com/Kvirike/practice-Js"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drumMachine}
              isBlog={false}
              title="Drum Machine"
              description="test"
              ghLink="https://github.com/Kvirike/Drum-Machine"
              demoLink="https://kvirike.github.io/Drum-Machine/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quoteApp}
              isBlog={false}
              title="Random Quote Machine"
              description="test"
              ghLink="https://github.com/Kvirike/Random-Quote-machine"
              demoLink="https://kvirike.github.io/Random-Quote-machine/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
