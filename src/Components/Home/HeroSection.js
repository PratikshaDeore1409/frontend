import backgroundImage from "../../Images/seniorCare.webp";
import EnquiryForm from "../EnquiryForm";

function HeroSection({
  formData,
  handleChange,
  handleSubmit,
}) {
  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
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
  );
}

export default HeroSection;
