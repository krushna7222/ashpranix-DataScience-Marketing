import React from "react";
import { Sparkles, Award } from "lucide-react";
import { trainerData } from "../data/trainerData";

const TrainerSection: React.FC = () => {
  return (
    <section
      id="trainer"
      className="relative py-20 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-0 w-72 h-72 bg-indigo-300/25 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-300/25 blur-[130px]" />
      </div>

      <div className="relative container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white shadow-sm border border-indigo-200/60 backdrop-blur-xl">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-primary tracking-wide">
              Trainer Spotlight
            </span>
          </div>

          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Learn From the Best in the Industry
          </h2>

          <p className="mt-3 text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Get mentored by a seasoned industry expert with real-world project
            experience, structured teaching, and a proven track record of
            student success.
          </p>
        </div>

        {/* Main Card */}
        <div
          className="
            grid md:grid-cols-2 gap-10 items-center
            bg-white/80 backdrop-blur-2xl border border-gray-200
            rounded-[28px] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.06)]
            hover:shadow-[0_14px_55px_rgba(0,0,0,0.08)]
            transition-all duration-500 relative
            before:absolute before:inset-0 before:rounded-[28px]
            before:border before:border-white/40 before:pointer-events-none
          "
        >
          {/* Trainer Image */}
          <div className="relative flex justify-center">
            <div className="relative group">
              <img
                src={trainerData.image}
                alt={trainerData.name}
                className="w-72 h-72 rounded-3xl object-cover shadow-lg transition-transform duration-700 group-hover:scale-[1.04]"
              />

              {/* Badge 1 */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-primary to-primary text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg backdrop-blur-xl">
                Lead Mentor
              </div>

              {/* Badge 2 */}
              <div className="absolute bottom-5 -left-4 bg-white/80 backdrop-blur-xl p-3 rounded-2xl shadow-xl border border-gray-200/70">
                <Award className="h-6 w-6 text-primary mx-auto mb-1" />
                <p className="text-[11px] font-semibold text-gray-700">
                  {trainerData.experience}
                </p>
              </div>
            </div>
          </div>

          {/* Trainer Info */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
              {trainerData.name}
            </h3>

            <p className="text-primary font-semibold text-lg mb-4">
              {trainerData.title}
            </p>

            <p className="text-gray-700 leading-relaxed text-[16px] mb-8 max-w-lg">
              {trainerData.description}
            </p>

            {/* Achievements */}
            <div className="grid sm:grid-cols-3 gap-5">
              {trainerData.achievements.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="
                      bg-gray-100/90 border border-gray-200 p-4 rounded-xl
                      text-center shadow-sm hover:shadow-md hover:-translate-y-1
                      transition-all duration-300 backdrop-blur-xl
                    "
                  >
                    <Icon className="h-6 w-6 text-primary mx-auto mb-2" />
                    <p className="text-sm font-semibold text-gray-900">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainerSection;
