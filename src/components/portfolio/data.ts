// ===== src/components/portfolio/data.ts =====

export const profile = {
  name: "ManuelRod",
  email: "mrodrigueznavarro360@gmail.com",
  github: "https://github.com/ManuelRodNav",
  linkedin: "https://www.linkedin.com/in/your-profile",
};

export const skills = [
  { category: "Backend", items: ["Java", "Spring Boot", "Hibernate / JPA", "REST APIs", "JWT", "JUnit/Mockito"] },
  { category: "Frontend", items: ["Angular", "HTML", "CSS", "JavaScript"] },
  { category: "Tools & Databases", items: ["PostgreSQL", "Git", "GitHub"] },
];

export const projects = [
  {
    title: "Microservice Ticketing Backend",
    icon: "server",
    description:
      "Microservices Ticketing Backend A scalable microservices ecosystem built with Java 21 and Spring Boot 4.0.5, designed for high-performance, efficient ticket reservation and event management.",
    stack: ["Spring Boot", "PostgreSQL", "JWT", "JUnit"],
    repo: "https://github.com/ManuelRodNav/microservices-ticketing-backend",
  },
  {
    title: "Angular Login Springboot",
    icon: "layout",
    description:
      "Frontend hecho con el framework Angular.js acerca de un login con una tabla de datos",
    stack: ["Angular", "Spring Boot", "PostgreSQL"],
    repo: "https://github.com/ManuelRodNav/LoginAngular-Spring-Frontend",
  },
  {
    title: "Blog Repository Security",
    icon: "box",
    description:
      "Backend desarollado en Java + Spring Boot en el que se muestra el uso de SpringBoot + JWT",
    stack: ["Java", "JWT", "SpringBoot"],
    repo: "https://github.com/ManuelRodNav/BlogRepositorioSecurity",
  },
];  