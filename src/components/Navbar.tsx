import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/ashpranix-logo.png";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onEnquiryClick: () => void;
}

const Navbar = ({ onEnquiryClick }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "Courses", href: "#courses" },
    { label: "Trainer", href: "#trainer" },
  ];

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-2 z-[999] w-full flex justify-center">
      {/* GLASS NAVBAR WRAPPER */}
      <div
        className="
        w-[92%] md:w-[85%]
        bg-gradient-to-r from-gray-100 via-white to-gray-100
        text-white
        backdrop-blur-xl
        rounded-3xl
        shadow-[0_8px_20px_rgba(30,60,150,0.3)]
        border border-white/10
        px-6 py-3
      "
      >
        <div className="flex items-center justify-between">
          {/* LEFT — LOGO */}
          <img
            src={logo}
            alt="Ashpranix"
            className="h-12 md:h-14 w-auto object-contain"
          />

          {/* CENTER NAV ITEMS */}
          <div className="hidden md:flex items-center space-x-10">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="
                  text-black/90 
                  font-medium 
                  text-lg 
                  hover:text-black 
                  transition
                "
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* RIGHT CTA BUTTON (BLUE) */}
          <Button
            onClick={onEnquiryClick}
            className="
              hidden md:block
              bg-gradient-to-r from-[#4696ff] to-[#006FFF]
              text-white
              px-6 py-2
              rounded-full
              font-semibold
              shadow-[0_4px_14px_rgba(30,100,200,0.4)]
              hover:scale-105
              transition-all duration-300
            "
          >
            Enquiry Now
          </Button>

          {/* MOBILE ICON */}
          <button
            className="md:hidden text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-3 space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block text-black/90 font-medium text-lg"
              >
                {item.label}
              </button>
            ))}

            <Button
              onClick={onEnquiryClick}
              className="
                w-full
                bg-gradient-to-r from-[#4696ff] to-[#006FFF]
                text-white
                py-2 
                rounded-full
              "
            >
              Enquiry Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
