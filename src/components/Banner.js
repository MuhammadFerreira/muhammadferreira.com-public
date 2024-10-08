import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import cv from '../assets/CV/MuhammadFerreiraCV.pdf';
import headerShot from "../assets/img/header-shot.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Full Stack Developer", "Backend Software Engineer", "Web Application Developer" ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() *100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1): fullText.substring(0, text.length + 1)

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta/2)
        }

        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText ===''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <TrackVisibility> 
                    {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                            <span className="tagline">Welcome to my Portfolio</span>
                            <h1>{'Hi I\'m Muhammad Ferreira'}<span className="wrap"> {text}</span></h1>
                            <p>My name is Muhammad Ferreira. I am a dedicated software engineer with a strong focus on full stack and backend web application development. </p>
                            <p>With a passion for building efficient and scalable solutions, I bring a combination of technical expertise, problem-solving skills, and a drive to optimize workflows. I’m excited to apply my experience to tackle complex challenges and deliver impactful results.</p>
                            <a href={cv} download='MuhammadFerreiraCV'>
                                <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25}/></button>
                            </a>
                        </div>}
                    </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={headerShot} alt="Header Img" />
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}