import { TbSpeakerphone } from "react-icons/tb";
import { LuCodeXml } from "react-icons/lu";
import { FiDatabase } from "react-icons/fi";
import VectorPen from "../components/icons/VectorPen";
import ConnectedDots from "../components/icons/ConnectedDots";
import LightBulb from "../components/icons/LightBulb";
export const skillsData = [
  {
    id: 1,
    icon: <LuCodeXml stroke-width="1.5" />,
    skills: {
      pt: ["PHP (OOP)", "Node.js", "ETL & Integração de Dados"],
      en: ["PHP (OOP)", "Node.js", "ETL & Data Integration"],
    },
  },
  {
    id: 2,
    icon: <FiDatabase stroke-width="1.2" />,
    skills: {
      pt: ["MySQL", "PostgreSQL"],
      en: ["MySQL", "PostgreSQL"],
    },
  },
  {
    id: 3,
    icon: <LightBulb />,
    skills: {
      pt: ["JavaScript", "HTML", "CSS"],
      en: ["JavaScript", "HTML", "CSS"],
    },
  },
  {
    id: 4,
    icon: <ConnectedDots />,
    skills: {
      pt: ["React", "Tailwind CSS", "Git & GitHub"],
      en: ["React", "Tailwind CSS", "Git & GitHub"],
    },
  },
  {
    id: 5,
    icon: <VectorPen />,
    skills: {
      pt: ["Figma", "Photoshop", "Illustrator"],
      en: ["Figma", "Photoshop", "Illustrator"],
    },
  },
  {
    id: 6,
    icon: <TbSpeakerphone stroke-width="1.2" />,
    skills: {
      pt: ["Portugês Nativo", "Inglês - C1"],
      en: ["Native Portugese", "English - C1"],
    },
  },
];
