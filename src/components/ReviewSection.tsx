"use client";

import { useState, useEffect, useRef } from "react";
import { reviews } from "@/data/reviews";
import { CheckCircle, Globe, Quote } from "lucide-react";

const ReviewSection = () => {
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => goNext(), 3500);
    return () => clearInterval(interval);
  }, [current]);

  const goNext = () => {
    const next = current === reviews.length - 1 ? 0 : current + 1;
    moveTo(next);
  };

  const moveTo = (index: number) => {
    setCurrent(index);
    sliderRef.current?.scrollTo({
      left: index * sliderRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative py-20 md:py-24 bg-gradient-to-b from-white via-gray-50 to-gray-100 overflow-hidden">
      {/* Soft Background */}
      <div className="absolute top-0 left-0 w-72 md:w-96 h-72 md:h-96 bg-indigo-300/20 blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-pink-300/20 blur-[120px]"></div>

      <div className="relative container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center -mt-8 mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white rounded-full border shadow-sm backdrop-blur-md text-sm md:text-base">
            <span className="text-primary font-semibold">
              Trusted by 3000+ Learners
            </span>
          </div>

          <h2 className="mt-6 text-3xl md:text-5xl font-extrabold text-gray-900 leading-snug">
            What Our Students Say
          </h2>

          <p className="mt-3 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Real stories from learners who transformed their careers with our
            courses.
          </p>
        </div>

        {/* SLIDER WRAPPER */}
        <div className="relative w-full overflow-hidden select-none">
          <div
            ref={sliderRef}
            className="flex overflow-x-hidden snap-x snap-mandatory"
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="min-w-full snap-center px-2 sm:px-3"
              >
                <div
                  className="
                    relative 
                    bg-white 
                    p-6 sm:p-10 md:p-12 
                    rounded-2xl md:rounded-3xl 
                    border border-gray-200/70 
                    shadow-[0_12px_40px_rgba(0,0,0,0.06)]
                    hover:shadow-[0_18px_60px_rgba(0,0,0,0.08)]
                    hover:-translate-y-1 
                    transition-all 
                    duration-500
                    max-w-4xl mx-auto 
                    backdrop-blur-lg
                  "
                >
                  {/* Floating Quote Icon */}
                  <Quote className="absolute top-4 right-4 md:top-5 md:right-5 text-primary opacity-30 w-7 h-7 md:w-10 md:h-10" />

                  <div className="flex flex-col md:flex-row justify-between gap-6">
                    {/* USER INFO */}
                    <div className="flex gap-4">
                      <div
                        className="
                          h-14 w-14 md:h-16 md:w-16 
                          rounded-full 
                          bg-white shadow-inner 
                          border border-gray-300 
                          flex items-center justify-center
                        "
                      >
                        <Globe className="text-primary w-6 h-6 md:w-7 md:h-7" />
                      </div>

                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-900">
                          {review.name}
                        </h3>
                        <p className="text-sm text-gray-600">{review.role}</p>

                        <div className="flex items-center gap-1 mt-1 text-green-600 text-sm font-medium">
                          <CheckCircle size={14} />
                          Verified Learner
                        </div>
                      </div>
                    </div>

                    {/* RATING */}
                    <div className="flex items-center gap-2 text-gray-900 font-semibold">
                      <div className="flex text-lg md:text-xl">
                        {Array(review.rating)
                          .fill(0)
                          .map((_, i) => (
                            <span
                              key={i}
                              className="text-yellow-400 animate-pulse"
                              style={{ animationDelay: `${i * 120}ms` }}
                            >
                              ★
                            </span>
                          ))}
                      </div>
                      <p className="text-sm md:text-base">{review.rating}/5</p>
                    </div>
                  </div>

                  {/* REVIEW TEXT */}
                  <p className="mt-5 text-gray-700 text-base md:text-[17px] leading-relaxed tracking-wide">
                    {review.review}
                  </p>

                  {/* DATE */}
                  <p className="mt-5 text-gray-500 text-xs md:text-sm text-right">
                    {review.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DOTS */}
        <div className="flex justify-center mt-8 md:mt-10 gap-2 md:gap-3">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => moveTo(index)}
              className={`rounded-full transition-all ${
                current === index
                  ? "w-6 h-2 md:w-8 md:h-3 bg-primary shadow-md"
                  : "w-2 h-2 md:w-3 md:h-3 bg-gray-400/60"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
