function EnquiryForm({
  formData,
  handleChange,
  handleSubmit,
  showForm,
  setShowForm,
  isScrolled,
  isMobile,
}) {
  return (
    <>
      {/* Desktop Enquiry Form */}
      {!isMobile && (
        <div className="callback-form desktop-form" data-aos="fade-left">
          <h2>Enquiry Form</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="contact"
              placeholder="Contact Number"
              value={formData.contact}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="location"
              placeholder="Your Location"
              value={formData.location}
              onChange={handleChange}
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
          </form>
        </div>
      )}

      {/* Mobile Button */}
      {isMobile && (
        <div className={`mobile-form-button ${isScrolled ? "fixed" : ""}`}>
          <button onClick={() => setShowForm(true)}>Open Enquiry Form</button>
        </div>
      )}

      {/* Mobile Popup */}
      {showForm && (
        <div className="mobile-form-overlay" data-aos="zoom-in">
          <div className="callback-form">
            <h2>Enquiry Form</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="tel"
                name="contact"
                placeholder="Contact Number"
                value={formData.contact}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="location"
                placeholder="Your Location"
                value={formData.location}
                onChange={handleChange}
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
                className="close-btn"
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

export default EnquiryForm;
