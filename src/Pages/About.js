import React, { useEffect, useState } from "react";
import "../CSS/Home.css";
import backgroundImage from "../Images/about.webp";
import { Col, Container, Row } from "react-bootstrap";
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

const WORK_IMAGES = [
  { file: "work1.jpg", alt: "Our Work 1" },
  { file: "work2.jpg", alt: "Our Work 2" },
  { file: "work3.jpg", alt: "Our Work 3" },
  { file: "work4.jpg", alt: "Our Work 4" },
  { file: "work5.jpg", alt: "Our Work 5" },
  { file: "work6.jpg", alt: "Our Work 6" },
];

const AOS_CONFIG = { duration: 1000, once: true };

function About() {
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

  const handleOpenForm = () =>
    openEnquiryForm({ setDesktopFormData: setFormData });

  return (
    <>
      <div
        className="home-container"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="home-text" data-aos="fade-right">
          <h1>Best Service At Home</h1>
          <p>Better manage the well-being of elders</p>
          <p className="hero-service-note">
            Services available in Nashik and Dhule.
          </p>
        </div>

        <EnquiryForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>

      <Container className="my-5 ceo-section" data-aos="zoom-in">
        <h2 className="text-center mb-4 ceo-section-title">Our Founder & CEO</h2>
        <Row className="align-items-center">
          <Col
            md={6}
            sm={12}
            className="d-flex justify-content-center text-center order-1 order-md-1"
            data-aos="fade-right"
          >
            <div className="ceo-photo-frame">
              <img
                src={require("../Images/shk.jpg")}
                alt="Founder & CEO"
                className="img-fluid rounded-3 shadow ceo-photo"
                loading="lazy"
                decoding="async"
              />
            </div>
          </Col>

          <Col md={6} sm={12} className="order-2 order-md-2" data-aos="fade-left">
            <div className="ceo-info">
              <h2 className="ceo-inline-heading">Our Founder & CEO</h2>
              <p>
                <strong>Mr. Shashank Shinde</strong>, our visionary founder and
                CEO, established this organization with the mission of providing
                quality healthcare at home. With over 6 years of experience, he
                has dedicated his career to improving elder care and patient
                well-being.
              </p>
              <p>
                Under his leadership, we have built a trusted team of
                professionals delivering compassionate, reliable, and
                personalized care.
              </p>
              <button
                className="btn btn-success mt-3"
                onClick={handleOpenForm}
              >
                Know More
              </button>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="my-5 our-work">
        <h2
          className="text-center mb-4"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          Our Work
        </h2>

        <Row>
          {WORK_IMAGES.map((img, index) => (
            <Col
              md={4}
              sm={6}
              xs={12}
              className="mb-4 work-item-col"
              key={img.file}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <img
                src={require(`../Images/${img.file}`)}
                alt={img.alt}
                className="img-fluid rounded shadow work-img"
                loading="lazy"
                decoding="async"
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default About;
