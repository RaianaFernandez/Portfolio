import Hero from "../components/sections/Hero.jsx";
import Skills from "../components/sections/Skills.jsx";
import Portfolio from "../components/sections/Portfolio.jsx";
import Experience from "../components/sections/Experience.jsx";
// Importe aqui a sua futura secção de Contato também

function Home() {
  return (
    <>
      <div id="about"></div>
      <Hero />
      <Skills />
      <Portfolio />
      <Experience />
    </>
  );
}

export default Home;
