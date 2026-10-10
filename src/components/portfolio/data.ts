// ===== EDIT YOUR PERSONAL INFO HERE =====
export const profile = {
  name: "ManuelRod",
  email: "your.email@example.com", // TODO: replace
  github: "https://github.com/your-username", // TODO: replace
  linkedin: "https://www.linkedin.com/in/your-profile", // TODO: replace
};

export const skills = [
  { category: "Backend", items: ["Java", "Spring Boot", "Hibernate / JPA", "REST APIs", "JWT", "JUnit"] },
  { category: "Frontend", items: ["Angular", "HTML5", "CSS3", "JavaScript"] },
  { category: "Tools & Databases", items: ["PostgreSQL", "Git", "GitHub", "Gradle", "Docker"] },
];

// TODO: replace with your real projects
export const projects = [
  {
    title: "E-commerce RESTful API",
    icon: "server",
    description:
      "Layered Spring Boot API handling products, carts and orders. Secured with JWT, persisted with JPA on PostgreSQL and covered by JUnit tests.",
    stack: ["Spring Boot", "PostgreSQL", "JWT", "JUnit"],
    repo: "https://github.com/your-username/ecommerce-api",
  },
  {
    title: "Full Stack Task Manager",
    icon: "layout",
    description:
      "Angular client consuming a Spring Boot backend. Solves real-time task tracking with clean REST contracts and role-based access.",
    stack: ["Angular", "Spring Boot", "PostgreSQL"],
    repo: "https://github.com/your-username/task-manager",
  },
  {
    title: "Dockerized Microservice",
    icon: "box",
    description:
      "Independent service built with Gradle and shipped as a Docker image, making local setup and deployment reproducible in one command.",
    stack: ["Java", "Gradle", "Docker"],
    repo: "https://github.com/your-username/microservice",
  },
] as const;
