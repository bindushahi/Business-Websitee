import * as React from "react";
import "./App.css";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import HeroSection from "./components/HeroSection";
import Testimonials from "./components/Testimonials";
import InquiryForm from "./components/InquiryForm";
import Statistics from "./components/Statistics";
import AboutCompany from "./components/AboutCompany";
import NewsSection from "./components/NewsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel/>
      <Testimonials/>
      <Statistics/>
      <AboutCompany/>
      <NewsSection/>
      <InquiryForm/>
      <Footer/>
    </div>
  );
}

export default App;
