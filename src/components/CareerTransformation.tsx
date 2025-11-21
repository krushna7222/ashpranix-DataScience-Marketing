import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { careerTransformData } from "@/data/careerTransformData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CareerTransformation: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayRef = useRef<number | null>(null);

  const total = careerTransformData.length;
  const item = careerTransformData[index];

  const nextSlide = () => setIndex((p) => (p + 1) % total);
  const prevSlide = () => setIndex((p) => (p - 1 + total) % total);

  // autoplay: respects pause and modal open
  useEffect(() => {
    if (isPaused || showModal) return;
    autoplayRef.current = window.setInterval(nextSlide, 6000);
    return () => {
      if (autoplayRef.current) window.clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    };
  }, [isPaused, showModal, index]);

  // keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "Escape") setShowModal(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, showModal]);

  // framer variants
  const variants = {
    enter: { opacity: 0, x: 40 },
    center: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.36, ease: "easeOut" },
    },
    exit: { opacity: 0, x: -30, transition: { duration: 0.28 } },
  };

  // drag support
  const handleDragEnd = (_e: any, info: { offset: { x: number } }) => {
    const threshold = 70;
    if (info.offset.x < -threshold) nextSlide();
    else if (info.offset.x > threshold) prevSlide();
  };

  return (
    <section className="w-full bg-gray-50 py-12 sm:py-16 flex flex-col items-center">
      <div className="max-w-6xl w-full px-4 sm:px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
              Career Transformation
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Freshers trained & placed — real stories.
            </p>
          </div>

          {/* Desktop controls */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={prevSlide}
              aria-label="Previous"
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white border shadow-sm hover:bg-gray-50"
            >
              <svg
                className="w-5 h-5 text-slate-700"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next"
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white border shadow-sm hover:bg-gray-50"
            >
              <svg
                className="w-5 h-5 text-slate-700"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Slide container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.article
              key={item.id}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragMomentum={false}
              onDragEnd={handleDragEnd}
              // variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="bg-white rounded-2xl shadow-xl grid grid-cols-1 md:grid-cols-3 gap-6 p-6 md:p-8"
            >
              {/* IMAGE (stack on mobile) */}
              <div className="flex items-center justify-center md:justify-start">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-xl overflow-hidden shadow-lg flex items-center justify-center bg-gray-100">
                  <img
                    src={item.personImage}
                    alt={item.personName}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* STORY */}
              <div className="flex flex-col justify-center px-1 text-center md:text-left">
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
                  {item.personName}
                </h3>
                <p className="text-sm sm:text-base text-slate-700 mt-3 leading-relaxed">
                  {item.story}
                </p>

                <div className="mt-5 flex items-center justify-center md:justify-start gap-3">
                  <Button
                    onClick={() => setShowModal(true)}
                    className="bg-purple-600 text-white px-4 py-2 rounded-full shadow-sm"
                  >
                    ▶ Hear My Story
                  </Button>

                  <div className="ml-2 text-xs text-slate-500">
                    <span className="font-semibold text-slate-800">
                      {index + 1}
                    </span>
                    {" / "}
                    {total}
                  </div>
                </div>
              </div>

              {/* BEFORE / AFTER */}
              <div className="flex flex-col justify-center items-center w-full">
                {/* Small (mobile) layout: row */}
                <div className="flex md:hidden items-center gap-4">
                  {/* BEFORE */}
                  <Card className="w-36 h-44 rounded-xl shadow-sm border border-gray-200 relative">
                    <span className="absolute -top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full shadow">
                      BEFORE
                    </span>
                    <CardContent className="flex flex-col items-center mt-3">
                      <div className="w-12 h-12 rounded-md overflow-hidden mb-2 border bg-white p-1 flex items-center justify-center">
                        <img
                          src={item.beforeCompanyLogo ?? item.personImage}
                          alt={item.beforeCompany ?? item.personName}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>

                      {/* removed the 'Fresher' tag — show only beforeRole / beforeCompany if present */}
                      {item.beforeRole || item.beforeCompany ? (
                        <p className="text-[11px] text-gray-500 text-center mt-1">
                          {item.beforeRole ? item.beforeRole : ""}
                          {item.beforeRole && item.beforeCompany ? " • " : ""}
                          {item.beforeCompany ? item.beforeCompany : ""}
                        </p>
                      ) : null}
                    </CardContent>
                  </Card>

                  <div className="text-2xl font-bold text-slate-500">→</div>

                  {/* AFTER */}
                  <Card className="w-36 h-44 rounded-xl shadow-sm border border-green-600 relative">
                    <span className="absolute -top-3 left-3 bg-green-600 text-white text-xs px-2 py-1 rounded-full shadow">
                      AFTER
                    </span>
                    <CardContent className="flex flex-col items-center mt-3">
                      <div className="w-12 h-12 rounded-md overflow-hidden mb-2 border bg-white p-1 flex items-center justify-center">
                        <img
                          src={item.companyAfterLogo}
                          alt={item.companyAfter}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      <p className="text-sm font-semibold text-gray-800 text-center">
                        {item.roleAfter}
                      </p>
                      <p className="text-xs text-gray-500 text-center mt-1">
                        {item.companyAfter}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Desktop layout: BEFORE & AFTER side-by-side */}
                <div className="hidden md:flex items-center justify-between w-full mt-6 gap-6">
                  <Card className="w-48 rounded-xl shadow-sm border border-gray-200 relative">
                    <span className="absolute -top-3 left-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full shadow">
                      BEFORE
                    </span>
                    <CardContent className="flex flex-col items-center mt-4">
                      <div className="w-16 h-16 rounded-md overflow-hidden mb-3 border bg-white p-1 flex items-center justify-center">
                        <img
                          src={item.beforeCompanyLogo ?? item.personImage}
                          alt={item.beforeCompany ?? item.personName}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>

                      {/* removed the 'Fresher' tag — show only beforeRole / beforeCompany if present */}
                      {item.beforeRole || item.beforeCompany ? (
                        <p className="text-xs text-gray-500 text-center mt-1">
                          {item.beforeRole ? item.beforeRole : ""}
                          {item.beforeRole && item.beforeCompany ? " • " : ""}
                          {item.beforeCompany ? item.beforeCompany : ""}
                        </p>
                      ) : null}
                    </CardContent>
                  </Card>

                  <div className="text-4xl font-bold text-slate-500">→</div>

                  <Card className="w-48 rounded-xl shadow-sm border border-green-600 relative">
                    <span className="absolute -top-3 left-4 bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow">
                      AFTER
                    </span>
                    <CardContent className="flex flex-col items-center mt-4">
                      <div className="w-14 h-14 rounded-md overflow-hidden mb-2 border bg-white p-1 flex items-center justify-center">
                        <img
                          src={item.companyAfterLogo}
                          alt={item.companyAfter}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      <p className="text-sm font-semibold text-gray-800">
                        {item.roleAfter}
                      </p>
                      <p className="text-xs text-gray-500">
                        {item.companyAfter}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>

          {/* Mobile prev/next (always visible on small) */}
          <div className="absolute left-3 top-1/2 -translate-y-1/2 md:hidden">
            <button
              onClick={prevSlide}
              aria-label="Previous"
              className="w-9 h-9 rounded-md bg-white border shadow-sm flex items-center justify-center"
            >
              ‹
            </button>
          </div>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 md:hidden">
            <button
              onClick={nextSlide}
              aria-label="Next"
              className="w-9 h-9 rounded-md bg-white border shadow-sm flex items-center justify-center"
            >
              ›
            </button>
          </div>
        </div>

        {/* Dots */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {careerTransformData.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition ${
                i === index ? "bg-slate-900" : "bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* STORY VIDEO MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setShowModal(false)}
          />
          <div className="relative w-full max-w-3xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
              <div className="flex justify-end p-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="w-9 h-9 rounded-full bg-white border shadow flex items-center justify-center"
                  aria-label="Close video"
                >
                  ✕
                </button>
              </div>

              <div className="w-full">
                <iframe
                  src={item.storyVideo}
                  title={`${item.personName} story video`}
                  className="w-full h-64 md:h-[520px]"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CareerTransformation;
