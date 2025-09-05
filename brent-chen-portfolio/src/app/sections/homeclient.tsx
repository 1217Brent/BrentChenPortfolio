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
      <div className="flex flex-col gap-2">
        <Hero />
        <WorkExperience />
        <Description />
        <Skills />
        <Projects />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}
export default HomeClient;
