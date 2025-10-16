import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext"; // ajuste o caminho

function CoreSkills() {
  const { translations, language } = useContext(LanguageContext);
  const features = translations[language].coreSkills.features;

  return (
    <div className="h-full flex flex-col">
      <p className="font-extralight text-xl mb-6">
        {translations[language].coreSkills.title}
      </p>

      <ul
        className="relative
      flex flex-col justify-between grow // <-- AS MUDANÇAS ESTÃO AQUI
      before:absolute 
      before:left-[3px] 
      before:top-5 
      before:h-[93%]
      before:w-px 
      before:bg-neon-blue 
      before:opacity-30"
      >
        {features.map((feature, index) => (
          <li key={index} className="relative pl-8">
            {/* O Círculo */}
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-neon-blue"></span>
            {/* O Texto */}
            <span className="text-white text-lg">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CoreSkills;
