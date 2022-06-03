import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
import docty_app from "../../Assets/Projects/docty.png";
import fininza from "../../Assets/Projects/fininza.png";
import brillica_services from "../../Assets/Projects/brillica-services.png";
import connected_classrooms from "../../Assets/Projects/connected-classrooms.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
// import editor from "../../Assets/Projects/codeEditor.png";
import efaarms_mobile_app from "../../Assets/Projects/efaarms-mobile-app.png";
// import chatify from "../../Assets/Projects/chatify.png";
import efaarms_website from "../../Assets/Projects/efaarms.png";
import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";
import efaarms_logistics_website from "../../Assets/Projects/efaarms-logistics.png";

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
              imgPath={efaarms_website}
              isBlog={false}
              title="EFaarms E-Commerce"
              description="E-Commerce platform for agricultural products with a vision in mind to empower farmers with the required tools at the required times in farming."
              link="https://faarms.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={efaarms_logistics_website}
              isBlog={false}
              title="EFaarms Logistics"
              description="Logistics website for E-Faarms which takes into consideration the first-mile and last-mile deliveries."
              link="http://faarmsglobal.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={efaarms_mobile_app}
              isBlog={false}
              title="EFaarms Mobile App"
              description="Search and buy agri products through mobile. EFaarms."
              link="https://play.google.com/store/apps/details?id=com.faarms"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={docty_app}
              isBlog={false}
              title="Docty.AI"
              description="Online Doctor Consultation for you and your family members."
              link="https://play.google.com/store/apps/details?id=ai.doctyindia.patient"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fininza}
              isBlog={false}
              title="Fininza.AI"
              description="A fintech project of Agriwise for lending money to customers based on their past 3 years Balance Sheet, Income Tax Return."
              link="http://fininza.in"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={brillica_services}
              isBlog={false}
              title="Brillica Services"
              description="Served as Android, Data Science Consultant."
              link="https://www.brillicaservices.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={connected_classrooms}
              isBlog={false}
              title="Connected Classrooms"
              description="Served as Capacity Building Associate and Associate Android Developer."
              link="https://play.google.com/store/apps/details?id=com.connectedClassrooms.edu&hl=en_IN"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
