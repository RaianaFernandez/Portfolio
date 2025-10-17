import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import BlueButton from "../ui/BlueButton.jsx";
import { FaArrowDownLong } from "react-icons/fa6";
import { skillsData } from "../../data/skillsData.jsx";
import SkillsCard from "../ui/SkillCard.jsx";
import CoreSkills from "../ui/CoreSkills";
import { motion } from "framer-motion";

function Skills() {
  const { translations, language } = useContext(LanguageContext);
  return (
    <motion.section
      id="skills"
      className="relative z-30 py-10 bg-dark-bg-2 w-full min-h-screen flex flex-col overflow-hidden px-5 sm:px-6 lg:px-8 wrap gap-10"
    >
      <div className=" w-full flex justify-between items-center">
        <div className="w-1/2 flex align-center gap-15">
          <div className="relative flex flex-col justify-center items-center">
            <span className="writing-rl text-xl font-light pb-12">
              SCROLL DOWN
            </span>
            <FaArrowDownLong
              className="
              absolute
              bottom-0
              text-neon-blue 
              text-3xl
              animate-pulse-vertical"
            />
          </div>
          <h1 className="text-neon-blue font-semibold text-[3.5rem]/12 flex flex-col justify-center tracking-tight">
            {translations[language].skills["titlel1"]} <br />
            {translations[language].skills["titlel2"]}
          </h1>
        </div>
        <div className="text-white font-light text-base w-1/2 text-right">
          {translations[language].skills["cta"]} &nbsp;&nbsp;&nbsp;
          <BlueButton
            text={translations[language].skills["button"]}
            px="px-6"
            fontSize="text-1xl"
            href="http://wa.me/5548988287957"
          />
        </div>
      </div>
      <div className="w-full flex">
        <div className="flex w-2/3 flex-wrap gap-6">
          {skillsData.map((card) => (
            <SkillsCard
              key={card.id}
              icon={card.icon}
              skills={card.skills[language]}
            />
          ))}
        </div>
        <div className="w-1/3 pl-12">
          <CoreSkills />
        </div>
      </div>
    </motion.section>
  );
}
export default Skills;
