import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import SocialLinks from "../ui/SocialLinks.jsx";
import logo from "../../assets/RF.svg";
function Footer() {
  const { translations, language } = useContext(LanguageContext);
  return (
    <section
      id="contact"
      className="p-4 sm:p-6 lg:p-8 w-full min-h-[300px] bg-dark-bg flex justify-around items-center flex-wrap"
    >
      <img className="w-[80px]" src={logo} alt="Raiana Fernandez" />
      <nav className="text-sm flex justify-start gap-10">
        <a href="#about" className="hover:text-neon-blue">
          {translations[language].navLink[1]}
        </a>
        <a href="#skills" className="hover:text-neon-blue">
          {translations[language].navLink[2]}
        </a>
        <a href="#portfolio" className="hover:text-neon-blue">
          {translations[language].navLink[3]}
        </a>
        <a href="#experience" className="hover:text-neon-blue">
          {translations[language].navLink[4]}
        </a>
      </nav>
      <SocialLinks />
    </section>
  );
}
export default Footer;
