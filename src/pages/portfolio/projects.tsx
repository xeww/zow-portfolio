import { useEffect, useState } from "react";
import type { Project } from "@/types/project.ts";
import ContentWrapper from "@/components/contentWrapper";

export function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error : " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        setProjects(data);
      })
      .catch((error) => {
        console.error("Error :", error);
      });
  }, []);

  return (
    <section className={"bg-default-dark px-4 pt-4 pb-12"}>
      <ContentWrapper maxWidth={"1480px"} px={0} py={0}>
        <h1
          className={
            "font-special mb-4 text-center text-6xl font-bold text-white"
          }
        >
          MY PROJECTS
        </h1>
        <div className={"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"}>
          {projects.map((project: Project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              image={project.image}
            />
          ))}
        </div>
      </ContentWrapper>
    </section>
  );
}

export function ProjectCard({ name, image }: { name: string; image: string }) {
  return (
    <article
      data-aos="fade-up"
      className={
        "group hover:ring-green-primary relative h-64 w-full cursor-pointer overflow-hidden rounded-md transition duration-200 ease-in-out hover:ring-2"
      }
    >
      <img
        src={image}
        alt={"Image of project"}
        className={
          "h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        }
      />
      <p
        className={
          "font-display bg-green-primary absolute top-2 right-2 rounded-md px-2 py-1 text-xs text-white"
        }
      >
        {name}
      </p>
    </article>
  );
}
