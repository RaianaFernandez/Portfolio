import { socialLinks } from "../../data/socialLinks.jsx"; // Importe os seus dados

function SocialLinks() {
  return (
    <div className="flex gap-6">
      {socialLinks.map((socialLink) => (
        <a
          href={socialLink.link}
          className="p-3 rounded-full bg-neon-blue flex justify-center items-center hover:bg-white"
          key={socialLink.id}
          target="_blank" // Boa prática: abrir links sociais numa nova aba
          rel="noopener noreferrer"
          aria-label={socialLink.aria}
        >
          {socialLink.icon}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
