import { useContext } from "react";
import Header from "../layout/Header";
import { LanguageContext } from "../../context/LanguageContext";
import { TiStarFullOutline } from "react-icons/ti";
import BlueButton from "../ui/BlueButton.jsx";
import Foto from "../../assets/foto.png";
import Icones from "../../assets/icons.svg";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";
function Hero() {
  const { translations, language } = useContext(LanguageContext);
  const { scrollYProgress } = useScroll();
  // eslint-disable-next-line no-unused-vars
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  return (
    <section className="z-0 sticky top-0 w-full">
      <div className="w-full min-h-screen flex flex-col overflow-hidden py-5 px-4 sm:py-0 sm:px-6 lg:px-8">
        <Header />
        <div className="grow w-full flex relative group flex-col-reverse sm:flex-row justify-between sm:items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -75 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full sm:w-1/2 sm:min-w-[480px] lg:min-w-[600px] flex flex-col justify-center items-start gap-2 sm:gap-10 py-5 px-2 sm:pl-10 z-30 bg-dark-bg sm:bg-dark-bg/40 rounded-lg "
          >
            {/*container do texto alternado*/}
            <div className="relative w-full flex items-center ">
              <div className="absolute w-full group-hover:opacity-0 transition-opacity duration-500">
                {/*container do titulo*/}
                <h1 className="font-light text-2xl lg:text-4xl">
                  {translations[language].hero["title"]}
                </h1>
                <h1
                  className={
                    language === "en"
                      ? "font-extrabold text-3xl/12 sm:text-[30px]/16 lg:text-5xl/20"
                      : "font-extrabold text-3xl/12  sm:text-3xl/16 lg:text-[40px]/18"
                  }
                >
                  {translations[language].hero["subtitle"]}
                </h1>
                <h1
                  className={
                    language === "en"
                      ? "text-neon-blue font-extrabold  text-3xl sm:text-4xl lg:text-5xl"
                      : "text-neon-blue font-extrabold  text-3xl sm:text-4xl lg:text-[40px]"
                  }
                >
                  {translations[language].hero["subtitleBlue"]}
                </h1>
              </div>
              <div className="w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-[14px] sm:text-sm text-justify max-w-[600px]">
                  {translations[language].hero["description"]}
                </p>
              </div>
            </div>
            <div className="flex flex-row-reverse sm:flex-col w-full justify-end items-center sm:items-start gap-6">
              <div className="flex items-center gap-3 flex-wrap">
                <TiStarFullOutline className="text-neon-blue text-2xl" />
                {translations[language].hero["experience"]}
              </div>
              <BlueButton
                text={translations[language].hero["button"]}
                px="px-5 lg:px-10"
                fontSize="text-2x1 sm:text-[18px] lg:text-3xl"
                href="http://wa.me/5548988287957"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 75 }} // Estado inicial: invisível e 75px para baixo
            whileInView={{ opacity: 1, x: 0 }} // Estado final: visível e na posição original
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }} // Animação acontece apenas uma vez
            className="relative grow w-full sm:w-1/2 flex items-end justify-center inset-0"
          >
            <img
              src={Foto}
              className="
              z-20
              absolute
              h-full
              sm:h-auto
              sm:w-[500px]      
              sm:min-w-[500px]
              mx-[70px]
              -bottom-[0%]
              sm:right-0"
            />
            <img
              src={Icones}
              className="
              z-10
              absolute
              h-full
              sm:h-auto      
              sm:w-[640px]
              sm:min-w-[640px]
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
              h-full
              sm:h-auto
              sm:w-[640px]
              -bottom-[30%]
              sm:right-0
              bg-gradient-to-t from-neon-blue to-dark-bg
              rounded-full
              opacity-30"
            ></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
