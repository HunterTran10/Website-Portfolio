import { Container, Row, Col } from "react-bootstrap";

export const Skills = () => {
  const skills = [
    { name: "React" },
    { name: "JavaScript" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "C++" },
    { name: "SQL" },
    { name: "Git" },
  ];

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>Technologies and tools I work with.</p>
              <Row className="mt-5 justify-content-center">
                {skills.map((skill, index) => (
                  <Col key={index} xs={4} sm={3} md={2} className="text-center mb-4">
                    <div className="skill-item">
                      <h5>{skill.name}</h5>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};