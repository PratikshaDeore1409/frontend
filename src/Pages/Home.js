import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../CSS/Home.css";
import HeroSection from "../Components/Home/HeroSection";
import WhyChooseSection from "../Components/Home/WhyChooseSection";
import CeoSection from "../Components/Home/CeoSection";
import TeamSection from "../Components/Home/TeamSection";
import ReviewsSection from "../Components/Home/ReviewsSection";
import { AOS_CONFIG, INITIAL_FORM_DATA } from "../data/homeData";
import { openEnquiryForm } from "../utils/enquiry";

function Home() {
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

  const handleOpenForm = () => {
    openEnquiryForm({ setDesktopFormData: setFormData });
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

  return (
    <>
      <HeroSection
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <WhyChooseSection />
      <CeoSection onOpenForm={handleOpenForm} />
      <TeamSection />
      <ReviewsSection />
    </>
  );
}

export default Home;
