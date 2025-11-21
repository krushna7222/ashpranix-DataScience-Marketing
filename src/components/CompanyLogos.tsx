import { companies } from "@/data/companies";

const CompanyLogos = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#F8FAFD] to-[#EEF1F6]">
      <style>{`
        .marquee-left { display:flex; width:max-content; animation: marquee-left 35s linear infinite; }
        .marquee-right { display:flex; width:max-content; animation: marquee-right 35s linear infinite; }
        @media (max-width:768px){ .marquee-left,.marquee-right{ animation-duration:18s } }
        @keyframes marquee-left { 0% {transform:translateX(0)} 100% {transform:translateX(-50%)} }
        @keyframes marquee-right { 0% {transform:translateX(-50%)} 100% {transform:translateX(0)} }
      `}</style>

      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our Hiring Partners
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            We collaborate with top companies to provide students access to
            real-world opportunities and successful placements.
          </p>
        </div>

        {/* Logos Line 1 + Line 2 with left/right fade overlays */}
        <div className="relative">
          <div className="relative overflow-hidden py-6 bg-gray-200 border border-gray-200 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] w-full mb-6">
            {/* left-to-right marquee */}
            <div className="marquee-left gap-12 items-center">
              {[...companies, ...companies]
                .slice()
                .reverse()
                .map((company, index) => (
                  <div
                    key={`row1-${company.name}-${index}`}
                    className="
                    flex-shrink-0 
                    bg-white/70 border border-gray-200 
                    backdrop-blur-sm 
                    px-4 py-1 
                    rounded-lg 
                    shadow-sm 
                    transition-all duration-300 
                    hover:shadow-md 
                    hover:scale-110
                  "
                  >
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="h-14 md:h-16 w-auto object-contain"
                    />
                  </div>
                ))}
            </div>

            {/* right-to-left marquee (second row) */}
            <div className="marquee-right gap-12 mt-8 items-center">
              {[...companies, ...companies].map((company, index) => (
                <div
                  key={`row2-${company.name}-${index}`}
                  className="
                    flex-shrink-0 
                    bg-white/70 border border-gray-200 
                    backdrop-blur-sm 
                    px-4 py-1 
                    rounded-lg 
                    shadow-sm 
                    transition-all duration-300 
                    hover:shadow-md 
                    hover:scale-110
                  "
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-14 md:h-16 w-auto object-contain"
                  />
                </div>
              ))}
            </div>

            {/* LEFT FADE (adjust width and colors as needed) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-0 top-0 h-full w-20 md:w-32 z-30"
              style={{
                background:
                  "linear-gradient(to right, rgba(248,250,253,1), rgba(248,250,253,0))",
              }}
            />

            {/* RIGHT FADE */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-0 h-full w-20 md:w-32 z-30"
              style={{
                background:
                  "linear-gradient(to left, rgba(248,250,253,1), rgba(248,250,253,0))",
              }}
            />
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center mt-10">
          <p className="text-gray-600 text-sm md:text-base">
            Trusted by{" "}
            <span className="font-semibold text-primary">250+ Companies</span>{" "}
            across India
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;
