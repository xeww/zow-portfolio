import { MessageCircleQuestionMark } from "lucide-react";
import { Link } from "react-router";
import ContentWrapper from "../components/contentWrapper.tsx";
import { useEffect, useState } from "react";
import type { Project } from "../types/project.ts";

export default function PortfolioPage() {
  return (
    <>
      <WelcomeSection />
      <ProjectsSection />
    </>
  );
}

function WelcomeSection() {
  return (
    <section className="bg-default-dark relative h-[600px] w-full">
      <img
        src="/illustration_1.webp"
        alt="background illustatrion"
        className="h-full w-full rounded-b-4xl object-cover"
      />
      <WelcomeText />
    </section>
  );
}

function WelcomeText() {
  return (
    <div className="absolute top-15 right-0 bottom-0 left-0 z-10 flex flex-col items-center justify-center">
      <h2 className="font-display mb-4 text-3xl font-bold text-white">
        Welcome to my Portfolio
      </h2>
      <p className="font-display text-center text-lg text-white">
        Discover my most recent builds !
        <br />
        Any question ? Join my Discord server for support.
      </p>
      <DiscordButton />
    </div>
  );
}

function DiscordButton() {
  return (
    <Link
      to="https://discord.gg/HnPG2bVFKm"
      className="font-display bg-green-secondary mt-6 flex items-center gap-1 rounded-3xl px-8 py-2 text-white transition duration-200 ease-in-out hover:scale-105 active:translate-y-1"
    >
      <MessageCircleQuestionMark />
      <p className="text-xl">Join my Discord</p>
    </Link>
  );
}

function ProjectsSection() {
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
            <Project
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

function Project({ name, image }: { name: string; image: string }) {
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
