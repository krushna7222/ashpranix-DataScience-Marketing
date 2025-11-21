import { useState } from "react";
import { ChevronDown, Clock } from "lucide-react";
import { courses } from "@/data/courses";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState<string>(courses[0].id);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Frontend: "bg-blue-500/10 text-blue-700 border-blue-500/20",
      Backend: "bg-green-500/10 text-green-700 border-green-500/20",
      Database: "bg-yellow-500/10 text-yellow-700 border-yellow-500/20",
      Programming: "bg-purple-500/10 text-purple-700 border-purple-500/20",
    };
    return colors[category] || "bg-muted text-muted-foreground";
  };

  return (
    <section id="courses" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Course Content
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive curriculum designed to make you industry-ready
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* LEFT: Course Modules Navigation */}
          <div className="lg:col-span-1">
            <Card className="p-4 shadow-md sticky top-24 bg-white">
              <h3 className="text-lg font-bold mb-4 text-primary">
                Course Modules
              </h3>

              {/* ✅ MOBILE: Horizontal Scroll */}
              <div className="flex lg:hidden overflow-x-auto space-x-3 pb-2">
                {courses.map((course, index) => (
                  <button
                    key={course.id}
                    onClick={() => setSelectedCourse(course.id)}
                    className={`min-w-[180px] px-4 py-3 rounded-xl border text-left flex-shrink-0 transition-all duration-300 ${
                      selectedCourse === course.id
                        ? "bg-primary text-white border-primary"
                        : "border-gray-300 bg-gray-50"
                    }`}
                  >
                    <p className="text-xs font-semibold mb-1">
                      Module {index + 1}
                    </p>
                    <p className="text-sm font-medium">{course.name}</p>
                  </button>
                ))}
              </div>

              {/* ✅ DESKTOP: Vertical List */}
              <div className="hidden lg:block space-y-2">
                {courses.map((course, index) => (
                  <button
                    key={course.id}
                    onClick={() => setSelectedCourse(course.id)}
                    className={`w-full text-left p-3 rounded-lg border transition-all duration-300 ${
                      selectedCourse === course.id
                        ? "bg-primary text-white border-primary"
                        : "hover:bg-gray-100 border-gray-200"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold">
                        Module {index + 1}
                      </span>
                      {selectedCourse === course.id && (
                        <ChevronDown className="w-4 h-4 -rotate-90" />
                      )}
                    </div>

                    <p
                      className={`text-sm font-medium ${
                        selectedCourse === course.id
                          ? "text-white"
                          : "text-gray-600"
                      }`}
                    >
                      {course.name}
                    </p>
                  </button>
                ))}
              </div>
            </Card>
          </div>

          {/* RIGHT: Course Details */}
          <div className="lg:col-span-3">
            {courses
              .filter((course) => course.id === selectedCourse)
              .map((course) => (
                <div key={course.id}>
                  <Card className="p-6 shadow-md border-l-4 border-l-primary bg-white">
                    {/* Title + Badges */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h2 className="text-2xl md:text-3xl font-bold">
                        {course.name}
                      </h2>

                      <Badge
                        className={getCategoryColor(course.category)}
                        variant="outline"
                      >
                        #{course.category}
                      </Badge>

                      {course.isComplimentary && (
                        <Badge className="bg-green-100 text-green-700 border-green-300">
                          Complimentary
                        </Badge>
                      )}
                    </div>

                    {/* Duration */}
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <Clock className="w-5 h-5" />
                      <span className="font-medium">{course.duration}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {course.description}
                    </p>

                    {/* List */}
                    <h3 className="text-xl font-semibold mb-3 text-primary">
                      What You'll Learn
                    </h3>

                    <ul className="space-y-3 max-h-[420px] overflow-y-auto pr-2">
                      {course.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-green-600 text-lg mt-1">✓</span>
                          <span className="text-gray-700 text-sm leading-relaxed">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
