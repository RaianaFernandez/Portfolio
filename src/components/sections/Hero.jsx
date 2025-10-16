import { useContext } from "react";
import Header from "../layout/Header";
import { LanguageContext } from "../../context/LanguageContext";
import { TiStarFullOutline } from "react-icons/ti";
import BlueButton from "../ui/BlueButton.jsx";
import Foto from "../../assets/foto.png";
import Icones from "../../assets/icons.svg";
import { motion, useScroll, useTransform } from "framer-motion";
function Hero() {
  const { translations, language } = useContext(LanguageContext);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  return (
    <section className="z-0 sticky top-0 w-full">
      <motion.div className="w-full min-h-screen flex flex-col overflow-hidden px-4 sm:px-6 lg:px-8">
        <Header />
        <div className="grow w-full flex justify-between items-stretch relative group">
          <div className="flex flex-col justify-center items-start gap-10 pl-10 z-10">
            {/*container do texto alternado*/}
            <div className="relative w-full max-w-[600px] min-h-[150px] flex items-center">
              <div className="absolute w-full group-hover:opacity-0 p-2 bg-dark-40 rounded-lg transition-opacity duration-500">
                {/*container do titulo*/}
                <h1 className="font-light text-4xl">
                  {translations[language].hero["title"]}
                </h1>
                <h1 className="font-extrabold text-5xl/25">
                  {translations[language].hero["subtitle"]}
                </h1>
                <h1 className="text-neon-blue font-extrabold text-5xl">
                  {translations[language].hero["subtitleBlue"]}
                </h1>
              </div>
              <div className="w-full opacity-0 group-hover:opacity-100 p-2 bg-dark-40 rounded-lg transition-opacity duration-500">
                <p className="text-sm text-justify">
                  {translations[language].hero["description"]}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <TiStarFullOutline className="text-neon-blue text-2xl" />
              {translations[language].hero["experience"]}
            </div>
            <BlueButton
              text={translations[language].hero["button"]}
              px="px-10"
              fontSize="text-3xl"
              href="#contact"
            />
          </div>
          <div className="absolute grow w-full flex items-end justify-center inset-0">
            <img
              src={Foto}
              className="
              z-20
              absolute      
              w-[500px]
              mx-[70px]
              -bottom-[0%]
              sm:right-0"
            />
            <img
              src={Icones}
              className="
              z-10
              absolute      
              w-[640px]
              -bottom-[0%]
              sm:right-0
              opacity-0
              scale-0
              group-hover:scale-100 group-hover:opacity-100
              transition-all
              duration-500
              ease-bounce"
            />
            <div
              className="
              absolute      
              aspect-square
              w-[640px]
              -bottom-[30%]
              sm:right-0
              bg-gradient-to-t from-neon-blue to-dark-bg
              rounded-full
              opacity-30"
            ></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
export default Hero;
