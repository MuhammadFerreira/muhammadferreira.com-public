import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import datumIcon from "../assets/img/Datum-icon.png";
import covidexIcon from "../assets/img/Covidex-icon.png";
import BrainIcon from "../assets/img/Brain-icon.png";
import javaIcon from "../assets/img/java-icon.png";
import springIcon from "../assets/img/springBoot-icon.png";
import reactIcon from "../assets/img/react-icon.webp";
import jsIcon from "../assets/img/JavaScript-icon.png";
import nodeIcon from "../assets/img/nodejs-icon.png";
import pythonIcon from "../assets/img/Python-icon.png";
import jupyterIcon from "../assets/img/jupyter-icon.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "datum.io",
      demo: "https://datum-io.app/",
      srcCode: "https://github.com/MuhammadFerreira/datum.io-public",
      imgUrl: datumIcon,
    },
    {
      title: "covidex",
      demo: "https://covidex.live/",
      srcCode: "https://github.com/MuhammadFerreira/covidex-public",
      imgUrl: covidexIcon,
    },
    {
      title: "brain tumor image classifier",
      demo: "SOURCE CODE",
      srcCode: "srcCode:",
      imgUrl: BrainIcon,
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
                  <h2>Projects</h2>
                  <p>Explore some of my software development projects, each crafted with precision and dedication. These projects reflect my passion for building efficient, scalable web applications and my commitment to delivering impactful, high-quality solutions.</p>
                  <section class="py-[60px] overflow-hidden lg:py-[0px] md:py-[0px] sm:py-[0px] xs:py-[0px]">
                      <div class="container">
                          <div class="items-center row">
                              <div class="col-xl-5 col-lg-6 col-md-7 offset-lg-1">
                                  <div class="justify-center">
                                      <div class="atropos my-atropos ">
                                          <span>
                                              <img height with src={datumIcon}/>
                                          </span>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-xl-5 col-lg-6 col-md-7 offset-lg-1">
                                  <h5 class="mb-[4.5rem] text-align: left">datum.io</h5>
                                  <span>
                                  Developed as a Capstone project, this application incorporates gamification to enhance data collection in targeted research studies. Its flexibility makes it suitable for use in various fields, such as mental health research and product engagement analysis. <br></br><br></br>With a strong focus on user experience, it prioritizes ease of use and interaction, creating a seamless and engaging platform for users.
                                  </span>
                                  <div class="row-cols-5 row">
                                    <div class="col col-sm text-center sx:mb-[30px]">
                                    <img height with src={javaIcon}/>
                                    </div>
                                    <div class="col col-sm text-center sx:mb-[30px]">
                                    <img height with src={springIcon}/>
                                    </div>
                                    <div class="col col-sm text-center sx:mb-[30px]">
                                    <img height with src={reactIcon}/>
                                    </div>
                                    <div class="col col-sm text-center sx:mb-[30px]">
                                    <img height with src={jsIcon}/>
                                    </div>
                                    <div class="col col-sm text-center sx:mb-[30px]">
                                    <img height with src={nodeIcon}/>
                                    </div>
                                  </div>
                                  <section className="project">
                                    <a href="https://datum-io.app/" target="_blank">
                                      <button onClick={() => console.log('connect')}>DEMO <ArrowRightCircle size={25}/></button>
                                    </a>
                                    <a href="https://github.com/MuhammadFerreira/datum.io-public" target="_blank">
                                      <button onClick={() => console.log('connect')}>SOURCE CODE <ArrowRightCircle size={25}/></button>
                                    </a>
                                  </section>
                              </div>
                          </div>
                      </div>
                  </section>
                  <section class="py-[60px] overflow-hidden lg:py-[0px] md:py-[0px] sm:py-[0px] xs:py-[0px]">
                      <div class="container">
                          <div class="items-center row">
                              <div class="col-xl-5 col-lg-6 col-md-7 offset-lg-1">
                                  <div class="justify-center">
                                      <div class="atropos my-atropos ">
                                          <span>
                                              <img height with src={covidexIcon}/>
                                          </span>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-xl-5 col-lg-6 col-md-7 offset-lg-1">
                                  <h5 class="mb-[4.5rem] text-align: left">Covidex</h5>
                                  <span>
                                  Covidex is a robust Covid-19 tracking platform designed for a wide range of users, including patients, healthcare professionals, public health officials, and immigration authorities. The app aims to support pandemic management efforts and contribute to effective solutions. <br></br><br></br>Through the platform, patients can easily upload their health data, enabling doctors and health officials to track their condition and monitor the virus’s spread.
                                  </span>
                                  <div class="row-cols-5 row">
                                    <div class="col col-sm text-center sx:mb-[30px]">
                                    <img height with src={javaIcon}/>
                                    </div>
                                    <div class="col col-sm text-center sx:mb-[30px]">
                                    <img height with src={springIcon}/>
                                    </div>
                                    <div class="col col-sm text-center sx:mb-[30px]">
                                    <img height with src={jsIcon}/>
                                    </div>
                                    <div class="col col-sm text-center sx:mb-[30px]">
                                    <img height with src={nodeIcon}/>
                                    </div>
                                  </div>
                                  <section className="project">
                                    <a href="https://covidex.live/" target="_blank">
                                      <button onClick={() => console.log('connect')}>DEMO <ArrowRightCircle size={25}/></button>
                                    </a>
                                    <a href="https://github.com/MuhammadFerreira/covidex-public" target="_blank">
                                      <button onClick={() => console.log('connect')}>SOURCE CODE <ArrowRightCircle size={25}/></button>
                                    </a>
                                  </section>
                              </div>
                          </div>
                      </div>
                  </section>
                  <section class="py-[60px] overflow-hidden lg:py-[0px] md:py-[0px] sm:py-[0px] xs:py-[0px]">
                      <div class="container">
                          <div class="items-center row">
                              <div class="col-xl-5 col-lg-6 col-md-7 offset-lg-1">
                                  <div class="justify-center">
                                      <div class="atropos my-atropos ">
                                          <span>
                                              <img height with src={BrainIcon}/>
                                          </span>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-xl-5 col-lg-6 col-md-7 offset-lg-1">
                                  <h5 class="mb-[4.5rem] text-align: left">Brain Tumor Image Classifier</h5>
                                  <span>
                                  This project explores the effectiveness of several popular deep learning models—VGG-19, ResNet50, InceptionV3, MobileNetV2, and DenseNet201—for brain tumor classification using MRI images. By fine-tuning these pre-trained models on the Brain Tumor MRI Images dataset, we aim to improve the accuracy and efficiency of medical image analysis. <br></br><br></br>The models are evaluated using key performance metrics, including accuracy, precision, recall, and F1-score. Notably, VGG-19 achieved the highest accuracy of 92%, highlighting the potential of these models in advancing brain tumor detection and diagnosis.
                                  </span>
                                  <div class="row-cols-5 row">
                                    <div class="col col-sm text-center sx:mb-[30px]">
                                    <img height with src={pythonIcon}/>
                                    </div>
                                    <div class="col col-sm text-center sx:mb-[30px]">
                                    <img height with src={jupyterIcon}/>
                                    </div>
                                  </div>
                                  <section className="project">
                                    <a href="https://github.com/MuhammadFerreira/Brain-Tumor-Image-Classifier" target="_blank">
                                      <button onClick={() => console.log('connect')}>SOURCE CODE <ArrowRightCircle size={25}/></button>
                                    </a>
                                  </section>
                              </div>
                          </div>
                      </div>
                  </section>
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
