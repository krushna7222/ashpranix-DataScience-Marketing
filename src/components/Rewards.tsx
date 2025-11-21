import { Trophy } from "lucide-react";

const rewards = [
  {
    id: 1,
    image: "/rewards/reward1.JPG",
    title: "Best Tech Institute 2023",
  },
  {
    id: 2,
    image: "/rewards/reward2.jpeg",
    title: "Top 10 Coding Bootcamps",
  },
  {
    id: 3,
    image: "/rewards/reward3.jpeg",
    title: "Innovation in Learning Award",
  },
  // {
  //   id: 4,
  //   image: "/rewards/reward4.jpeg",
  //   title: "1000+ Successful Placements",
  // },
  // {
  //   id: 5,
  //   image: "/rewards/reward5.jpeg",
  //   title: "Industry Collaboration Award",
  // },
  // {
  //   id: 6,
  //   image:
  //     "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
  //   title: "Excellence in Skill Development",
  // },
];

const Rewards = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#F8FAFF] to-[#EEF1F7] overflow-hidden">
      {/* Soft Glow Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-0 w-72 h-72 bg-indigo-300/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-300/20 blur-[160px]" />
      </div>

      <div className="relative container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-xl px-6 py-2 rounded-full shadow-sm border border-white/40">
            <Trophy className="w-6 h-6 text-primary" />
            <span className="text-sm font-semibold text-primary tracking-wide uppercase">
              Achievements
            </span>
          </div>

          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Our Rewards & Achievements
          </h2>

          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Recognized globally for excellence in education, innovation, and
            industry-driven training outcomes.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {rewards.map((reward, index) => (
            <div
              key={reward.id}
              className="
                group relative overflow-hidden rounded-3xl 
                bg-white/70 backdrop-blur-2xl 
                border border-white/40 
                shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]
                transition-all duration-500 
                hover:-translate-y-2
                animate-fadeIn
              "
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              {/* IMAGE */}
              <div className="relative w-full h-72 overflow-hidden">
                <img
                  src={reward.image}
                  alt={reward.title}
                  className="w-full h-full object-cover rounded-3xl transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-90" />
              </div>

              {/* TEXT */}
              <div className="absolute bottom-0 w-full px-6 pb-6">
                <h3 className="text-xl font-semibold text-white drop-shadow-lg">
                  {reward.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fade-in Animation */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.7s ease-out forwards; }
      `}</style>
    </section>
  );
};

export default Rewards;
