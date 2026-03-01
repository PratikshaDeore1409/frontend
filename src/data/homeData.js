export const INITIAL_FORM_DATA = {
  name: "",
  contact: "",
  location: "",
  service: "",
};

export const TEAM_MEMBERS = [
  {
    name: "Mr. Vaibhav Chavan",
    role: "Co-founder & Chief Medical Officer",
  },
  {
    name: "Dr. Chetana Jadhav",
    role: "Senior Physician",
  },
  {
    name: "Ms. Vaishanavi Kambri",
    role: "Head Nurse",
  },
  {
    name: "Mr. Pratik Ghorpade",
    role: "Head Care Coordinator",
  },
];

export const REVIEWS = [
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

export const TEAM_SLIDER_SETTINGS = {
  infinite: false,
  autoplay: false,
  speed: 500,
  autoplaySpeed: 3000,
  cssEase: "ease",
  slidesToShow: 4,
  arrows: false,
  pauseOnHover: true,
  responsive: [
    { breakpoint: 992, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 576, settings: { slidesToShow: 1 } },
  ],
};

export const REVIEW_SLIDER_SETTINGS = {
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3200,
  speed: 700,
  cssEase: "linear",
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 768,
      settings: { slidesToShow: 1, autoplay: false, speed: 450 },
    },
  ],
};

export const AOS_CONFIG = { duration: 1000, once: true };
export const SCROLL_THRESHOLD = 100;
