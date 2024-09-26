import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, demo, srcCode, imgUrl }) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <button class="btn btn-success" onclick="window.opne({demo/})"> DEMO</button>
                    <button class="btn btn-success" onclick={srcCode}> SOURCE CODE</button>
                </div>
            </div>
        </Col>
    )
}