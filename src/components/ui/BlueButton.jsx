function BlueButton({ text, px, fontSize, href = "#" }) {
  return (
    <a
      href={href}
      className={`bg-neon-blue ${px} ${fontSize} py-3 text-center text-dark-bg rounded-full font-regular hover:bg-white`}
    >
      {text}
    </a>
  );
}
export default BlueButton;
