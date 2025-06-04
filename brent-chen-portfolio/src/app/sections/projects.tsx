
"use client";

import ProjectCard from "../components/projectcard";

const PROJECTS = [
  {
    img: "/image/blog-1.svg",
    title: "International Reviews Gourmet",
    desc: "Website where travelers can search for restraunts that specialize in their home country's dishes reviewed by only travelers from their country",
  },
  {
    img: "/image/blog2.svg",
    title: "Personal Portfolio",
    desc: "Personal Portfolio showcasing my experience and projects",
  },
  {
    img: "/image/blog3.svg",
    title: "Tokyo Tastes",
    desc: "Utilizies MapboxGL to show all food places near Hitotsubashi University",
  },
  {
    img: "../../public/assets/SetListPhoto.jpg",
    title: "Set List",
    desc: "Connects college students who want to form bands or play together in general",
  },
];

export function Projects() {
  return (
    <section className="bg-white py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <h2 className="mt-5 mb-4 text-3xl lg:text-5xl font-bold text-black leading-tight">
          My Projects
        </h2>
        <p className="mx-auto w-full px-4 font-normal text-gray-500 lg:w-6/12 text-lg">
          Whether you have a mobile app idea that needs to come to life or a
          website that requires a facelift, I&apos;m here to turn your digital
          goals into reality.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
