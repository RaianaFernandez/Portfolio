import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io5";
import { AiOutlineLinkedin } from "react-icons/ai";

export const socialLinks = [
  {
    id: 1,
    aria: "Instagram",
    icon: <IoLogoInstagram className="text-dark-bg w-[20px] h-[20px]" />,
    link: "https://www.instagram.com/raianafernandez",
  },
  {
    id: 2,
    aria: "LinkedIn",
    icon: <AiOutlineLinkedin className="text-dark-bg w-[20px] h-[20px]" />,
    link: "https://www.linkedin.com/in/raianafernandez/",
  },
  {
    id: 3,
    aria: "Whatsapp",
    icon: <IoLogoWhatsapp className="text-dark-bg w-[20px] h-[20px]" />,
    link: "https://wa.me/5548988287957",
  },
];
