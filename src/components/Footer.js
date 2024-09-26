import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/logo-img.png';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import gitHubIcon from '../assets/img/Github-icon.webp';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/muhammad-ferreira/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/MuhammadFerreira" target="_blank"><img src={gitHubIcon} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}