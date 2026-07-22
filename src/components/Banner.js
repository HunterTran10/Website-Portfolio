import { Col, Container, Row } from "react-bootstrap";
import webDevImg from "../assets/img/web-dev-img.svg";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <h1>Hunter Tran</h1>
            <h2>Frontend Developer</h2>
            <p>
              Recent CS graduate from Cal State Fullerton. I enjoy building things like cart/checkout flows, form validation systems, and clean, 
              component based UIs with React.
            </p>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={webDevImg} alt="Web Development Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};