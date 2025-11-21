import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { careerTransformData } from "@/data/careerTransformData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CareerTransformation: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const nextSlide = () =>
    setIndex((prev) => (prev + 1) % careerTransformData.length);

  const prevSlide = () =>
    setIndex((prev) =>
      prev === 0 ? careerTransformData.length - 1 : prev - 1
    );

  useEffect(() => {
    const t = setInterval(nextSlide, 6000);
    return () => clearInterval(t);
  }, []);

  // SAFE animation – no flip, no 3D, no layout shifting
  const variants = {
    enter: { opacity: 0, x: 50 },
    center: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: { opacity: 0, x: -50, transition: { duration: 0.3 } },
  };

  const handleDragEnd = (_e: any, info: { offset: { x: number } }) => {
    const threshold = 70;
    if (info.offset.x < -threshold) nextSlide();
    else if (info.offset.x > threshold) prevSlide();
  };

  const item = careerTransformData[index];

  return (
    <div className="w-full bg-gray-50 py-16 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-12">Career Transformation</h2>

      <div className="w-full max-w-6xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={item.id}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragMomentum={false}
            onDragEnd={handleDragEnd}
            // variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="bg-white p-8 rounded-2xl shadow-xl grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {/* LEFT SIDE */}
            <div className="flex flex-col items-center">
              <img
                src={item.personImage}
                alt={item.personName}
                className="w-64 h-64 md:w-72 md:h-72 rounded-xl object-cover shadow-lg"
              />
              {/* <Button className="bg-green-600 mt-4 text-white px-5 py-2 rounded-full">
                {item.hike} Hike
              </Button> */}
            </div>

            {/* STORY */}
            <div className="flex flex-col justify-center text-center md:text-left">
              <h3 className="text-3xl font-semibold">{item.personName}</h3>
              <p className="text-gray-600 mt-4 leading-relaxed">{item.story}</p>

              <Button
                onClick={() => setShowModal(true)}
                className="mx-auto md:mx-0 mt-6 bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg"
              >
                ▶ Hear My Story
              </Button>
            </div>

            {/* BEFORE | AFTER */}
            <div className="flex flex-col justify-center items-center w-full">
              {/* MOBILE */}
              <div className="flex md:hidden w-full items-center justify-center gap-4">
                <Card className="w-36 h-40 rounded-xl shadow-md border border-gray-300 relative">
                  <span className="absolute -top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full shadow">
                    BEFORE
                  </span>
                  <CardContent className="flex flex-col items-center mt-4">
                    <p className="text-sm font-semibold text-gray-700">
                      {item.before}
                    </p>
                    <p className="text-xs text-gray-500">{item.before}</p>
                  </CardContent>
                </Card>

                <motion.div
                  animate={{ x: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 1.4 }}
                  className="text-3xl font-bold text-gray-600"
                >
                  →
                </motion.div>

                <Card className="w-36 h-40 rounded-xl shadow-md border border-green-600 relative">
                  <span className="absolute -top-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow">
                    AFTER
                  </span>
                  <CardContent className="flex flex-col items-center mt-4">
                    <img
                      src={item.companyAfterLogo}
                      className="w-12 h-12 object-contain mb-1"
                    />
                    <p className="text-sm font-semibold text-gray-700">
                      {item.roleAfter}
                    </p>
                    <p className="text-xs text-gray-500">{item.companyAfter}</p>
                  </CardContent>
                </Card>
              </div>

              {/* DESKTOP */}
              <div className="hidden md:flex w-full items-center justify-between mt-10">
                <Card className="w-48 rounded-xl shadow-md border border-gray-300 relative">
                  <span className="absolute -top-3 left-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full shadow">
                    BEFORE
                  </span>
                  <CardContent className="flex flex-col items-center mt-4">
                    <p className="text-sm font-semibold">{item.before}</p>
                    <p className="text-xs text-gray-500">{item.before}</p>
                  </CardContent>
                </Card>

                <motion.div
                  animate={{ x: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 1.3 }}
                  className="text-5xl font-bold text-gray-600"
                >
                  →
                </motion.div>

                <Card className="w-48 rounded-xl shadow-md border border-green-600 relative">
                  <span className="absolute -top-3 left-4 bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow">
                    AFTER
                  </span>
                  <CardContent className="flex flex-col items-center mt-4">
                    <img
                      src={item.companyAfterLogo}
                      className="w-12 h-12 object-contain mb-2"
                    />
                    <p className="text-sm font-semibold">{item.roleAfter}</p>
                    <p className="text-xs text-gray-500">{item.companyAfter}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* STORY VIDEO MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl overflow-hidden shadow-xl w-full max-w-3xl relative">
            <button
              className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-md border"
              onClick={() => setShowModal(false)}
            >
              ✖
            </button>
            <iframe
              src={item.storyVideo}
              className="w-full h-72 md:h-96"
              allowFullScreen
              title="story-video"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerTransformation;
