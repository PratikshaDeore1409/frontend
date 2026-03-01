import { Col, Container, Row } from "react-bootstrap";
import ceoImage from "../../Images/shk1.jpg";

function CeoSection({ onOpenForm }) {
  return (
    <Container className="my-5 ceo-section" data-aos="zoom-in">
      <h2 className="text-center mb-4 ceo-section-title">Meet Our Founder & CEO</h2>
      <Row className="align-items-center">
        <Col
          md={6}
          sm={12}
          className="text-center order-1 order-md-1"
          data-aos="fade-right"
        >
          <img
            src={ceoImage}
            alt="Founder & CEO"
            className="img-fluid shadow rounded-3"
            loading="lazy"
            decoding="async"
            style={{ maxWidth: "350px", margin: "0 auto", display: "block" }}
          />
        </Col>

        <Col
          md={6}
          sm={12}
          className="mt-4 mt-md-0 order-2 order-md-2"
          data-aos="fade-left"
        >
          <div className="ceo-info">
            <h2 className="ceo-inline-heading">Meet Our Founder & CEO</h2>
            <p>
              <strong>Mr. Shashank Shinde</strong>, our visionary founder and
              CEO, established this organization with the mission of providing
              quality healthcare at home. With over 6 years of experience in
              the healthcare industry, <strong>Mr. Shashank </strong> has
              dedicated his life to improving elder care and patient well-being.
            </p>
            <p>
              Under his leadership, we have built a trusted team of
              professionals who are passionate about delivering compassionate,
              reliable, and personalized care.
            </p>
            <button
              className="btn btn-success mt-3"
              onClick={() => onOpenForm?.()}
            >
              Know More
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default CeoSection;
