import { useContext } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { LanguageContext } from "../../context/LanguageContext";
import React from "react";

function CoreSkills() {
  const { translations, language } = useContext(LanguageContext);
  const features = translations[language].coreSkills.features;

  return (
    <div className="h-full flex flex-col">
      <p className="font-extralight text-xl mb-6">
        {translations[language].coreSkills.title}
      </p>

      {/* A UL é um container normal. A linha é um div estático. */}
      <ul className="relative flex flex-col justify-between grow">
        <motion.div
          className="absolute left-[3.5px] top-3 bottom-3 w-px bg-neon-blue origin-top"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1.25, ease: "linear" }}
          viewport={{ once: true }}
        />

        {features.map((feature, index) => (
          // A 'LI' AGORA É ESTÁTICA. É APENAS A "MOLDURA".
          <li key={index} className="relative pl-8 py-2 sm:py-0">
            {/* O CÍRCULO: Tem a sua própria animação de whileInView */}
            <motion.span
              className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-neon-blue"
              initial={{ opacity: 0, scale: 0.0 }} // Começa invisível e um pouco menor
              whileInView={{ opacity: 1, scale: 1 }} // Anima para visível e no tamanho normal
              transition={{
                duration: 0.2,
                ease: "linear",
                delay: index * 0.2, // O MESMO atraso da cascata
              }}
              viewport={{ once: true }}
            ></motion.span>

            {/* O TEXTO: Tem a sua própria animação de whileInView */}
            <motion.span
              className="text-white text-lg block origin-left"
              initial={{ opacity: 0, scale: 0.9 }} // Começa invisível e um pouco menor
              whileInView={{ opacity: 1, scale: 1 }} // Anima para visível e no tamanho normal
              transition={{
                duration: 0.2,
                ease: "linear",
                delay: index * 0.2, // O MESMO atraso da cascata
              }}
              viewport={{ once: true }}
            >
              {feature}
            </motion.span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CoreSkills;
