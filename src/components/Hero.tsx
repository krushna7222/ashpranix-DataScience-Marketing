import React, { useState } from "react";
import { Code, Award, Layers } from "lucide-react";
import { LuDownload } from "react-icons/lu";
import { useToast } from "@/hooks/use-toast";
import SyllabusFormModal from "./SyllabusFormModal";
import { Button } from "./ui/button";
interface FormState {
  name: string;
  email: string;
  phone: string;
  city: string;
  course?: string;
}

interface ErrorState {
  name?: string;
  email?: string;
  phone?: string;
  city?: string;
  course?: string;
}

interface HeroProps {
  onEnquiryClick: () => void;
}

const heroData = {
  description: [
    "Master Python, Pandas, NumPy & data visualization.",
    "Learn Machine Learning, AI & real-world model training.",
    "Work on Deep Learning with TensorFlow & Keras.",
    "Build dashboards using Power BI & deploy ML models.",
  ],

  highlights: [
    {
      icon: <Code className="text-primary w-5 h-5 mb-1" />,
      text: "AI & ML",
    },
    {
      icon: <Layers className="text-primary w-5 h-5 mb-1" />,
      text: "Real Projects",
    },
    {
      icon: <Award className="text-primary w-5 h-5 mb-1" />,
      text: "Certification",
    },
  ],
};

const Hero = ({ onEnquiryClick }: HeroProps) => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    city: "",
    course: "Data Science",
  });

  const [showSyllabusModal, setShowSyllabusModal] = useState(false);
  const { toast } = useToast();
  const [errors, setErrors] = useState<ErrorState>({});

  return (
    <section id="home" className="-mt-10">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap');

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }
      `}</style>

      <div
        className="min-h-screen overflow-hidden relative"
        style={{
          background: "linear-gradient(to bottom right, #ffffff, #f3f4f6)",
          fontFamily: "Inter, sans-serif",
        }}
      >
        {/* Floating Background Circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/4 left-1/4 w-52 h-52 sm:w-72 sm:h-72 rounded-full opacity-20 blur-3xl"
            style={{
              background: "#a5b4fc",
              animation: "float 7s ease-in-out infinite",
            }}
          />
          <div
            className="absolute top-2/3 right-1/4 w-56 h-56 sm:w-80 sm:h-80 rounded-full opacity-20 blur-3xl"
            style={{
              background: "#fca5a5",
              animation: "float 7s ease-in-out infinite",
              animationDelay: "1.5s",
            }}
          />
        </div>

        {/* HERO SECTION */}
        <section className="relative z-10 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start lg:items-center">
            {/* LEFT TEXT CONTENT */}
            <div className="space-y-6 sm:space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-100/40 border border-indigo-300/50 text-indigo-700 shadow-md backdrop-blur-sm">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                </span>

                <span className="font-semibold text-green-600 tracking-wide">
                  100% Placement Assistance
                </span>
              </div>

              {/* Title */}
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
                style={{ fontFamily: "Poppins, sans-serif", color: "#111827" }}
              >
                Become a
                <span
                  className="bg-clip-text ml-3 text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #4f46e5, #ef4444)",
                  }}
                >
                  Data Scientist
                </span>
              </h1>

              {/* Description */}
              <ul className="mb-2 sm:mb-6 space-y-2">
                {heroData.description.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-green-600 text-lg">★</span>
                    <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-3 sm:mb-8">
                {heroData.highlights.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center bg-gray-50 rounded-lg p-3 sm:p-4 border border-gray-100 hover:border-indigo-200 hover:bg-indigo-50 transition-all duration-200"
                  >
                    {item.icon}
                    <p className="text-xs sm:text-sm font-medium text-gray-700 text-center">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-3">
                {/* Primary Button */}
                <button
                  onClick={onEnquiryClick}
                  className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4
               rounded-xl text-white font-semibold shadow-lg
               hover:scale-105 hover:shadow-xl transition-all duration-300"
                  style={{ background: "#006FFF" }}
                >
                  Request a Demo
                </button>
                {/* Secondary Button */}
                <button
                  onClick={() => setShowSyllabusModal(true)}
                  className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4
               rounded-xl border-2 border-gray-200 bg-white text-gray-700 font-semibold
               hover:bg-gray-50 hover:border-gray-300 transition-all duration-300"
                >
                  <span>Download Syllabus</span>
                  <LuDownload size={22} className="text-gray-700" />
                </button>
              </div>
            </div>

            {/* RIGHT — FORM */}
            <div className="relative w-full">
              <div className="w-full rounded-3xl shadow-xl border border-gray-200 bg-white/95 backdrop-blur-md overflow-hidden">
                <div className="p-5 sm:p-6 md:p-8">
                  <h3
                    className="text-xl sm:text-2xl font-bold tracking-tight"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      color: "#111827",
                    }}
                  >
                    Talk to a
                    <span className="text-primary ml-2">Consultant</span>
                  </h3>

                  <p className="text-gray-600 text-xs sm:text-sm mt-1 leading-relaxed">
                    Get guidance on courses, fees & career paths. We’ll reach
                    out in
                    <span className="text-primary ml-1 font-medium">
                      10 minutes!
                    </span>
                  </p>

                  <p className="text-gray-700 text-xs sm:text-sm mt-3 font-medium bg-indigo-50 border border-indigo-200 rounded-xl px-4 py-2">
                    ✨ Limited Seats — Get{" "}
                    <span className="text-primary font-semibold">
                      Free Counselling
                    </span>
                  </p>

                  {/* FORM */}
                  <form
                    className="space-y-5 mt-6"
                    onSubmit={async (e) => {
                      e.preventDefault();

                      const newErrors: ErrorState = {};

                      if (!form.name.trim())
                        newErrors.name = "Name is required";
                      if (!form.email.trim())
                        newErrors.email = "Email is required";
                      else if (
                        !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)
                      )
                        newErrors.email = "Enter a valid email";

                      if (!form.phone.trim())
                        newErrors.phone = "Phone is required";
                      else if (!/^[0-9]{10}$/.test(form.phone))
                        newErrors.phone = "Phone must be 10 digits";

                      if (!form.city.trim())
                        newErrors.city = "City is required";

                      setErrors(newErrors);

                      if (Object.keys(newErrors).length !== 0) return;

                      // 👉 Default Course Name
                      const course = "Full Stack Development";

                      // 👉 Auto Date & Time
                      const enquiryTime = new Date().toLocaleString();

                      const payload = {
                        name: form.name,
                        email: form.email,
                        phone: form.phone,
                        city: form.city,
                        course: course,
                        enquiryTime: enquiryTime,
                      };

                      try {
                        const response = await fetch(
                          "https://formspree.io/f/mblwgqkg",
                          {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(payload),
                          }
                        );

                        if (response.ok) {
                          toast({
                            title: "Success!",
                            description:
                              "✅ Your enquiry has been submitted successfully. We'll contact you soon!",
                          });
                          setForm({ name: "", email: "", phone: "", city: "" });
                          setErrors({});
                        } else {
                          throw new Error(
                            "Failed to submit enquiry. Try again!"
                          );
                        }
                      } catch (error) {
                        throw new Error("Submission failed");
                      }
                    }}
                  >
                    {[
                      { label: "Student Name", key: "name" },
                      { label: "Email Address", key: "email" },
                      { label: "Phone Number", key: "phone" },
                      { label: "City", key: "city" },
                    ].map(({ label, key }) => (
                      <div key={key} className="relative">
                        <input
                          type="text"
                          value={form[key as keyof FormState]}
                          onChange={(e) =>
                            setForm({ ...form, [key]: e.target.value })
                          }
                          className={`
                            peer w-full px-4 py-3 h-12 rounded-2xl border
                            ${
                              errors[key as keyof ErrorState]
                                ? "border-red-500"
                                : "border-gray-300"
                            }
                            bg-gray-50 focus:bg-white
                            focus:ring-2 focus:ring-primary-500 
                            outline-none transition text-sm
                            placeholder-transparent
                          `}
                          placeholder=" "
                        />

                        <label
                          className={`
                            absolute left-4 top-1/2 -translate-y-1/2
                            ${
                              errors[key as keyof ErrorState]
                                ? "text-red-500"
                                : "text-gray-500"
                            }
                            text-sm bg-gray-50 px-1 transition-all pointer-events-none

                            peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary-600 peer-focus:-translate-y-1/2

                            peer-placeholder-shown:top-1/2
                            peer-placeholder-shown:-translate-y-1/2
                            peer-placeholder-shown:text-sm

                            peer-[&:not(:placeholder-shown)]:top-0
                            peer-[&:not(:placeholder-shown)]:-translate-y-1/2
                            peer-[&:not(:placeholder-shown)]:text-xs
                            peer-[&:not(:placeholder-shown)]:text-primary-600
                          `}
                        >
                          {label}
                        </label>

                        {errors[key as keyof ErrorState] && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors[key as keyof ErrorState]}
                          </p>
                        )}
                      </div>
                    ))}

                    <Button
                      type="submit"
                      className="w-full text-white py-3 bg-primary rounded-xl font-medium active:scale-[0.98] transition-all hover:bg-primary shadow-md text-sm sm:text-base"
                    >
                      Submit Enquiry
                    </Button>
                  </form>
                </div>
              </div>
            </div>
            {/* END FORM */}
          </div>
        </section>
      </div>
      <SyllabusFormModal
        isOpen={showSyllabusModal}
        onClose={() => setShowSyllabusModal(false)}
      />
    </section>
  );
};

export default Hero;
