import { useState, useEffect } from "react";
import "../CSS/Home.css";
import backgroundImage from "../Images/seniorCare.webp";
import { Col, Container, Row, Card } from "react-bootstrap";
import image1 from "../Images/image1.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import EnquiryForm from "../Components/EnquiryForm";

const INITIAL_FORM_DATA = {
  name: "",
  contact: "",
  location: "",
  service: "",
};

const TEAM_MEMBERS = [
  {
    name: "Mr. Vaibhav Chavan",
    role: "Co-founder & Chief Medical Officer",
    image: require("../Images/user.jpeg"),
  },
  {
    name: "Dr. Chetana Jadhav",
    role: "Senior Physician",
    image: require("../Images/user.jpeg"),
  },
  {
    name: "Ms. Vaishanavi Kambri",
    role: "Head Nurse",
    image: require("../Images/user.jpeg"),
  },
  {
    name: "Mr. Pratik Ghorpade",
    role: "Head Care Coordinator",
    image: require("../Images/user.jpeg"),
  },
];

const REVIEWS = [
  {
    name: "Satish",
    text: "Amazing service! The nurses were so caring and professional.",
  },
  {
    name: "Umesh",
    text: "Highly recommend! Great doctors and excellent support team.",
  },
  {
    name: "Shital",
    text: "My family is very happy with the care provided here.",
  },
  { name: "Dhruvi", text: "Excellent healthcare at home. Very satisfied!" },
  { name: "Shruti", text: "Best elder care service we have ever experienced." },
];

const TEAM_SLIDER_SETTINGS = {
  infinite: true,
  autoplay: true,
  speed: 5000,
  autoplaySpeed: 0,
  cssEase: "linear",
  slidesToShow: 4,
  arrows: false,
  pauseOnHover: false,
  responsive: [
    { breakpoint: 992, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 576, settings: { slidesToShow: 1 } },
  ],
};

const REVIEW_SLIDER_SETTINGS = {
  infinite: true,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 5000,
  cssEase: "linear",
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  pauseOnHover: false,
  responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
};

const AOS_CONFIG = { duration: 1000, once: true };
const SCROLL_THRESHOLD = 100;

function Home() {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const [showForm, setShowForm] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  // Track viewport size to decide which form variant to show
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const updateIsMobile = () => setIsMobile(mediaQuery.matches);

    updateIsMobile();
    mediaQuery.addEventListener("change", updateIsMobile);
    return () => mediaQuery.removeEventListener("change", updateIsMobile);
  }, []);

  // Auto open enquiry form on mobile after initial load (per page load)
  useEffect(() => {
    if (!isMobile) return undefined;

    const timerId = setTimeout(() => {
      setShowForm(true);
    }, 2000);

    return () => clearTimeout(timerId);
  }, [isMobile]);

  const handleOpenForm = () => setShowForm(true);

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
          isMobile={isMobile}
        />
      </div>

      {/* ================= WHY CHOOSE US ================= */}
      <Container className="my-5" data-aos="fade-up">
        <Row className="align-items-center">
          <Col md={6} sm={12} className="text-center" data-aos="fade-right">
            <img
              src={image1}
              alt="Care Services"
              className="img-fluid rounded shadow"
            />
          </Col>

          <Col md={6} sm={12} data-aos="fade-left">
            <div className="rightcol">
              <h2>Why Choose Us?</h2>
              <p>
                We provide compassionate and professional healthcare services
                tailored to meet your needs.
              </p>
              <ul>
                <li>✔ Nursing & Personal Care</li>
                <li>✔ Experienced Nurses & Physicians</li>
                <li>✔ 24/7 Service</li>
              </ul>
              <button className="btn btn-primary mt-3" onClick={handleOpenForm}>
                Learn More
              </button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* ================= CEO SECTION ================= */}
      <Container className="my-5 ceo-section" data-aos="zoom-in">
        <Row className="align-items-center">
          <Col md={6} sm={12} className="text-center" data-aos="fade-right">
            <img
              src={require("../Images/shk1.jpg")}
              alt="Founder & CEO"
              className="img-fluid shadow rounded-3"
              style={{ maxWidth: "350px" }}
            />
          </Col>

          <Col md={6} sm={12} data-aos="fade-left">
            <div className="ceo-info">
              <h2>Meet Our Founder & CEO</h2>
              <p>
                <strong>Mr. Shashank Shinde</strong>, our visionary founder and
                CEO, established this organization with the mission of providing
                quality healthcare at home. With over 6 years of experience in
                the healthcare industry, <strong>Mr. Shashank </strong> has
                dedicated his life to improving elder care and patient
                well-being.
              </p>
              <p>
                Under his leadership, we have built a trusted team of
                professionals who are passionate about delivering compassionate,
                reliable, and personalized care.
              </p>
              <button className="btn btn-success mt-3" onClick={handleOpenForm}>
                Know More
              </button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* ================= TEAM CAROUSEL ================= */}
      <Container className="team-section my-5">
        <h2 className="text-center mb-4" data-aos="fade-up">
          Meet Our Team
        </h2>

        <Slider {...TEAM_SLIDER_SETTINGS}>
          {TEAM_MEMBERS.map((member) => (
            <div key={member.name} className="px-2">
              <Card className="team-card shadow-sm text-center">
                <Card.Img src={member.image} className="team-img" />
                <Card.Body>
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Text>{member.role}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>
      </Container>

      {/* ================= REVIEWS ================= */}
      <div className="reviews-section py-5" data-aos="fade-up">
        <Container>
          <h2 className="text-center mb-4">What Our Clients Say</h2>
          <Slider {...REVIEW_SLIDER_SETTINGS}>
            {REVIEWS.map((review) => (
              <div className="review-card" key={review.name}>
                <p>"{review.text}"</p>
                <h5>- {review.name}</h5>
              </div>
            ))}
          </Slider>
        </Container>
      </div>
    </>
  );
}

export default Home;
