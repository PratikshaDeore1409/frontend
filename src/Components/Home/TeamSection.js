import { Card, Col, Container, Row } from "react-bootstrap";
import { TEAM_MEMBERS } from "../../data/homeData";

function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || "")
    .join("");
}

function TeamSection() {
  return (
    <Container className="team-section my-5">
      <h2 className="text-center mb-4" data-aos="fade-up">
        Meet Our Team
      </h2>

      <Row className="g-3 justify-content-center">
        {TEAM_MEMBERS.map((member) => (
          <Col key={member.name} xs={12} sm={6} lg={3} className="d-flex">
            <Card className="team-card shadow-sm text-center">
              <div className="team-avatar-wrap">
                <div className="team-avatar" aria-hidden="true">
                  <svg
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                    className="team-avatar-icon"
                  >
                    <circle cx="32" cy="32" r="30" />
                    <circle cx="32" cy="24" r="11" />
                    <path d="M14 50c3-9 11-14 18-14s15 5 18 14" />
                  </svg>
                  <span className="team-avatar-initials">
                    {getInitials(member.name)}
                  </span>
                </div>
              </div>
              <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <Card.Text>{member.role}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default TeamSection;
