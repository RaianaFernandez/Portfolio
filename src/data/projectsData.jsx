import portfolioUiImg from "../assets/portfolioUi.png";
import InteligenciaMunicipalImg from "../assets/InteligenciaMunicipalUi.png";
import poupitImg from "../assets/poupitUi.png";
import missaoImg from "../assets/missaoUi.png";
import poucoPrazoImg from "../assets/poucoprazoUi.png";
import cityCashImg from "../assets/citycashUi.png";
import safetyServicesImg from "../assets/safetyServicesUI.png";
import nscTvImg from "../assets/NSCTv.png";
import designImg from "../assets/designKits.png";
import poupitDevices from "../assets/projectImages/poupit-01.png";
import poupitScreens from "../assets/projectImages/poupit-02.png";
import intmDevices from "../assets/projectImages/intm-01.png";
import intmScreens from "../assets/projectImages/intm-02.png";
import missaoDevices from "../assets/projectImages/missao-01.jpg";
import missaoScreens from "../assets/projectImages/missao-02.webp";
import citycashDevices from "../assets/projectImages/citycash-01.png";
import citycashScreens from "../assets/projectImages/citycash-02.webp";
import poucoprazoDevices from "../assets/projectImages/poucoprazo-01.png";
import poucoprazoScreens from "../assets/projectImages/poucoprazo-02.png";
import safetyDevices from "../assets/projectImages/safety-01.png";
import safetyScreens from "../assets/projectImages/safety-02.png";
import portfolioDevices from "../assets/projectImages/portfolio-01.png";
import portfolioScreens from "../assets/projectImages/portfolio-02.png";
export const projectsData = [
  {
    id: 10,
    category: "portfolio",
    slug: "SafetyServices",
    title: {
      pt: ["Desenvolvimento e manutenção de Website e Sistemas"],
      en: ["Softwares & Website Development and Management"],
    },
    subtitle: {
      pt: ["Safety Services"],
      en: ["Safety Services"],
    },
    tools: {
      pt: ["PHP+AJAX", "Js+HTML/CSS", "MySQL", "ETL & Integração de Dados"],
      en: ["PHP+AJAX", "Js+HTML/CSS", "MySQL", "ETL & Data Integration"],
    },
    img: safetyServicesImg,
    repoLink: "",
    liveLink: "http://www.safetyservices.srv.br",
    figmaLink: "",
    galleryImages: [safetyDevices, safetyScreens],
    role: {
      pt: "Desenvolvedora Full-Stack, Arquiteta de Software & Banco de Dados, Especialista em Automação",
      en: "Software & Database Architect, Full-Stack Developer, UI/UX Designer (Internal Systems)",
    },
    objective: {
      pt: "A minha função inicial era focada em melhorias de UI e na manutenção de ferramentas para análise de inconsistências fiscais municipais, o que envolvia o cruzamento de dados de diversas fontes para identificar divergências nas declarações dos contribuintes. No entanto, identifiquei proativamente ineficiências generalizadas devido a processos manuais. O meu papel evoluiu para a arquitetura e desenvolvimento de um conjunto de soluções de automação e integração de dados para modernizar a plataforma e resolver os desafios da equipe.",
      en: "My initial role focused on UI enhancements and maintaining tools for municipal tax discrepancy analysis, which involved cross-referencing data from disparate sources to identify inconsistencies in taxpayer declarations. However, I proactively identified widespread inefficiencies due to manual processes across departments. My role evolved to architecting and developing a suite of automation and data integration solutions to modernize the platform and solve the team's core challenges.",
    },
    process: {
      pt: "Para solucionar os 'gargalos' operacionais, desenhei e implementei vários sistemas-chave do zero:\n • Um motor de ETL configurável para padronizar e automatizar a ingestão de formatos de dados inconsistentes (CSV/JSON).\n• Uma plataforma interna de gestão de tarefas e comunicação com demandas por usuário, quadro de avisos e lembretes.\n• Uma ferramenta de geração de boletins de atividade de clientes, que automatizou um processo manual de dias num único clique.\n• Uma ferramenta de relatórios dinâmicos de cruzamento de dados com extração personalizada e exportação para PDF e Excel.\n• Um sistema completo de gestão de contratos com lembretes automáticos de vencimento.\n• Scripts para automatizar tarefas de gestão de banco de dados que antes eram feitas manualmente via SQL.\nUma das minhas conquistas mais significativas foi unificar duas ferramentas legadas de cálculo de impostos num único módulo, mais preciso e eficiente, tornando os sistemas antigos obsoletos.",
      en: "To solve operational bottlenecks, I designed and implemented several key systems from scratch:\n• An ETL engine to standardize and automate the ingestion of inconsistent data formats (CSV/JSON).\n• An internal task management and communication platform with user-specific demands, notice boards, and reminders, solving critical organizational issues.\n• An automated client activity reporting tool that converted a multi-day manual process into a single-click operation.\n• A dynamic cross-data reporting engine with custom data extraction and export functionalities to PDF and Excel.\n• A comprehensive contract management system with automated deadline reminders.\n• Automated database management scripts for tasks previously done manually via SQL.\n A key achievement was unifying two core legacy tools into a single, more precise tax calculation module, rendering the old systems obsolete.",
    },
    challenges: {
      pt: "Como a minha primeira experiência profissional em programação, foi onde aprendi a programar back-end, evoluindo para uma desenvolvedora full-stack. O grande desafio foi refatorar uma base de código legada, de grande escala e sem documentação. Esta experiência foi instrumental para eu dominar a otimização de performance e de consultas (queries) de banco de dados para volumes de dados massivos. Aprendi a arquitetar ferramentas de conversão de dados genéricas e robustas, capazes de suportar uma grande variedade de fontes de dados inconsistentes.",
      en: "As my first professional programming role, this was where I learned back-end development. The main challenge was refactoring a large-scale, undocumented legacy codebase with inconsistent standards. This experience was instrumental in mastering database performance and query optimization for massive data volumes. I learned to architect robust, generic data conversion tools to support a wide variety of inconsistent data sources, a skill that has become central to my work.",
    },
  },
  {
    id: 1,
    category: "portfolio",
    slug: "InteligênciaMunicipal",
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
    repoLink: "",
    liveLink: "https://inteligenciamunicipal.com.br",
    figmaLink: "",
    galleryImages: [intmDevices, intmScreens],
    role: {
      pt: "Arquiteta de Software & Banco de Dados, Desenvolvedora Full-Stack, Designer UI/UX (Sistemas Internos)",
      en: "Software & Database Architect, Full-Stack Developer, UI/UX Designer (Internal Systems)",
    },
    objective: {
      pt: "O objetivo principal foi liderar a reformulação técnica e visual completa da plataforma legada 'Safety Services', transformando-a no sistema moderno e robusto 'Inteligência Municipal'. As metas centrais eram eliminar uma dívida técnica significativa, fechar vulnerabilidades de segurança críticas, redesenhar o banco de dados para escalabilidade e elevar drasticamente a experiência geral do usuário.",
      en: "The primary objective was to lead the complete technical and visual overhaul of the legacy 'Safety Services' platform, transforming it into the modern and robust 'Inteligência Municipal' system. The core goals were to eliminate significant technical debt, close critical security vulnerabilities, redesign the database for scalability, and dramatically improve the overall user experience.",
    },
    process: {
      pt: "A minha função foi re-arquitetar e redesenhar todo o sistema — uma plataforma complexa composta por mais de 100 páginas de funcionalidades distintas. O processo começou com um redesenho completo do esquema do banco de dados para lidar de forma eficiente com novas funcionalidades e dados em larga escala. Em seguida, refatorei toda a base de código do back-end, implementando padrões consistentes de Programação Orientada a Objetos (POO) e introduzindo medidas de segurança para prevenir vulnerabilidades como injeção de SQL. Paralelamente, liderei o redesign de todas as páginas e ferramentas internas, com foco na melhoria da estética e da experiência do usuário. Este trabalho também envolveu a desativação de módulos legados e obsoletos, cujas funcionalidades foram integradas a sistemas mais novos e completos. O resultado final é uma aplicação limpa, padronizada, segura e escalável, pronta para o crescimento futuro.",
      en: "My function was to re-architect and redesign the entire system a complex platform comprising over 100 distinct functional pages— from the ground up. The process began with a complete redesign of the database schema to efficiently handle new features and large-scale data. I then refactored the entire back-end codebase, implementing consistent Object-Oriented Programming (OOP) patterns and introducing security measures to prevent vulnerabilities like SQL injection. Concurrently, I led the redesign of all internal pages and tools, focusing on improving aesthetics and user experience. This also involved decommissioning obsolete legacy modules whose functionalities were integrated into newer, more comprehensive systems. The final result is a clean, standardized, secure, and scalable application ready for future growth.",
    },
    challenges: {
      pt: "O principal desafio foi compreender e modificar uma base de código legada, complexa, sem documentação e com padrões inconsistentes. Este projeto foi um mergulho profundo na otimização de performance de banco de dados para aplicações de larga escala; tive de pesquisar e testar diversas soluções para garantir que as consultas (queries) e inserções (inserts) no banco de dados permanecessem rápidas e confiáveis sob um grande volume de dados. Também solidificou a minha experiência em padronização de dados, aplicando princípios de ETL para lidar eficazmente com fontes de dados inconsistentes.",
      en: "The main challenge was navigating and modifying a complex, undocumented legacy codebase with inconsistent standards. This project was a deep dive into database and query optimization for large-scale applications; I had to research and test various solutions to ensure database inserts and queries remained fast and reliable under heavy data loads. It also solidified my expertise in data standardization, applying ETL principles to handle inconsistent data sources effectively.",
    },
  },
  {
    id: 2,
    category: "portfolio",
    slug: "Poupit",
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
    repoLink: "",
    liveLink: "https://www.poupit.com.br",
    figmaLink: "",
    galleryImages: [poupitDevices, poupitScreens],
    role: {
      pt: "Idealizadora, Arquiteta de Software e Banco de Dados, Designer UI/UX, Desenvolvedora Full-Stack",
      en: "Product Owner, Database and Software Architect, UI/UX Designer, Full-Stack Developer",
    },
    objective: {
      pt: "O Poupit nasceu como um projeto pessoal proativo para resolver uma necessidade específica identificada no meu local de trabalho, onde os aplicativos financeiros existentes não supriam as nossas demandas de forma satisfatória. Iniciei este projeto por iniciativa própria para criar uma ferramenta personalizada e intuitiva, que posteriormente foi disponibilizada para uso da empresa.",
      en: "Poupit began as a proactive personal project to address a specific need identified at my workplace, where existing financial apps lacked the customized features required for our demands. I initiated this project on my own time to create a tailored, intuitive tool, which was later integrated for company use.",
    },
    process: {
      pt: "O projeto começou como um Produto Mínimo Viável (MVP) com funcionalidades essenciais: formulários para receitas/despesas, resumos mensais e listas de transações. Percebendo o seu potencial, usei esta oportunidade para arquitetar a minha primeira aplicação solo em PHP do zero, transformando o MVP numa plataforma robusta e centrada no usuário. As funcionalidades principais incluem: um dashboard completo com visualização de gráficos, gestão de cartões de crédito, ferramentas de metas e orçamentos, e lembretes de vencimento. Atualmente, o projeto está em processo de implementação da ferramenta de leitura de extratos em CSV, com planos futuros para uma calculadora de investimentos e um módulo de 'dívidas partilhadas' entre usuários.",
      en: "The project started as a Minimum Viable Product (MVP) with core functionalities: forms for income/expenses, monthly summaries, and transaction lists. Recognizing its potential, I used this as an opportunity to architect my first solo PHP application from scratch, transforming the MVP into a robust, user-centric platform. Key features include: a comprehensive dashboard with data visualization, credit card management, budget and goal-setting tools, and payment reminders. The application is currently being expanded to include a CSV statement reader, with future plans for an investment calculator and a shared debt tracking module between users.",
    },
    challenges: {
      pt: "Este foi o meu primeiro projeto de programação solo do zero, um salto significativo em relação à minha experiência anterior, que consistia em manter código existente ou criar pequenos módulos seguindo padrões pré-estabelecidos. O Poupit foi onde eu realmente desenvolvi a minha própria identidade como programadora. Tive a liberdade de testar diferentes abordagens de arquitetura, o que me permitiu solidificar os meus conhecimentos na escrita de código moderno, limpo e eficiente, indo além da simples imitação de padrões legados.",
      en: "This was my first solo programming project from the ground up, a significant leap from my previous experience maintaining existing codebases or building small modules within established patterns. Poupit was where I truly developed my own identity as a developer. I had the freedom to experiment with different architectural approaches, which allowed me to solidify my expertise in writing modern, clean, and efficient code, moving beyond simply imitating legacy patterns.",
    },
  },
  {
    id: 3,
    category: "portfolio",
    slug: "PoucoPrazo",
    title: {
      pt: ["E-commerce de Produtos a Vencer em Promoção"],
      en: ["E-commerce Close to Expiration Products on Sale"],
    },
    subtitle: {
      pt: ["Pouco Prazo"],
      en: ["Pouco Prazo"],
    },
    tools: {
      pt: ["Figma", "Illustrator", "React"],
      en: ["Figma", "Illustrator", "React"],
    },
    img: poucoPrazoImg,
    repoLink: "",
    figmaLink:
      "https://www.figma.com/proto/AJzEZUenQGIkFsFPvbqtuF/Pouco-Prazo?node-id=616-311&p=f&t=SP5KgM578XMdGwqN-0&scaling=scale-down&content-scaling=responsive&page-id=1669%3A162202",
    liveLink: "",
    galleryImages: [poucoprazoDevices, poucoprazoScreens],
    role: {
      pt: "Arquiteta, Designer & Developer",
      en: "Product Designer, UI/UX Designer, System Architecture Collaborator",
    },
    objective: {
      pt: "O Pouco Prazo é uma plataforma com a missão de combater o desperdício de alimentos, conectando comerciantes a consumidores locais para oferecer promoções em produtos perto do vencimento. Contratada como freelancer para assumir temporariamente o papel de um dos sócios, o meu objetivo foi definir a identidade visual do projeto, desenhar toda a interface do usuário e contribuir para a arquitetura fundamental do sistema.",
      en: "PoucoPrazo (ShortTerm) is a mission-driven platform designed to combat food waste by connecting merchants with local consumers to offer promotions on products nearing their expiration date. Brought in as a freelance consultant to temporarily fill a key partner's role, my objective was to define the project's visual identity, design the entire user interface, and contribute to the system's foundational architecture.",
    },
    process: {
      pt: "Participei ativamente na fase de planejamento estratégico, sugerindo funcionalidades-chave para melhorar a experiência tanto do usuário final quanto dos fornecedores, além de propor soluções de logística. Após a conceção inicial, a minha principal entrega foi a criação da interface (UI/UX) completa e responsiva para desktop, tablet e mobile no Figma, estabelecendo todo o sistema de design do projeto.",
      en: "I actively participated in the strategic planning phase, suggesting key features to enhance the user experience for both consumers and suppliers, as well as proposing logistical solutions. Following the initial concept, my primary deliverable was the creation of the complete, responsive UI/UX for desktop, tablet, and mobile platforms within Figma, establishing the project's full design system.",
    },
    challenges: {
      pt: "Este projeto foi a minha primeira imersão profissional num ambiente React. Embora o meu contrato tenha sido focado na entrega do sistema de design no Figma, a oportunidade de estudar a base de código e de receber mentoria direta do desenvolvedor principal do projeto foi de um valor inestimável. Esta imersão forneceu-me uma compreensão fundamental da arquitetura baseada em componentes, do fluxo de dados e das melhores práticas numa aplicação real. Esta experiência solidificou as minhas competências avançadas em Figma e, mais importante, serviu como o gatilho que me motivou a aprofundar os meus estudos para me tornar uma desenvolvedora React.",
      en: "An interesting challenge was implementing the 'Modal Route' navigation using React Router...",
      eng: "This project was my first professional immersion into a React environment. While my contract focused on delivering the complete Figma design system, the opportunity to study the codebase and receive direct mentorship from the project's lead developer was invaluable. This exposure provided me with a foundational understanding of component-based architecture, data flow, and best practices in a real-world application. This experience solidified my advanced skills in Figma and, most importantly, served as the catalyst that sparked my deep dive into becoming a React developer.",
    },
  },
  {
    id: 4,
    category: "portfolio",
    slug: "MissaoMilitar",
    title: {
      pt: ["Site de Cursos para Militares"],
      en: ["Online Course Website For Military Exams"],
    },
    subtitle: {
      pt: ["Missão Militar"],
      en: ["Missão Militar"],
    },
    tools: {
      pt: ["Illustrator", "Photoshop", "JavaScript", "HTML/CSS"],
      en: ["Illustrator", "Photoshop", "JavaScript", "HTML/CSS"],
    },
    img: missaoImg,
    repoLink: "",
    liveLink: "",
    figmaLink: "",
    galleryImages: [missaoDevices, missaoScreens],
    role: {
      pt: "Front-End Developer UI & Brand Designer",
      en: "Desenvolvedora Front-End, Designer de UI & Branding",
    },
    objective: {
      pt: "Como freelancer para o projeto Missão Militar — uma plataforma de cursos online para concursos militares e policiais—fui contratada para criar a interface completa e desenvolver o front-end em colaboração com o profissional de back-end. A minha missão foi criar toda a identidade visual do projeto e traduzi-la numa plataforma de e-learning funcional e intuitiva.",
      en: "As a freelance developer for Missão Militar(Military Mission) — an online platform preparing candidates for military and police exams—I was hired to design the complete user interface and collaboratively develop the front-end. My mission was to create the project's entire visual identity and translate it into a functional, intuitive e-learning platform.",
    },
    process: {
      pt: "Iniciei o trabalho desenhando o branding completo, incluindo a logomarca e a identidade visual, utilizando o Adobe Illustrator e o Photoshop. Após a fase de design, participei ativamente na implementação do front-end, traduzindo a UI aprovada em páginas responsivas e interativas com JavaScript, jQuery, HTML e CSS. Este foi um processo altamente colaborativo, trabalhando em paralelo com o desenvolvedor de back-end para garantir uma integração perfeita.",
      en: "I began by designing the complete branding, including the logo and visual identity, using Adobe Illustrator and Photoshop. Following the design phase, I took an active role in the front-end implementation, translating the approved UI into responsive and interactive pages using JavaScript, jQuery, HTML, and CSS. This was a highly collaborative process, working in parallel with the back-end developer to ensure seamless integration.",
    },
    challenges: {
      pt: "Embora a minha parte no projeto tenha sido concluída com sucesso, o mesmo foi descontinuado devido a fatores de negócio externos. Para mim, este projeto foi um ponto de viragem. Ele marcou o meu primeiro mergulho profundo na criação de um site totalmente adaptativo para múltiplas telas, do zero. O desafio de codificar manualmente um layout responsivo com HTML e CSS puros, antes dos frameworks modernos se popularizarem, foi o verdadeiro ponto de partida que solidificou as minhas competências fundamentais em front-end. Como um testemunho deste marco, eu ainda guardo o código original, com planos de publicá-lo como uma demonstração ao vivo.",
      en: "While my role was successfully completed, the project was ultimately discontinued due to external business factors. For me, this project was a pivotal moment. It marked my first deep dive into creating a fully adaptive website for multiple screens from scratch. The challenge of hand-coding a responsive layout with pure HTML and CSS, before modern frameworks were common, was the true starting point that solidified my foundational front-end skills. As a testament to this milestone, I still maintain the original codebase, with plans to deploy it as a live demo.",
    },
  },
  {
    id: 5,
    category: "portfolio",
    slug: "CityCash",
    title: {
      pt: ["Landing Page Para Cartão de Crédito de Parcerias"],
      en: ["Partnership-Based Credit Card Landing Page"],
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
    repoLink: "",
    liveLink: "",
    figmaLink: "",
    galleryImages: [citycashDevices, citycashScreens],
    role: {
      pt: "Designer de UI, Desenvolvedora Front-End",
      en: "UI Designer, Front-End Developer",
    },
    objective: {
      pt: "O CityCash foi um conceito de fintech inovador para um cartão de crédito e benefícios em lojas parcerias. Fui contratada como a principal designer e desenvolvedora front-end para criar a presença digital inicial e o principal ativo de marketing do projeto.",
      en: "CityCash was an innovative fintech concept for a partnership-based credit card. I was brought on as the lead designer and front-end developer to create the project's initial digital presence and primary marketing asset.",
    },
    process: {
      pt: "Desenhei a interface de usuário completa e o conceito da marca para a landing page principal do projeto. Esta foi uma adoção precoce do conceito de funil de marketing numa única página, projetada para explicar o produto e maximizar a conversão de usuários—uma abordagem que mais tarde se tornaria um padrão na indústria. Após a fase de design, desenvolvi sozinha o front-end, traduzindo o design numa página totalmente responsiva com HTML e CSS puros. Utilizei as técnicas de layout adaptativo da época para garantir a compatibilidade em diversos tamanhos de ecrã, muito antes dos frameworks modernos se popularizarem.",
      en: "I designed the complete user interface and brand concept for the project's main landing page. This was an early adoption of the single-page marketing funnel, designed to explain the product and maximize user conversion—a concept that would later become a standard in the industry. Following the design phase, I single-handedly developed the front-end, translating the design into a fully responsive website using hand-coded HTML and CSS. I employed the adaptive layout techniques of the time to ensure compatibility across various screen sizes, long before modern frameworks became commonplace.",
    },
    challenges: {
      pt: "Um desafio interessante foi implementar a navegação via 'Modal de Rota' usando React Router...",
      en: "While my role was successfully completed, the project was ultimately discontinued due to challenges with local politics and legislation. A key learning from CityCash was observing how external business factors can impact a project's viability, regardless of the quality of the design or code. This project was foundational for my career, solidifying my expertise in creating responsive layouts from scratch with pure HTML and CSS. As a testament to the work, I still maintain the original codebase, with plans to deploy it as a live demo of my early front-end skills.",
    },
  },
  {
    id: 6,
    category: "portfolio",
    slug: "MyPortfolio",
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
    repoLink: "https://github.com/RaianaFernandez/Portfolio",
    liveLink: "",
    figmaLink: "",
    galleryImages: [portfolioDevices, portfolioScreens],
    role: {
      pt: "Arquiteta de Software, Designer UI/UX, Desenvolvedora Full-Stack",
      en: "Software Architect, UI/UX Designer & Full-Stack Developer",
    },
    objective: {
      pt: "O objetivo deste projeto foi criar um portfólio pessoal moderno, interativo e bilingue do zero. Ele foi concebido não apenas como uma vitrine, mas como uma prova viva da minha capacidade de arquitetar e construir uma aplicação completa e pronta para produção, utilizando uma stack de front-end de ponta. A missão principal era demonstrar proficiência em arquitetura de componentes, animações avançadas e padrões de UX modernos.",
      en: "The goal of this project was to create a modern, interactive, and bilingual personal portfolio from the ground up. It was conceived not just as a showcase, but as a  living proof of my ability to architect and build a complete, production-ready application using a cutting-edge front-end stack. The core mission was to demonstrate expertise in component-based architecture, advanced animation, and modern UX patterns.",
    },
    process: {
      pt: "Construída sobre uma fundação moderna com Vite, esta Single-Page Application (SPA) foi arquitetada inteiramente com React. Para a estilização, optei pelo Tailwind CSS v4, aproveitando a sua abordagem utility-first para criar um sistema de design consistente e responsivo. A aplicação apresenta uma arquitetura limpa e baseada em componentes, com uma clara separação entre os dados (geridos em ficheiros dedicados para conteúdo e internacionalização) e a apresentação. A funcionalidade multilingue (inglês/português) é alimentada pela Context API do React para uma gestão de estado global eficiente. Uma funcionalidade-chave é o sistema de roteamento avançado construído com React Router, que implementa um sofisticado padrão de Modal de Rota. Isto fornece a cada projeto um URL partilhável, mantendo uma experiência de usuário fluida e de página única. Todas as animações, desde micro-interações a efeitos complexos controlados pelo scroll, estão a ser implementadas com Framer Motion, utilizando hooks como useScroll e useTransform para um motion design performático e baseado em física. O projeto é continuamente implementado no GitHub Pages..",
      en: "Built on a modern foundation using Vite, this Single-Page Application (SPA) was architected entirely with React. For styling, I chose Tailwind CSS v4, leveraging its utility-first approach to create a consistent and responsive design system. The application features a clean, component-based architecture, with a clear separation between data (managed in dedicated files for content and internationalization) and presentation. The multilingual functionality (English/Portuguese) is powered by React's Context API for efficient global state management. A key feature is the advanced routing system built with React Router. It implements a sophisticated Modal Route pattern, providing each project with a shareable URL while maintaining a seamless, single-page user experience. All animations, from micro-interactions to complex scroll-driven effects, are being implemented with Framer Motion, utilizing hooks like useScroll and useTransform for physics-based, performant motion design. The project is deployed and continuously delivered to GitHub Pages.",
    },
    challenges: {
      pt: "Este projeto foi um mergulho profundo no ecossistema React. O desafio mais significativo foi navegar uma falha de renderização crítica e silenciosa, causada por uma incompatibilidade fundamental entre o recém-lançado React 19 e o React Router v6. O processo de depuração foi uma aula magna em resolução sistemática de problemas, envolvendo isolamento de componentes, análise de dependências, downgrade de versões e, por fim, uma refatoração arquitetónica completa do sistema de roteamento. Esta jornada solidificou a minha experiência em hooks avançados do React, técnicas modernas de CSS-in-JS e animações complexas com Framer Motion. Mais importante, ensinou-me lições inestimáveis sobre depuração, gestão de dependências e arquitetura de aplicações resilientes—transformando-me numa engenheira de software mais confiante e capaz.",
      en: "This project was a deep dive into the React ecosystem. The most significant challenge was navigating a critical, silent rendering failure caused by a fundamental incompatibility between the newly released React 19 and React Router v6. The debugging process was a masterclass in systematic problem-solving, involving component isolation, dependency analysis, version downgrading, and ultimately, a complete architectural refactor of the routing system. This journey solidified my expertise in advanced React hooks, modern CSS-in-JS techniques, and complex animation with Framer Motion. More importantly, it taught me invaluable real-world lessons in debugging, managing dependencies, and architecting resilient applications—transforming me into a more confident and capable software engineer.",
    },
  },
  {
    id: 7,
    category: "jobs",
    slug: "SafetyServices",
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
    repoLink: "",
    liveLink: "https://www.safetyservices.srv.br",
    figmaLink: "",
    role: {
      pt: "Arquiteta, Designer & Developer",
      en: "Architect, Designer & Developer",
    },
    objective: {
      pt: "O objetivo deste projeto foi criar um portfólio moderno, responsivo, interativo e bilingue para apresentar as minhas competências...",
      en: "The goal of this project was to create a modern, responsive, interactive, and bilingual portfolio to showcase my skills...",
    },
    process: {
      pt: "Optei por uma stack tecnológica moderna... A base foi construída com Vite e React...",
      en: "I opted for a modern tech stack... The foundation was built with Vite and React...",
    },
    challenges: {
      pt: "Um desafio interessante foi implementar a navegação via 'Modal de Rota' usando React Router...",
      en: "An interesting challenge was implementing the 'Modal Route' navigation using React Router...",
    },
  },
  {
    id: 8,
    category: "jobs",
    slug: "",
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
    repoLink: "https://github.com/seu-usuario/portfolio",
    liveLink: "",
    figmaLink: "",
    role: {
      pt: "Arquiteta, Designer & Developer",
      en: "Architect, Designer & Developer",
    },
    objective: {
      pt: "O objetivo deste projeto foi criar um portfólio moderno, responsivo, interativo e bilingue para apresentar as minhas competências...",
      en: "The goal of this project was to create a modern, responsive, interactive, and bilingual portfolio to showcase my skills...",
    },
    process: {
      pt: "Optei por uma stack tecnológica moderna... A base foi construída com Vite e React...",
      en: "I opted for a modern tech stack... The foundation was built with Vite and React...",
    },
    challenges: {
      pt: "Um desafio interessante foi implementar a navegação via 'Modal de Rota' usando React Router...",
      en: "An interesting challenge was implementing the 'Modal Route' navigation using React Router...",
    },
  },
  {
    id: 9,
    category: "jobs",
    slug: "",
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
    repoLink: "https://github.com/seu-usuario/portfolio",
    liveLink: "",
    figmaLink: "",
    role: {
      pt: "Arquiteta, Designer & Developer",
      en: "Architect, Designer & Developer",
    },
    objective: {
      pt: "O objetivo deste projeto foi criar um portfólio moderno, responsivo, interativo e bilingue para apresentar as minhas competências...",
      en: "The goal of this project was to create a modern, responsive, interactive, and bilingual portfolio to showcase my skills...",
    },
    process: {
      pt: "Optei por uma stack tecnológica moderna... A base foi construída com Vite e React...",
      en: "I opted for a modern tech stack... The foundation was built with Vite and React...",
    },
    challenges: {
      pt: "Um desafio interessante foi implementar a navegação via 'Modal de Rota' usando React Router...",
      en: "An interesting challenge was implementing the 'Modal Route' navigation using React Router...",
    },
  },
];
