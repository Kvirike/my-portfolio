import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
// import pdf from "../../Assets/../Assets/kvirikeCV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf"; 
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative", padding:"5em 5% 4em 5%"}}>
          <h5 style={{padding: "20px 40px 30px 40px" }} className="aboutMe">Hi I am <strong className="purple">Kvirike Kemularia.</strong> In late 2022 I made a bold decision to shift from a legal career to the tech. Fueled by a desire for a fresh challenge, the transition began with intensive  research generally about the perspectives in tech. As a beginner I chose to learn front-end developement, since it seemed relatively easy to pick up on. I started from the basics of Html, Css, and JavaScript. The journey involved understanding how all of this worked and practicing writing code by myself. After a while of self-learning I had a strong feeling of lacking the deep knowledge in some of the areas wich I had already covered, so I found FreeCodeCamp academy which is a free public source to learn different technologies. So I finished Js and Fron-end Framework courses and did all the projects which were provided in the end of each one. During this journey I covered basics of  <strong className="purple">Html, Css/Sass/Scss, Bootstrap, Js, React, jQuery and Redux.</strong> As of now, armed with my growing portfolio, I am actively seeking opportunities to contribute to front-end development teams. My legal background, with its analytical prowess is seamlessly blended with the problem-solving and creative demands of coding. This career switch signifies not just a change in profession, but a commitment to continuous learning and adaptability in the dynamic tech landscape. <br/>For more information about me click on the button bellow.
          </h5>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            className="cvBtn"
            variant="primary"
            // href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
