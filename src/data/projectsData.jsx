import portfolioUiImg from "../assets/portfolioUi.png";
import InteligenciaMunicipalImg from "../assets/InteligenciaMunicipalUi.png";
import poupitImg from "../assets/poupitUi.png";
import missaoImg from "../assets/missaoUi.png";
import poucoPrazoImg from "../assets/poucoprazoUi.png";
import cityCashImg from "../assets/citycashUi.png";
import safetyServicesImg from "../assets/safetyServicesUI.png";
import nscTvImg from "../assets/NSCTv.png";
import designImg from "../assets/designKits.png";

export const projectsData = [
  {
    id: 2,
    category: "portfolio",
    title: {
      pt: ["Desenvolvimento de Website e Sistemas"],
      en: ["Softwares & Website Development"],
    },
    subtitle: {
      pt: ["Inteligência Municipal"],
      en: ["Inteligência Municipal"],
    },
    tools: {
      pt: ["PHP+AJAX", "Js+HTML/CSS", "MySQL", "ETL & Integração de Dados"],
      en: ["PHP+AJAX", "Js+HTML/CSS", "MySQL", "ETL & Data Integration"],
    },
    img: InteligenciaMunicipalImg,
  },
  {
    id: 1,
    category: "portfolio",
    title: {
      pt: ["Design & Desenvolvimento de Gerenciador de Finanças"],
      en: ["Finances Manager Design & Development"],
    },
    subtitle: {
      pt: ["Poupit"],
      en: ["Poupit"],
    },
    tools: {
      pt: ["PHP+AJAX", "Js & HTML/CSS", "MySQL"],
      en: ["PHP+AJAX", "Js & HTML/CSS", "MySQL"],
    },
    img: poupitImg,
  },
  {
    id: 3,
    category: "portfolio",
    title: {
      pt: ["E-commerce de Produtos a Vencer em Promoção"],
      en: ["E-commerce Close to Expiration Products on Sale"],
    },
    subtitle: {
      pt: ["Pouco Prazo"],
      en: ["Pouco Prazo"],
    },
    tools: {
      pt: ["Figma", "Illustrator", "JavaScript", "HTML/CSS"],
      en: ["Figma", "Illustrator", "JavaScript", "HTML/CSS"],
    },
    img: poucoPrazoImg,
  },

  {
    id: 4,
    category: "portfolio",
    title: {
      pt: ["Site de Cursos para Militares"],
      en: ["Online Course Website For Military Exams"],
    },
    subtitle: {
      pt: ["Missão Militar"],
      en: ["Missão Militar"],
    },
    tools: {
      pt: ["Illustrator", "JavaScript", "HTML/CSS"],
      en: ["Illustrator", "JavaScript", "HTML/CSS"],
    },
    img: missaoImg,
  },

  {
    id: 5,
    category: "portfolio",
    title: {
      pt: ["Landing Page Para Empresa Cartão de Crédito"],
      en: ["Credit Card Company Landing Page"],
    },
    subtitle: {
      pt: ["CityCash"],
      en: ["CityCash"],
    },
    tools: {
      pt: ["PHP+AJAX", "Js & HTML/CSS", "MySQL"],
      en: ["PHP+AJAX", "Js & HTML/CSS", "MySQL"],
    },
    img: cityCashImg,
  },
  {
    id: 6,
    category: "portfolio",
    title: {
      pt: ["Meu Projeto de Portfólio Pessoal"],
      en: ["My Personal Web Portfolio Project"],
    },
    subtitle: {
      pt: ["Raiana Fernandez"],
      en: ["Raiana Fernandez"],
    },
    tools: {
      pt: ["Figma", "React+Tailwind", "Node.js", "Frame Motion"],
      en: ["Figma", "React+Tailwind", "Node.js", "Frame Motion"],
    },
    img: portfolioUiImg,
  },
  {
    id: 7,
    category: "jobs",
    title: {
      pt: ["Safety Services Informática "],
      en: ["Safety Services Computing "],
    },
    subtitle: {
      pt: ["Desenvolvedora Full Stack & Designer | 2018 - Atual"],
      en: ["Full Stack Developer & Designer | 2018 - Present "],
    },
    description: {
      pt: [
        "Liderei a reformulação completa do website e da identidade visual da empresa. Desenvolvi a arquitetura e implementei módulos de sistema escaláveis e um motor de ETL configurável, focados na integração de dados em alto volume de múltiplas fontes inconsistentes. Esta otimização de processos manuais resultou em ganhos significativos de eficiência interna na administração e comunicação. Adicionalmente, concebi e desenvolvi ferramentas digitais complexas, incluindo sistemas para cálculos de omissão de impostos e extração de relatórios personalizados, que se tornaram produtos finais da empresa.",
      ],
      en: [
        "Led the complete overhaul of the company’s website and visual identity.I architected and implemented scalable system modules and a configurable ETL engine for high-volume data integration, designed to handle massive data tables and inconsistent data formats from multiple third-party sources. This optimization of manual processes resulted in significant internal efficiency gains in administration and communication.Additionally, I conceived and developed complex digital tools, including systems for tax omission calculations and custom report generation, which became final products for the company.",
      ],
    },
    tools: {
      pt: ["PHP+AJAX", "Js+HTML/CSS", "MySQL", "ETL & Integração de Dados"],
      en: ["PHP+AJAX", "Js+HTML/CSS", "MySQL", "ETL & Data Integration"],
    },
    img: safetyServicesImg,
  },
  {
    id: 8,
    category: "jobs",
    title: {
      pt: ["Designer & Dsenvolvedora Autônoma"],
      en: ["Freelancer Designer & Developer"],
    },
    subtitle: {
      pt: ["Designer Gráfica & Desenvolvedor Full-Stack | 2014 - Atual"],
      en: ["Full-Cycle Designer & Full-Stack Developer | 2014 - Present"],
    },
    description: {
      pt: [
        "Gerenciei e entreguei dezenas de projetos de ponta a ponta, abrangendo design gráfico, branding, mídias impressas e digitais, estratégia de mídias sociais e o desenvolvimento de websites responsivos, landing pages e plataformas de e-commerce. Além disso, atuei na criação de materiais gráficos para divulgação impressa e digital em campanhas políticas.",
      ],
      en: [
        "Managed and delivered dozens of end-to-end projects, encompassing graphic design, branding, print and digital media, social media strategy, and the development of responsive websites, landing pages, and e-commerce platforms. Additionally, contributed to creating graphic materials for print and digital dissemination in political campaigns.",
      ],
    },
    tools: {
      pt: ["Front-End", "Back-End", "Social Mídia", "UI/UX Design", "Branding"],
      en: ["Front-End", "Back-End", "Social Midia", "UI/UX Design", "Branding"],
    },
    img: designImg,
  },
  {
    id: 9,
    category: "jobs",
    title: {
      pt: ["NSC Comunicação"],
      en: ["NSC Comunication"],
    },
    subtitle: {
      pt: ["Estagio de Design Gráfico | 2015"],
      en: ["Graphic Design Intern | 2015"],
    },
    description: {
      pt: [
        "Participei ativamente na transição da identidade visual do Grupo RBS para a NSC Comunicação. Contribuí com a criação de kits de impressão, vetorização de logotipos e produção de materiais para mídia impressa, campanhas digitais e eventos corporativos.",
      ],
      en: [
        "Actively participated in the brand transition from Grupo RBS to NSC Communication. Contributed to creating print production kits, logo vectorization, and generating assets for print media, digital campaigns, and corporate events.",
      ],
    },
    tools: {
      pt: ["Photoshop", "Illustrator", "PowerPoint"],
      en: ["Photoshop", "Illustrator", "PowerPoint"],
    },
    img: nscTvImg,
  },
];
