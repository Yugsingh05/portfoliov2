import Navbar from "@/components/Navbar/Navbar";
import Herosection from "@/components/Herosection/Herosection";
import About from "@/components/About/About";
import SkillsLayout from "@/components/Skills/SkillsLayout";
import Projects from "@/components/Projects/Projects";
import MyJourney from "@/components/MyJourney/MyJourney";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Herosection />
        <About />
        <SkillsLayout />
        <Projects />
        <MyJourney />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
