import { Award, Users, BookOpen, LucideIcon } from "lucide-react";
import trainerimg from "../assets/pravinSir.png";

export interface TrainerAchievement {
  icon: LucideIcon;
  label: string;
}

export interface TrainerData {
  name: string;
  title: string;
  description: string;
  experience: string;
  image: string;
  achievements: TrainerAchievement[];
}

export const trainerData: TrainerData = {
  name: "Pravin Nagare",
  title: "Senior Full Stack Developer & Instructor",
  description:
    "Pravin Nagare Sir is an experienced Full Stack Developer with strong expertise in Java, Spring Boot, React.js, MySQL, and real project development. With 8+ years of industry experience, he has trained 500+ students and helped many start their careers in top companies.",
  experience: "10+ Years Exp",
  image: trainerimg,

  achievements: [
    { icon: Users, label: "500+ Students Mentored" },
    { icon: BookOpen, label: "Real Industry Projects" },
    { icon: Award, label: "Top Rated Instructor" },
  ],
};
