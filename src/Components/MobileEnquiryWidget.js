import { useEffect, useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import "../CSS/MobileEnquiryWidget.css";
import { MOBILE_ENQUIRY_EVENT, MOBILE_QUERY } from "../utils/enquiry";

const INITIAL_FORM_DATA = {
  name: "",
  contact: "",
  location: "",
  service: "",
};

const SCROLL_THRESHOLD = 100;

function MobileEnquiryWidget() {
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_QUERY);
    const updateIsMobile = () => setIsMobile(mediaQuery.matches);

    updateIsMobile();
    mediaQuery.addEventListener("change", updateIsMobile);
    return () => mediaQuery.removeEventListener("change", updateIsMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobile) setShowForm(false);
  }, [isMobile]);

  useEffect(() => {
    const handleOpenRequest = (event) => {
      if (!window.matchMedia(MOBILE_QUERY).matches) return;

      const requestedService = event?.detail?.service;
      if (requestedService) {
        setFormData((prev) => ({ ...prev, service: requestedService }));
      }

      setShowForm(true);
    };

    window.addEventListener(MOBILE_ENQUIRY_EVENT, handleOpenRequest);
    return () => {
      window.removeEventListener(MOBILE_ENQUIRY_EVENT, handleOpenRequest);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Mobile enquiry submitted:", formData);
    alert("Enquiry submitted successfully!");
    setFormData(INITIAL_FORM_DATA);
    setShowForm(false);
  };

  if (!isMobile) return null;

  return (
    <>
      {isScrolled && !showForm && (
        <div className="mobile-enquiry-button">
          <button
            type="button"
            onClick={() => setShowForm(true)}
            aria-label="Open enquiry form"
          >
            <FiPhoneCall />
          </button>
        </div>
      )}

      {showForm && (
        <div className="mobile-enquiry-overlay">
          <div className="mobile-enquiry-form">
            <h2>Enquiry Form</h2>
            <p className="mobile-enquiry-note">
              Services available in Nashik and Dhule city.
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                required
              />

              <input
                type="tel"
                name="contact"
                placeholder="Contact Number"
                value={formData.contact}
                onChange={handleChange}
                inputMode="tel"
                autoComplete="tel"
                pattern="[0-9+\\s-]{8,20}"
                required
              />

              <input
                type="text"
                name="location"
                placeholder="Your Location"
                value={formData.location}
                onChange={handleChange}
                autoComplete="address-level2"
                required
              />

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select Medical Service</option>
                <option value="Nursing Care">Nursing Care</option>
                <option value="Physician Consultation">
                  Physician Consultation
                </option>
                <option value="Laboratory Services">Laboratory Services</option>
                <option value="Post-operative Care">Post-operative Care</option>
                <option value="Personal Care">Personal Care</option>
              </select>

              <button type="submit">Submit Enquiry</button>
              <button
                type="button"
                className="mobile-enquiry-close"
                onClick={() => setShowForm(false)}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default MobileEnquiryWidget;
