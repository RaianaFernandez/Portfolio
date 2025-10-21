// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, x: -50 }, // Estado inicial: invisível e à esquerda
  visible: { opacity: 1, x: 0 }, // Estado final: visível e na posição original
};
function SkillsCard({ icon, skills }) {
  return (
    <motion.div
      className="p-8 rounded-2xl w-1/4 min-w-[220px] sm:min-w-[230px] border border-white-700 flex flex-col aspect-[1.11]"
      variants={cardVariants}
    >
      <div className="text-neon-blue text-[2.50rem]">{icon}</div>
      <ul className="grow flex flex-col justify-end">
        {skills.map((skill, index) => (
          <li key={index} className="text-sm/5 font-semibold text-white mb-2 ">
            {skill}
          </li>
        ))}
      </ul>
      <div className="w-1/2  h-0.5 bg-neon-blue"></div>
    </motion.div>
  );
}

export default SkillsCard;
