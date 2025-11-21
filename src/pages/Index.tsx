import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import EnquiryModal from "@/components/EnquiryModal";
import Hero from "@/components/Hero";
import CompanyLogos from "@/components/CompanyLogos";
import Courses from "@/components/Courses";
import Trainer from "@/components/Trainer";
import Rewards from "@/components/Rewards";
import PlacedStudents from "@/components/PlacedStudents";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import ReviewSection from "@/components/ReviewSection";
import CareerTransformation from "@/components/CareerTransformation";

const Index = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsEnquiryOpen(true);
    }, 15000); // 15 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar onEnquiryClick={() => setIsEnquiryOpen(true)} />
      <Hero onEnquiryClick={() => setIsEnquiryOpen(true)} />
      <CompanyLogos />
      <Courses />
      <Trainer />
      <CareerTransformation />
      <PlacedStudents />
      <Rewards />
      <ReviewSection />
      <FAQs />
      <Footer onEnquiryClick={() => setIsEnquiryOpen(true)} />
      {/* <Footer/> */}
      <FloatingContact />
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />
    </div>
  );
};

export default Index;
