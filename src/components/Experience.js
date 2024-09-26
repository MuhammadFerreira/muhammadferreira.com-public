import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ExperienceCard } from "./ExperienceCard";
import rangerIcon from "../assets/img/Ranger-Design-icon.png";
import lockheedIcon from "../assets/img/LockheedMartin-icon.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import colorSharp3 from "../assets/img/color-sharp3.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Experience = () => {

  const experiences = [
    {
      title: "Software Engineer Intern",
      description: "Developed and maintained robust web solutions, emphasizing backend efficiency and scalability, while integrating new features to improve user experience for a leading provider of vehicle storage solutions.",
      imgUrl: rangerIcon,
    },
    {
      title: "Embedded Engineer Intern",
      description: "Leveraged expertise in full stack and backend development to build and enhance web applications, focusing on automating processes and optimizing workflows for large-scale defense systems.",
      imgUrl: lockheedIcon,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
          <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <div>
                  <h2>Experiences</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            experiences.map((experience, index) => {
                              return (
                                <ExperienceCard
                                  key={index}
                                  {...experience}
                                  />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
                <img className="background-image-right" src={colorSharp2}></img>
              </div>}
              </TrackVisibility>
          </Col>
        </Row>
      </Container>
      
    </section>
  )
}