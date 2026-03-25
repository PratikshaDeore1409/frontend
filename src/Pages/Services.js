import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../CSS/Home.css";
import "../CSS/Services.css";
import backgroundImage from "../Images/services.jpeg";

import nursingImg from "../Images/work1.jpg";
import postopImg from "../Images/work2.jpg";
import personalImg from "../Images/work3.jpg";
import geriatricImg from "../Images/work4.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

import EnquiryForm from "../Components/EnquiryForm";
import { openEnquiryForm } from "../utils/enquiry";

const INITIAL_FORM_DATA = {
  name: "",
  contact: "",
  location: "",
  service: "",
};

const SERVICES = [
  {
    title: "Nursing Care",
    img: nursingImg,
    desc: "Professional nursing services by trained staff, offering medical and emotional care at home for recovery and chronic illnesses.",
  },
  {
    title: "Post Operative Care",
    img: postopImg,
    desc: "Comprehensive post-surgery support including wound care, mobility assistance, and medication management for safe healing.",
  },
  {
    title: "Personal Care",
    img: personalImg,
    desc: "Assistance with daily hygiene, grooming, dressing, and basic personal needs with dignity and compassion.",
  },
  {
    title: "Geriatric Care",
    img: geriatricImg,
    desc: "Holistic elderly care focused on comfort, companionship, and routine health monitoring for senior citizens.",
  },
];

const AOS_CONFIG = { duration: 1000, once: true };

function Services() {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

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
    setFormData(INITIAL_FORM_DATA);
  };

  useEffect(() => {
    const shouldReduceMotion = window.matchMedia(
      "(max-width: 768px), (prefers-reduced-motion: reduce)"
    ).matches;

    AOS.init({
      ...AOS_CONFIG,
      duration: shouldReduceMotion ? 450 : AOS_CONFIG.duration,
      disable: shouldReduceMotion,
    });
  }, []);

  const handleSelectService = (serviceTitle) => {
    openEnquiryForm({
      serviceTitle,
      setDesktopFormData: setFormData,
    });
  };

  return (
    <>
      <div className="services-hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="services-hero-inner">
          <div className="home-text" data-aos="fade-right">
            <h1 className="custom-heading">Devoted to endless care</h1>
            <p className="my-2">Dedicated to safety</p>
          </div>

          <EnquiryForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>

      <section className="services-section">
        <Container>
          <h2 className="text-center mb-4 fw-bold" data-aos="fade-up">
            Our Services
          </h2>

          <div className="services-list">
            {SERVICES.map((service, index) => (
              <Row
                key={service.title}
                className="service-feature-row align-items-center g-3"
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <Col
                  lg={6}
                  md={12}
                  className={index % 2 === 0 ? "order-lg-1" : "order-lg-2"}
                >
                  <div className="service-feature-image-wrap">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="service-feature-image"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </Col>

                <Col
                  lg={6}
                  md={12}
                  className={index % 2 === 0 ? "order-lg-2" : "order-lg-1"}
                >
                  <div className="service-feature-content">
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                    <Button
                      variant="primary"
                      className="service-enquire-btn"
                      onClick={() => handleSelectService(service.title)}
                    >
                      Enquire Now
                    </Button>
                  </div>
                </Col>
              </Row>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

export default Services;
