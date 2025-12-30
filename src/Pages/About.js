import React, { useState, useEffect } from "react";
import "../CSS/Home.css";
import backgroundImage from "../Images/about.webp";
import { Col, Container, Row } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

import EnquiryForm from "../Components/EnquiryForm";

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
const SCROLL_THRESHOLD = 100;

function About() {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

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
    setFormData(INITIAL_FORM_DATA);
    setShowForm(false);
  };

  // ✅ AOS + scroll detection
  useEffect(() => {
    AOS.init(AOS_CONFIG);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenForm = () => setShowForm(true);

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <div
        className="home-container"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="home-text" data-aos="fade-right">
          <h1>Best Service At Home</h1>
          <p>Better manage the well-being of elders</p>
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

      {/* ================= CEO SECTION ================= */}
      <Container className="my-5 ceo-section" data-aos="zoom-in">
        <Row className="align-items-center">
          <Col md={6} sm={12} className="text-center" data-aos="fade-right">
            <img
              src={require("../Images/shk.jpg")}
              alt="Founder & CEO"
              className="img-fluid rounded-circle shadow"
              style={{ maxWidth: "350px" }}
            />
          </Col>

          <Col md={6} sm={12} data-aos="fade-left">
            <div className="ceo-info">
              <h2>Our Founder & CEO</h2>
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

      {/* ================= OUR WORK SECTION ================= */}
      <Container className="my-5">
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
              className="mb-4"
              key={img.file}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <img
                src={require(`../Images/${img.file}`)}
                alt={img.alt}
                className="img-fluid rounded shadow"
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                }}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default About;
