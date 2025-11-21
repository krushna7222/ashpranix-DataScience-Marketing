import React from "react";
import logo from "../assets/ashpranix-logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaDribbble,
} from "react-icons/fa";

interface FooterProps {
  onEnquiryClick: () => void;
}

const Footer = ({ onEnquiryClick }: FooterProps) => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10 border-t border-gray-700 relative overflow-hidden">
      {/* GRADIENT ACCENTS */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-10 left-10 w-40 h-40 bg-indigo-500 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500 blur-3xl rounded-full"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* CTA */}
        <div className="rounded-2xl bg-indigo-600/90 backdrop-blur-md p-8 md:p-10 shadow-xl border border-indigo-400/30 flex flex-col md:flex-row items-center justify-between gap-5">
          <h2 className="text-white text-2xl font-semibold tracking-wide text-center md:text-left">
            Let's Build Your Future Together
          </h2>

          <a
            onClick={onEnquiryClick}
            className="inline-flex items-center gap-2 rounded-full px-8 py-3 font-medium bg-white text-indigo-700 border border-white shadow-md hover:bg-transparent hover:text-white transition"
          >
            Enquiry Now
            <svg
              className="w-5 h-5 rtl:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>

        {/* FOOTER GRID */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-white">About Us</h3>
            <ul className="mt-6 space-y-3 text-sm">
              {["Upcoming Courses", "Meet the Team", "Upcoming Events"].map(
                (item) => (
                  <li key={item}>
                    <a
                      className="text-gray-300 hover:text-indigo-400 transition"
                      href="#"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "‪+91 8087203095‬",
                "enroll@ashpranix.com",
                "Ashpranix Learning Solutions",
              ].map((item) => (
                <li key={item}>
                  <a
                    className="text-gray-300 hover:text-indigo-400 transition"
                    href="#"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-6 space-y-3 text-sm">
              {["Home", "Courses", "Trainer"].map((item) => (
                <li key={item}>
                  <a
                    className="text-gray-300 hover:text-indigo-400 transition"
                    href="#"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Helpful Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Helpful Links</h3>
            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a
                  className="text-gray-300 hover:text-indigo-400 transition"
                  href="#"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  className="text-gray-300 hover:text-indigo-400 transition"
                  href="#"
                >
                  Support
                </a>
              </li>
              <li className="flex items-center gap-2">
                <a
                  className="text-gray-300 hover:text-indigo-400 transition"
                  href="#"
                >
                  Live Chat
                </a>
                <span className="relative flex w-2 h-2">
                  <span className="absolute w-full h-full rounded-full bg-teal-400 opacity-75 animate-ping"></span>
                  <span className="relative w-2 h-2 rounded-full bg-teal-500"></span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-16 pt-8 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Icons */}
          <div className="flex gap-6 text-gray-300">
            <a href="#" className="hover:text-indigo-400 transition">
              <FaFacebookF className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/ashpranix_learning/"
              target="_blank"
              className="hover:text-indigo-400 transition"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a href="#" className="hover:text-indigo-400 transition">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="#" className="hover:text-indigo-400 transition">
              <FaGithub className="text-2xl" />
            </a>
            <a href="#" className="hover:text-indigo-400 transition">
              <FaDribbble className="text-2xl" />
            </a>
          </div>

          <p className="text-sm text-gray-400 mt-4 md:mt-0">
            © {new Date().getFullYear()} Ashpranix Technologies. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
