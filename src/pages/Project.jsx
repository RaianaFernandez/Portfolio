import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "../data/projectsData.jsx";
import { FaGithub, FaFigma } from "react-icons/fa";
import { IoLink } from "react-icons/io5";

// A prop 'isModal' será passada pelo App.jsx para nos dizer como renderizar.
// Definimos um valor padrão de 'false'.
function Project({ isModal = false }) {
  // 1. LÊ O URL: O hook 'useParams' pega no ':slug' da nossa rota.
  // Se o URL for /project/personal-portfolio, o slug será 'personal-portfolio'.
  const { slug } = useParams();

  // Hook para nos permitir navegar (ex: fechar o modal)
  const navigate = useNavigate();

  // Pega no idioma atual do nosso contexto
  const { translations, language } = useContext(LanguageContext);

  // 2. ENCONTRA O PROJETO: Procuramos no nosso array de dados pelo projeto cujo 'slug' corresponde ao do URL.
  const project = projectsData.find((p) => p.slug === slug);

  // 3. TRATAMENTO DE ERRO: Se o URL for inválido e o projeto não for encontrado, mostramos uma mensagem.
  if (!project) {
    return (
      <div className="text-white text-center p-10">
        <h1 className="text-2xl">Projeto não encontrado</h1>
        <Link
          to="/"
          className="text-neon-blue hover:underline mt-4 inline-block"
        >
          Voltar para o início
        </Link>
      </div>
    );
  }

  // --- O CONTEÚDO DO ESTUDO DE CASO ---
  // Criamos uma variável para o conteúdo para podermos reutilizá-la tanto no modal quanto na página.
  const projectContent = (
    <div className="flex flex-col gap-8">
      {/* --- CABEÇALHO --- */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          {project.title[language]}
        </h1>
        <p className="text-md md:text-lg text-gray-400 mt-1">
          {project.subtitle[language]}
        </p>
      </div>

      {/* --- INFORMAÇÕES RÁPIDAS E LINKS --- */}
      <div className="flex flex-col md:flex-row gap-8 border-y border-gray-700 py-6">
        {/* Renderiza esta secção apenas se a propriedade 'role' existir */}
        {project.role && (
          <div className="w-full md:w-1/3">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">
              {translations[language].Project["subtitle1"]}
            </h3>
            <p className="text-base text-white mt-1">
              {project.role[language]}
            </p>
          </div>
        )}
        {project.tools && (
          <div className="w-full md:w-1/3">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">
              {translations[language].Project["subtitle2"]}
            </h3>
            <p className="text-base text-white mt-1">
              {project.tools[language].join(", ")}
            </p>
          </div>
        )}
        <div className="w-full md:w-1/3 flex flex-col items-start gap-4">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-neon-blue hover:underline"
            >
              <IoLink /> {translations[language].Project["linkText"]}
            </a>
          )}
          {project.repoLink && (
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-neon-blue hover:underline"
            >
              <FaGithub /> {translations[language].Project["gitHubText"]}
            </a>
          )}
          {project.figmaLink && (
            <a
              href={project.figmaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-neon-blue hover:underline"
            >
              <FaFigma /> {translations[language].Project["figmaText"]}
            </a>
          )}
        </div>
      </div>
      {/* --- IMAGEM PRINCIPAL --- */}
      {/* Mostra a primeira imagem da galeria como imagem principal */}
      <div className="w-full flex gap-4">
        {project.galleryImages && project.galleryImages[0] && (
          <div className="w-[48%] aspect-video object-cover rounded-lg shadow-lg overflow-hidden">
            <img
              className="w-full hover:scale-130 transition-all duration-500ms"
              src={project.galleryImages[0]}
              alt={`${project.title[language]}`}
            />
          </div>
        )}
        <div className="w-[48%] aspect-video object-cover rounded-lg shadow-lg overflow-hidden">
          {project.galleryImages && project.galleryImages[1] && (
            <img
              src={project.galleryImages[1]}
              alt={`${project.title[language]}`}
              className="w-full hover:scale-130 transition-all duration-500ms"
            />
          )}
        </div>
      </div>
      {/* --- A HISTÓRIA DO PROJETO --- */}
      {/* Usamos as classes 'prose' do Tailwind para uma tipografia bonita e automática */}
      <div className="prose prose-invert max-w-none text-gray-300">
        {project.objective && (
          <>
            <h2 className="font-bold mt-4 mb-1">
              {translations[language].Project["paragraph1"]}
            </h2>
            <p className="text-sm font-light">{project.objective[language]}</p>
          </>
        )}

        {project.process && (
          <>
            <h2 className="font-bold mt-4 mb-1">
              {translations[language].Project["paragraph2"]}
            </h2>
            <p className="text-sm font-light">
              {project.process[language].split("\n").map((line, index) => (
                // Usar React.Fragment é um pouco mais limpo que <span> aqui
                <React.Fragment key={index}>
                  {line}

                  {index < project.process[language].split("\n").length - 1 && (
                    <br />
                  )}
                </React.Fragment>
              ))}
            </p>
          </>
        )}

        {project.challenges && (
          <>
            <h2 className="font-bold mt-4 mb-1">
              {translations[language].Project["paragraph3"]}
            </h2>
            <p className="text-sm font-light">{project.challenges[language]}</p>
          </>
        )}
      </div>
    </div>
  );

  // 4. SE FOR UM MODAL, RENDERIZA A ESTRUTURA DO MODAL
  if (isModal) {
    return (
      <AnimatePresence>
        <motion.div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => navigate(-1)} // Fecha o modal ao clicar no fundo
        >
          <motion.div
            className="bg-dark-bg-2 p-6 md:p-8 rounded-lg max-w-4xl w-full relative max-h-[90vh] overflow-y-auto no-scrollbar cursor-default"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()} // Impede que clicar dentro do modal o feche
          >
            <button
              onClick={() => navigate(-1)}
              className="absolute top-2 right-2 md:top-4 md:right-4 text-gray-400 hover:text-white text-3xl transition-colors"
            >
              &times;
            </button>
            {projectContent}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  }

  // 5. SE NÃO FOR UM MODAL, RENDERIZA COMO UMA PÁGINA NORMAL
  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto text-white">
      <Link to="/" className="text-neon-blue hover:underline mb-8 inline-block">
        &larr; Voltar para o início
      </Link>
      {projectContent}
    </div>
  );
}

export default Project;
