function ProjectCard({ image, title, subtitle, tools }) {
  return (
    <div className="relative p-8 rounded-xl w-1/4 min-w-[400px] bg-grey-bg flex flex-col aspect-square overflow-hidden gap-5 group">
      <ul className="absolute w-[400px] top-4 right-4 flex  gap-1 justify-end flex-wrap">
        {tools.map((tool, index) => (
          <li
            key={index}
            className="text-sm text-white bg-bluishGrey rounded-md p-1"
          >
            {tool}
          </li>
        ))}
      </ul>
      <div className="w-4/5 h-2/3 flex flex-col items-start justify-center gap-1 z-10">
        <span className="text-sm">{subtitle}</span>
        <h2 className="text-xl">{title}</h2>
      </div>
      <img
        src={image}
        className="absolute -bottom-[15%] left-0 w-full group-hover:scale-110 transition-transform duration-500 ease-in-out"
      />
    </div>
  );
}

export default ProjectCard;
