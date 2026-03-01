function EnquiryForm({
  formData,
  handleChange,
  handleSubmit,
}) {
  return (
    <div className="callback-form desktop-form" data-aos="fade-left">
      <h2>Enquiry Form</h2>
      <p className="enquiry-service-note">
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
          <option value="Physician Consultation">Physician Consultation</option>
          <option value="Laboratory Services">Laboratory Services</option>
          <option value="Post-operative Care">Post-operative Care</option>
          <option value="Personal Care">Personal Care</option>
        </select>

        <button type="submit">Submit Enquiry</button>
      </form>
    </div>
  );
}

export default EnquiryForm;
