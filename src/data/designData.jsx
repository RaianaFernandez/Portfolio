// src/data/designData.js

const imageModules = import.meta.glob(
  "../assets/designPortfolio/*.{png,jpg,webp,svg}",
  { eager: true }
);

export const designData = Object.entries(imageModules).map(
  ([path, module], index) => {
    const fileName = path
      .split("/")
      .pop()
      .replace(/\.[^/.]+$/, "");

    return {
      id: index + 1,
      src: module.default,
      alt: fileName.replace(/-/g, " "),
    };
  }
);
