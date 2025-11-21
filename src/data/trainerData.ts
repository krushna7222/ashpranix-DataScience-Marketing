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
  title: "Senior Data Scientist & AI/ML Instructor",
  description:
    "Pravin Nagare Sir is an expert Data Scientist with deep experience in Python, Machine Learning, Deep Learning, Data Engineering, and Gen-AI. With 8+ years of experience in solving real-world data problems, he has trained 500+ students and guided many learners to secure roles in top MNCs and AI-driven companies.",
  experience: "10+ Years Exp",
  image: trainerimg,

  achievements: [
    { icon: Users, label: "500+ Students Mentored" },
    { icon: BookOpen, label: "Real Industry Projects" },
    { icon: Award, label: "Top Rated Instructor" },
  ],
};
