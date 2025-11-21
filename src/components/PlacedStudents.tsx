import { GraduationCap } from "lucide-react";

const students = [
  { id: 1, image: "1.png", name: "Aarav Sharma" },
  { id: 2, image: "2.png", name: "Riya Patel" },
  { id: 3, image: "3.png", name: "Vikram Mehta" },
  { id: 4, image: "4.png", name: "Simran Kaur" },
  { id: 5, image: "5.png", name: "Rohan Verma" },
  { id: 6, image: "6.png", name: "Priya Nair" },
  { id: 7, image: "7.png", name: "Aditya Khanna" },
  { id: 8, image: "8.png", name: "Neha Gupta" },
];

const PlacedStudents = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/40">
      {/* ⭐ KEYFRAMES + MOBILE SPEED FIX */}
      <style>{`
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 22s linear infinite;
        }

        /* 🚀 Faster scrolling on mobile */
        @media (max-width: 768px) {
          .animate-marquee {
            animation: marquee 18s linear infinite;
          }
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center justify-center gap-3 bg-primary/10 px-6 py-2 rounded-full mb-5">
            <GraduationCap className="w-6 h-6 text-primary" />
            <span className="text-sm font-semibold text-primary tracking-wide uppercase">
              Placement Highlights
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Our Placed Students
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From classrooms to world-class companies — meet our successful
            graduates.
          </p>
        </div>

        {/* ⭐ Scrolling Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex gap-8 animate-marquee">
            {[...students, ...students].map((student, index) => (
              <div
                key={`${student.id}-${index}`}
                className="flex-shrink-0 group w-40 h-50 md:w-52 md:h-62 relative 
                rounded-2xl overflow-hidden border border-border bg-card shadow-sm 
                hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-full h-full object-cover transition-transform 
                  duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* Edge fade effect */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default PlacedStudents;
