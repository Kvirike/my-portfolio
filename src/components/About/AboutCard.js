import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kvirike Kemularia </span>
            from <span className="purple"> Tbilisi, Georgia.</span>
            <br />
            I am not currently employed as a software developer
            <br />
            and looking for an opportunity to start my Tech Journey.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Fitness
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Whatever it takes!"{" "}
          </p>
          <footer className="blockquote-footer">Kvirike</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
