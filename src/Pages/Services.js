import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../CSS/Services.css";
import backgroundImage from "../Images/services.jpeg";

import nursingImg from "../Images/work1.jpg";
import postopImg from "../Images/work3.jpg";
import personalImg from "../Images/work4.jpg";
import geriatricImg from "../Images/work5.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

// ✅ Reusable Enquiry Form
import EnquiryForm from "../Components/EnquiryForm";

function Services() {
  const services = [
    {
      title: "Nursing Care",
      img: nursingImg,
      desc:
        "Professional nursing services by trained staff, offering medical and emotional care at home for recovery and chronic illnesses.",
    },
    {
      title: "Post Operative Care",
      img: postopImg,
      desc:
        "Comprehensive post-surgery support including wound care, mobility assistance, and medication management for safe healing.",
    },
    {
      title: "Personal Care",
      img: personalImg,
      desc:
        "Assistance with daily hygiene, grooming, dressing, and basic personal needs with dignity and compassion.",
    },
    {
      title: "Geriatric Care",
      img: geriatricImg,
      desc:
        "Holistic elderly care focused on comfort, companionship, and routine health monitoring for senior citizens.",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    location: "",
    service: "",
  });

  const [showForm, setShowForm] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Enquiry submitted successfully!");
    setShowForm(false);
  };

  // ✅ AOS + Scroll Logic
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <div
        className="home-container"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="home-text" data-aos="fade-right">
          <h1 className="custom-heading">Devoted to endless care</h1>
          <p className="my-2">Dedicated to safety</p>
        </div>

        {/* ✅ Reusable Enquiry Form */}
        <EnquiryForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          showForm={showForm}
          setShowForm={setShowForm}
          isScrolled={isScrolled}
        />
      </div>

      {/* ================= SERVICES SECTION ================= */}
      <section className="services-section py-5">
        <Container>
          <h2
            className="text-center mb-4 fw-bold text-primary"
            data-aos="fade-up"
          >
            Our Services
          </h2>

          <Row className="g-4">
            {services.map((service, index) => (
              <Col
                key={index}
                md={6}
                lg={3}
                sm={12}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <Card className="service-card shadow h-100 text-center border-0">
                  <Card.Img
                    variant="top"
                    src={service.img}
                    alt={service.title}
                    className="img-fluid service-img"
                  />
                  <Card.Body>
                    <Card.Title className="fw-semibold">
                      {service.title}
                    </Card.Title>
                    <Card.Text className="text-secondary small">
                      {service.desc}
                    </Card.Text>
                    <Button
                      variant="primary"
                      className="w-100"
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          service: service.title,
                        }));
                        setShowForm(true);
                      }}
                    >
                      Enquire Now
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Services;
