import { Col, Container, Row } from "react-bootstrap";
import image1 from "../../Images/image1.webp";

function WhyChooseSection() {
  return (
    <Container className="why-section my-4" data-aos="fade-up">
      <h2 className="text-center mb-4 why-section-title">Why Choose Us?</h2>
      <Row className="align-items-center">
        <Col
          md={6}
          sm={12}
          className="text-center order-1 order-md-1"
          data-aos="fade-right"
        >
          <img
            src={image1}
            alt="Care Services"
            className="img-fluid rounded shadow why-img"
            loading="lazy"
            decoding="async"
          />
        </Col>

        <Col md={6} sm={12} className="order-2 order-md-2" data-aos="fade-left">
          <div className="rightcol">
            <h2 className="why-inline-heading">Why Choose Us?</h2>
            <p>
              We provide compassionate and professional healthcare services
              tailored to meet your needs.
            </p>
            <ul>
              <li>Nursing & Personal Care</li>
              <li>Experienced Nurses & Physicians</li>
              <li>24/7 Service</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default WhyChooseSection;
