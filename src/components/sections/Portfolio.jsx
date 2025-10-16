import { useContext } from "react";
import { useState } from "react";
import { projectsData } from "../../data/projectsData.jsx";
import ProjectCard from "../ui/ProjectCard.jsx";
import DesignPortfolio from "../ui/DesignPortfolio.jsx";
import Carousel from "../ui/Carousel.jsx";

import { LanguageContext } from "../../context/LanguageContext";
function Portfolio() {
  const { translations, language } = useContext(LanguageContext);
  const [activeTab, setActiveTab] = useState("developing");
  const PortCards = projectsData.filter((p) => p.category === "portfolio");

  return (
    <section className="relative z-30 bg-dark-bg flex flex-col gap-4 min-h-[650px]">
      <h1 className=" p-4 sm:p-6 lg:p-8 font-medium text-3xl">
        {translations[language].Portfolio["title"]}
        <span className="text-neon-blue">
          {translations[language].Portfolio["titleBlue"]}
        </span>
      </h1>
      <div className=" flex flex-col font-medium text-base grow">
        <div className="px-4 sm:px-6 lg:px-8  flex gap-6">
          <button
            className={
              activeTab === "developing" ? "text-neon-blue" : "text-white"
            }
            onClick={() => setActiveTab("developing")}
          >
            {translations[language].Portfolio["subtitle1"]}
          </button>
          <button
            onClick={() => setActiveTab("design")}
            className={activeTab === "design" ? "text-neon-blue" : "text-white"}
          >
            {translations[language].Portfolio["subtitle2"]}
          </button>
        </div>
        {activeTab === "developing" && (
          <Carousel>
            {PortCards.map((card) => (
              <ProjectCard
                key={card.id}
                title={card.title[language]}
                subtitle={card.subtitle[language]}
                image={card.img}
                tools={card.tools[language]}
              />
            ))}
          </Carousel>
        )}
        {activeTab === "design" && (
          <Carousel>
            <DesignPortfolio />
          </Carousel>
        )}
      </div>
    </section>
  );
}
export default Portfolio;
