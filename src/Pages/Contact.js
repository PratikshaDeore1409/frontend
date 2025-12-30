import React, { useState, useEffect } from "react";
import backgroundImage from "../Images/contact.webp";
import "../CSS/Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Col, Container, Row } from "react-bootstrap";
import EnquiryForm from "../Components/EnquiryForm";

const INITIAL_FORM_DATA = {
  name: "",
  contact: "",
  location: "",
  service: "",
};

const CONTACT_DETAILS = [
  {
    label: "Address",
    value: "123, MG Road, Pune, Maharashtra, India",
    icon: "📍",
  },
  { label: "Phone", value: "+91 98765 43210", icon: "📞" },
  { label: "Email", value: "info@yourcompany.com", icon: "✉️" },
  { label: "Working Hours", value: "Mon - Sat, 9:00 AM - 7:00 PM", icon: "🕒" },
];

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Twitter", href: "https://twitter.com" },
  { label: "Instagram", href: "https://instagram.com" },
];

const AOS_CONFIG = { duration: 1000, once: true };
const SCROLL_THRESHOLD = 100;

function Contact() {
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

  // ✅ AOS + Scroll Logic
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
            {CONTACT_DETAILS.map((item) => (
              <p key={item.label}>
                <strong>
                  {item.icon} {item.label}:
                </strong>{" "}
                {item.value}
              </p>
            ))}
            <button className="btn btn-success mt-3" onClick={handleOpenForm}>
              Enquire Now
            </button>
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
            {SOCIAL_LINKS.map((link, index) => (
              <React.Fragment key={link.label}>
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
                {index < SOCIAL_LINKS.length - 1 && " | "}
              </React.Fragment>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
