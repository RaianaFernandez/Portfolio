import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import Home from "./pages/Home.jsx"; // Note o novo caminho
import Project from "./pages/Project.jsx";

import { translations } from "./data/translations";
import { LanguageContext } from "./context/LanguageContext";
import "./App.css";

function App() {
  const [language, setLanguage] = useState("en");
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <LanguageContext.Provider value={{ translations, language, setLanguage }}>
      <Routes location={background || location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="project/:slug" element={<Project />} />
        </Route>
      </Routes>

      {background && (
        <Routes>
          <Route path="/project/:slug" element={<Project isModal={true} />} />
        </Routes>
      )}
    </LanguageContext.Provider>
  );
}

export default App;
