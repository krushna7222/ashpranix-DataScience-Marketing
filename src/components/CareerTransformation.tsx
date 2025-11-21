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

  const variants = {
    enter: { opacity: 0, x: 30 },
    center: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.36, ease: "easeOut" },
    },
    exit: { opacity: 0, x: -20, transition: { duration: 0.28 } },
  };

  const handleDragEnd = (_e: any, info: { offset: { x: number } }) => {
    const threshold = 70;
    if (info.offset.x < -threshold) nextSlide();
    else if (info.offset.x > threshold) prevSlide();
  };

  return (
    <section className="w-full bg-gray-50 py-10 sm:py-14 flex flex-col items-center">
      <div className="max-w-6xl w-full px-4 sm:px-6">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
            Career Transformation
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Freshers trained & placed — real stories.
          </p>
        </div>

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
              className="bg-white rounded-2xl shadow-xl grid grid-cols-1 md:grid-cols-3 gap-6 p-5 sm:p-6 md:p-8"
              aria-live="polite"
            >
              {/* PERSON IMAGE */}
              <div className="flex items-center justify-center md:justify-start">
                <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-xl overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center">
                  <img
                    src={item.personImage}
                    alt={item.personName}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              {/* STORY */}
              <div className="flex flex-col justify-center px-1 text-center md:text-left">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-900">
                  {item.personName}
                </h3>

                <p className="text-sm sm:text-base text-slate-700 mt-3 leading-relaxed max-w-lg mx-auto md:mx-0">
                  {item.story}
                </p>

                <div className="mt-5 flex items-center justify-center md:justify-start gap-3">
                  <Button
                    onClick={() => setShowModal(true)}
                    className="bg-purple-600 text-white px-4 py-2 rounded-full shadow-sm"
                    aria-haspopup="dialog"
                    aria-label={`Play ${item.personName} story video`}
                  >
                    ▶ Hear My Story
                  </Button>
                </div>
              </div>

              {/* BEFORE / AFTER (same UI structure) */}
              <div className="flex flex-col justify-center items-center w-full">
                {/* Mobile row */}
                <div className="flex md:hidden items-center gap-3">
                  {/* BEFORE card */}
                  <Card className="w-32 sm:w-36 h-40 rounded-xl shadow-sm border border-gray-200 relative">
                    <span className="absolute -top-3 left-3 bg-red-500 text-white text-[11px] px-2 py-1 rounded-full shadow">
                      BEFORE
                    </span>

                    <CardContent className="flex flex-col items-center mt-3 px-1">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-md overflow-hidden mb-2 border bg-white p-1 flex items-center justify-center">
                        <img
                          src={item.beforeCompanyLogo ?? item.personImage}
                          alt={
                            item.beforeCompany ?? `${item.personName} before`
                          }
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>

                      <div className="text-center">
                        {item.beforeRole && (
                          <p className="text-sm font-semibold text-gray-800">
                            {item.beforeRole}
                          </p>
                        )}
                        {item.beforeCompany && (
                          <p className="text-xs text-gray-500 mt-1">
                            {item.beforeCompany}
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  <div className="text-2xl font-bold text-slate-500">→</div>

                  {/* AFTER card */}
                  <Card className="w-32 sm:w-36 h-40 rounded-xl shadow-sm border border-gray-200 relative">
                    <span className="absolute -top-3 left-3 bg-green-600 text-white text-[11px] px-2 py-1 rounded-full shadow">
                      AFTER
                    </span>

                    <CardContent className="flex flex-col items-center mt-3 px-1">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-md overflow-hidden mb-2 border bg-white p-1 flex items-center justify-center">
                        <img
                          src={item.companyAfterLogo}
                          alt={item.companyAfter}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>

                      <div className="text-center">
                        {item.roleAfter && (
                          <p className="text-sm font-semibold text-gray-800">
                            {item.roleAfter}
                          </p>
                        )}
                        {item.companyAfter && (
                          <p className="text-xs text-gray-500 mt-1">
                            {item.companyAfter}
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Desktop side-by-side */}
                <div className="hidden md:flex items-center justify-between w-full mt-6 gap-6">
                  <Card className="w-44 md:w-48 rounded-xl shadow-sm border border-gray-200 relative">
                    <span className="absolute -top-3 left-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full shadow">
                      BEFORE
                    </span>

                    <CardContent className="flex flex-col items-center mt-4 px-2">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-md overflow-hidden mb-3 border bg-white p-1 flex items-center justify-center">
                        <img
                          src={item.beforeCompanyLogo ?? item.personImage}
                          alt={
                            item.beforeCompany ?? `${item.personName} before`
                          }
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>

                      <div className="text-center">
                        {item.beforeRole && (
                          <p className="text-sm font-semibold text-gray-800">
                            {item.beforeRole}
                          </p>
                        )}
                        {item.beforeCompany && (
                          <p className="text-xs text-gray-500 mt-1">
                            {item.beforeCompany}
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  <div className="text-4xl font-bold text-slate-500">→</div>

                  <Card className="w-44 md:w-48 rounded-xl shadow-sm border border-gray-200 relative">
                    <span className="absolute -top-3 left-4 bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow">
                      AFTER
                    </span>

                    <CardContent className="flex flex-col items-center mt-4 px-2">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-md overflow-hidden mb-3 border bg-white p-1 flex items-center justify-center">
                        <img
                          src={item.companyAfterLogo}
                          alt={item.companyAfter}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>

                      <div className="text-center">
                        {item.roleAfter && (
                          <p className="text-sm font-semibold text-gray-800">
                            {item.roleAfter}
                          </p>
                        )}
                        {item.companyAfter && (
                          <p className="text-xs text-gray-500 mt-1">
                            {item.companyAfter}
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        {/* Dots - touch-friendly */}
        <div className="mt-6 flex items-center justify-center gap-3">
          {careerTransformData.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-3.5 h-3.5 rounded-full transition-shadow ${
                i === index ? "bg-slate-900 shadow-lg" : "bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* STORY VIDEO MODAL (responsive iframe) */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="story-modal-title"
        >
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

              <div className="w-full aspect-video">
                <iframe
                  src={item.storyVideo}
                  title={`${item.personName} story video`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
