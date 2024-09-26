import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import javaIcon from '../assets/img/java-icon.png';
import pythonIcon from '../assets/img/Python-icon.png';
import reactIcon from '../assets/img/react-icon.webp';
import cSharpIcon from '../assets/img/c-sharp-icon.png';
import cPPIcon from '../assets/img/C++-icon.png';
import jsIcon from '../assets/img/JavaScript-icon.png';
import gitIcon from '../assets/img/Git-Icon.png';
import nodeIcon from '../assets/img/nodejs-icon.png';
import springBootIcon from '../assets/img/springBoot-icon.png';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
      const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
      };
      return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>I have a diverse technical skill set, including expertise in multiple programming languages like Java, Python, and JavaScript, as well as frameworks such as React, Node.js, and Spring Boot. I’m experienced with a wide range of tools and technologies, from cloud platforms like AWS to database management and API development, enabling me to build robust, scalable solutions across the full stack.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={javaIcon} alt ="Image" />
                                </div>
                                <div className="item">
                                    <img src={pythonIcon} alt ="Image" />
                                </div>
                                <div className="item">
                                    <img src={reactIcon} alt ="Image" />
                                </div>
                                <div className="item">
                                    <img src={cSharpIcon} alt ="Image" />
                                </div>
                                <div className="item">
                                    <img src={cPPIcon} alt ="Image" />
                                </div>
                                <div className="item">
                                    <img src={jsIcon} alt ="Image" />
                                </div>
                                <div className="item">
                                    <img src={gitIcon} alt ="Image" />
                                </div>
                                <div className="item">
                                    <img src={nodeIcon} alt ="Image" />
                                </div>
                                <div className="item">
                                    <img src={springBootIcon} alt ="Image" />
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
         </section>
      )
}