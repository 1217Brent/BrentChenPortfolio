"use client";
import Footer from "./footer";
import Hero from "./hero";
import Projects from "./projects";
import Navbar from "../components/navbar";
import ContactForm from "./contact";
function HomeClient() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <ContactForm />
      <Footer />
    </>
  );
}
export default HomeClient;
