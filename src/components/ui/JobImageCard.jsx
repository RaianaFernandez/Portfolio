function JobImageCard({ image, tags }) {
  return (
    // O container principal, com sombra e bordas arredondadas
    <div className="relative w-[300px] aspect-square rounded-lg overflow-hidden shadow-lg bg-grey-bg group">
      {/* Imagem de fundo */}
      <img
        src={image}
        alt=""
        className="absolute w-full bottom-0 z-0 group-hover:scale-110 transition-transform duration-500 ease-in-out"
      />

      {/* Tags de ferramentas, posicionadas no topo */}
      <ul className="absolute top-3 left-3 flex flex-wrap gap-2 z-10">
        {tags.map((tag, index) => (
          <li
            key={index}
            className="text-xs text-white bg-bluishGrey backdrop-blur-sm rounded-md py-1 px-2"
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobImageCard;
