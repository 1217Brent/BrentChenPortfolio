"use client";
import Footer from "./footer";
import Hero from "./hero";
import Projects from "./projects";
import { ContactForm } from "./contact";
import WorkExperience from "./work";
import Description from "./description";
import Skills from "./skills";

function HomeClient() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="!m-0 !p-0 [&>section]:!min-h-fit [&>section]:!p-4">
          <Hero />
        </div>
        <div className="!m-0 !p-0 [&>section]:!min-h-fit [&>section]:!p-4">
          <WorkExperience />
        </div>
        <div className="!m-0 !p-0 [&>section]:!min-h-fit [&>section]:!p-4">
          <Description />
        </div>
        <div className="!m-0 !p-0 [&>section]:!min-h-fit [&>section]:!p-4">
          <Skills />
        </div>
        <div className="!m-0 !p-0 [&>section]:!min-h-fit [&>section]:!p-4 [&>section]:!pt-4">
          <Projects />
        </div>
        <div className="!m-0 !p-0 [&>section]:!min-h-fit [&>section]:!p-4 [&>section]:!pt-4">
          <ContactForm />
        </div>
        <div className="!m-0 !p-0 [&>section]:!min-h-fit [&>section]:!p-4">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default HomeClient;