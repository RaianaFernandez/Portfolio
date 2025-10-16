import JobImageCard from "./JobImageCard.jsx";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
function ExperienceItem({ job }) {
  const { language } = useContext(LanguageContext);
  return (
    <li className="relative pl-8 md:pl-0 pb-12 last:pb-0">
      {/* O Círculo da Timeline (e a sua linha) */}
      {/* Agora, este elemento é o responsável por toda a timeline */}
      <div
        className="
          absolute top-1
          w-3 h-full // Ocupa a altura toda para podermos desenhar a linha
          // LÓGICA RESPONSIVA DE POSIÇÃO:
          left-0              // Por padrão (mobile), fica no canto esquerdo
          md:left-[41.66%]    // Em desktop, move-se para 41.66% (o fim da coluna de 5/12)
        "
      >
        {/* O Círculo em si */}
        <span className="block w-3 h-3 rounded-full bg-neon-blue"></span>

        {/* A Linha Vertical que sai do círculo para baixo */}
        <div className="mx-auto w-px h-full bg-neon-blue/30"></div>
      </div>

      {/* O Container do Conteúdo */}
      <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
        {/* Coluna da Esquerda (Imagem) */}
        {/* Adicionamos padding à direita em desktop para dar espaço à timeline */}
        <div className="w-full md:w-5/12 md:pr-8 flex flex-col items-center">
          <JobImageCard image={job.img} tags={job.tools[language]} />
        </div>

        {/* Coluna da Direita (Texto) */}
        {/* Adicionamos padding à esquerda em desktop */}
        <div className="w-full max-w-[600px] md:w-7/12 md:pl-8 text-justify">
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-white">
              {job.title[language]}
            </h3>
            <p className="text-sm text-gray-400 my-1">
              {job.subtitle[language]}
            </p>
            <p className="text-base text-gray-300 font-light">
              {job.description[language]}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ExperienceItem;
