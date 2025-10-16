// src/components/features/DesignPortfolio.jsx

import { designData } from "../../data/designData.jsx"; // Importe os seus dados

function DesignPortfolio() {
  return (
    <div className="w-full h-full flex gap-4">
      {/* O .map() que lê os seus dados e cria as imagens */}
      {designData.map((image) => (
        <div
          className="
            overflow-hidden
              h-90 
              w-auto
              rounded-md
              shadow-lg
              flex-shrink-0
              group"
        >
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className="
                h-full w-full object-cover
                transition-transform duration-500 ease-in-out
                group-hover:scale-120"
          />
        </div>
      ))}
    </div>
  );
}

export default DesignPortfolio;
