import React, { useState, useEffect } from "react";
import backgroundImage from "../Images/contact.webp";
import "../CSS/Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Col, Container, Row } from "react-bootstrap";

// ✅ Reusable Enquiry Form
import EnquiryForm from "../Components/EnquiryForm";

function Contact() {
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
        className="contact-container"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="contact-text" data-aos="fade-right">
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

      {/* ================= CONTACT INFO SECTION ================= */}
      <Container className="my-5 contact-section">
        <Row className="align-items-center p-5">
          {/* Left: Contact Details */}
          <Col md={6} sm={12} data-aos="fade-up">
            <h2>Contact Information</h2>
            <p><strong>📍 Address:</strong> 123, MG Road, Pune, Maharashtra, India</p>
            <p><strong>📞 Phone:</strong> +91 98765 43210</p>
            <p><strong>✉️ Email:</strong> info@yourcompany.com</p>
            <p><strong>🕒 Working Hours:</strong> Mon - Sat, 9:00 AM - 7:00 PM</p>
          </Col>

          {/* Right: Logo */}
          <Col md={6} sm={12} className="text-center" data-aos="zoom-in">
            <img
              src={require("../Images/logo.png")}
              alt="Our Service Logo"
              className="img-fluid"
              style={{ maxWidth: "300px" }}
            />
          </Col>
        </Row>

        {/* ================= SOCIAL LINKS ================= */}
        <Row className="mt-4">
          <Col className="text-center" data-aos="fade-up">
            <h2>Connect with Us</h2>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>{" "}
            |{" "}
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              Twitter
            </a>{" "}
            |{" "}
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
