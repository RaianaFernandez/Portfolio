// src/components/ui/Carousel.jsx

import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Carousel({ children }) {
  // 1. Crie uma "referência" (um apelido) para o nosso container de scroll
  const scrollContainerRef = useRef(null);

  // 2. Crie as funções que farão o scroll
  const scrollLeft = () => {
    // Acessamos o elemento real e dizemos para ele rolar -300px
    scrollContainerRef.current.scrollBy({ left: -500 });
  };

  const scrollRight = () => {
    // Acessamos o elemento real e dizemos para ele rolar +300px
    scrollContainerRef.current.scrollBy({ left: 500 });
  };

  return (
    <div className="w-full flex grow items-center relative">
      {/* Botão Esquerdo */}
      <button
        onClick={scrollLeft}
        className="absolute left-4 p-3 text-dark-bg bg-white rounded-full z-20 opacity-80 hover:opacity-100 transition-opacity"
      >
        <FaArrowLeft />
      </button>

      {/* O Container que vai ter o scroll */}
      <div
        ref={scrollContainerRef} // 3. Atribuímos o "apelido" ao nosso div
        className="w-full flex-grow flex items-center justify-start gap-6 overflow-x-scroll no-scrollbar px-20 scroll-smooth"
      >
        {children} {/* 4. Renderizamos os filhos (os cards) aqui dentro */}
      </div>

      {/* Botão Direito */}
      <button
        onClick={scrollRight}
        className="absolute right-4 p-3 text-dark-bg bg-white rounded-full z-20 opacity-80 hover:opacity-100 transition-opacity"
      >
        <FaArrowRight />
      </button>
    </div>
  );
}

export default Carousel;
