"use client";
import Footer from "./footer";
import Hero from "./hero";
import Projects from "./projects"
import ContactForm from "./contact";
import WorkExperience from "./work";
import Description from "./description";
import Skills from "./skills";
function HomeClient() {
  return (
    <>
      <Hero />
      <WorkExperience />
      <Description />
      <Skills />
      <Projects />
      <ContactForm />
      <Footer />
    </>
  );
}
export default HomeClient;
