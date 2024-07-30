import Intro from "@/components/intro";
import AboutMe from "@/components/about";
import Skills from "@/components/skills";
import Resume from "@/components/resume";
import Portfolio from "@/components/portfolio";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen items-center justify-between p-24">
      <Intro />
      <AboutMe />
      <Skills />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
