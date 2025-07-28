// import Layout from "../src/components/layout/Layout";
import Layout from "../components/layout/Layout";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import Testimonial from "@/components/sections/Testimonials";

// If using App Router (Next.js 13+), this would be app/page.js
// If using Pages Router, this would be pages/index.js

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonial />
      <Contact />
    </Layout>
  );
}
