import { FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

export const CONTACT_INFO = {
  address: "3, Trimurty society, Deopur, Dhule",
  phone: "+91 9373119075, +91 7058325196",
  email: "sharadaenterprises4405@gmail.com",
  workingHours: "Mon - Sat, 9:00 AM - 7:00 PM",
};

export const FOOTER_CONTACT_LINES = [
  { label: "Address", value: CONTACT_INFO.address, Icon: FiMapPin },
  { label: "Phone", value: CONTACT_INFO.phone, Icon: FiPhone },
  { label: "Email", value: CONTACT_INFO.email, Icon: FiMail },
];

export const CONTACT_PAGE_DETAILS = [
  { label: "Address", value: CONTACT_INFO.address, Icon: FiMapPin },
  { label: "Phone", value: CONTACT_INFO.phone, Icon: FiPhone },
  { label: "Email", value: CONTACT_INFO.email, Icon: FiMail },
  { label: "Working Hours", value: CONTACT_INFO.workingHours, Icon: FiClock },
];
