import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import flagBr from "../../assets/flag-br.svg";
import flagEng from "../../assets/flag-eng.svg";
import logo from "../../assets/RF.svg";

function Header() {
  const { translations, language, setLanguage } = useContext(LanguageContext);

  return (
    <div className="w-full flex justify-between items-center">
      <img className="w-[70px]" src={logo} alt="Raiana Fernandez" />
      <nav className="text-sm font-medium flex justify-start gap-4 lg:gap-10 sm:gap-6">
        <a
          href="#about"
          className="relative 
          hover:text-neon-blue
          transition-all 
          duration-300
          after:w-0 
          after:absolute 
          after:bottom-[0] 
          after:left-0 
          hover:after:w-full 
          after:h-0.5 
          after:bg-neon-blue 
          after:transition-all 
          after:duration-300"
        >
          {translations[language].navLink[1]}
        </a>
        <a
          href="#skills"
          className="relative 
          hover:text-neon-blue
          transition-all 
          duration-300
          after:w-0 
          after:absolute 
          after:bottom-[0] 
          after:left-0 
          hover:after:w-full 
          after:h-0.5 
          after:bg-neon-blue 
          after:transition-all 
          after:duration-300"
        >
          {translations[language].navLink[2]}
        </a>
        <a
          href="#portfolio"
          className="relative 
          hover:text-neon-blue
          transition-all 
          duration-300
          after:w-0 
          after:absolute 
          after:bottom-[0] 
          after:left-0 
          hover:after:w-full 
          after:h-0.5 
          after:bg-neon-blue 
          after:transition-all 
          after:duration-300"
        >
          {translations[language].navLink[3]}
        </a>
        <a
          href="#experience"
          className="relative 
          hover:text-neon-blue
          transition-all 
          duration-300
          after:w-0 
          after:absolute 
          after:bottom-[0] 
          after:left-0 
          hover:after:w-full 
          after:h-0.5 
          after:bg-neon-blue 
          after:transition-all 
          after:duration-300"
        >
          {translations[language].navLink[4]}
        </a>
        <a
          href="#contact"
          className="relative 
          hover:text-neon-blue
          transition-all 
          duration-300
          after:w-0 
          after:absolute 
          after:bottom-[0] 
          after:left-0 
          hover:after:w-full 
          after:h-0.5 
          after:bg-neon-blue 
          after:transition-all 
          after:duration-300"
        >
          {translations[language].navLink[5]}
        </a>
        <div className="w-full flex gap-2 justify-center">
          <div
            className="w-[25px] h-[25px] rounded-full cursor-pointer"
            onClick={() => setLanguage("pt")}
          >
            <img src={flagBr} alt="Português" />
          </div>
          <div
            className="w-[25px] h-[25px] rounded-full cursor-pointer"
            onClick={() => setLanguage("en")}
          >
            <img src={flagEng} alt="English" />
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Header;
