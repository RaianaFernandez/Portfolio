import { useState } from "react";

import Layout from "./components/layout/Layout.jsx";
import Hero from "./components/sections/Hero.jsx";
import Skills from "./components/sections/Skills.jsx";
import Portfolio from "./components/sections/Portfolio.jsx";
import Experience from "./components/sections/Experience.jsx";
import { translations } from "./data/translations";
import { LanguageContext } from "./context/LanguageContext";
import "./App.css";

function App() {
  const [language, setLanguage] = useState("en");
  return (
    <LanguageContext.Provider value={{ translations, language, setLanguage }}>
      <Layout>
        <Hero />
        <Skills />
        {<Portfolio />}
        {<Experience />}
      </Layout>
    </LanguageContext.Provider>
  );
}

export default App;
