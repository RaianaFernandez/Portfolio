// src/components/sections/Experience.jsx

import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { projectsData } from "../../data/projectsData.jsx";
import ExperienceItem from "../ui/ExperienceItem.jsx"; // O nosso NOVO componente

function Experience() {
  const { translations, language } = useContext(LanguageContext);
  const jobHistory = projectsData.filter((p) => p.category === "jobs");

  return (
    <section className="relative z-30 p-4 sm:p-6 lg:px-8 lg:py-12 w-full min-h-screen bg-dark-bg-2 flex flex-col gap-20">
      <div className="w-full flex gap-6 justify-center sm:justify-end items-center flex-wrap">
        <h2 className="text-4xl font-semibold flex gap-2">
          {translations[language].Experience["title"]}
          <span className="text-neon-blue">
            {translations[language].Experience["titleBlue"]}
          </span>
        </h2>
      </div>
      <ul className="relative">
        {jobHistory.map((job) => (
          <ExperienceItem key={job.id} job={job} />
        ))}
      </ul>
    </section>
  );
}

export default Experience;
