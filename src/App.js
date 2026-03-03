import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import WebNavbar from "./Pages/WebNavbar";
import Footer from "./Pages/Footer";

import ScrollToTop from "./Components/ScrollToTop";
import MobileEnquiryWidget from "./Components/MobileEnquiryWidget";
import PageLoader from "./Components/PageLoader";

const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Contact = lazy(() => import("./Pages/Contact"));
const Services = lazy(() => import("./Pages/Services"));

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <WebNavbar />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
            <Route path="/services" element={<Services />} />
          </Routes>
        </Suspense>
        <MobileEnquiryWidget />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
