// data/careerData.ts
export interface CareerItem {
  id: number;
  name: string;
  roleBefore: string;
  roleAfter: string;
  companyAfter: string;
  hike: string;
  story: string;
  image: string;
}

export const careerData: CareerItem[] = [
  {
    id: 1,
    name: "Kishan R",
    roleBefore: "BDE",
    roleAfter: "DevOps Engineer",
    companyAfter: "PeopleTech",
    hike: "75%",
    story:
      "StarAgile's DevOps course has been a game-changer in my career. Transitioning from a sales role to a DevOps Engineer, I achieved a 75% salary hike and am now thriving in my new position.",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&q=80&w=1200",
  },
  {
    id: 2,
    name: "Rahul M",
    roleBefore: "System Admin",
    roleAfter: "Cloud Engineer",
    companyAfter: "Tech Mahindra",
    hike: "60%",
    story:
      "After joining the Cloud program, I transitioned from SysAdmin to Cloud Engineer. The hands-on labs and mentorship helped me level up my career.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&q=80&w=1200",
  },
  {
    id: 3,
    name: "Sana P",
    roleBefore: "Support Engineer",
    roleAfter: "SRE",
    companyAfter: "Infosys",
    hike: "85%",
    story:
      "The SRE course helped me break into a high-growth role. The real-time projects and mock interviews were super helpful.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&q=80&w=1200",
  },
];
