import { FaEnvelope, FaPhone, FaWhatsapp, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer class="bg-slate-900 flex flex-col justify-center items-center p-4 gap-3">
      <p>&copy; 2025 Dexign. All rights reserved</p>
      <div class="grid grid-cols-5 gap-3">
        <a
          href="mailto:dexign083@gmail.com"
          class="w-10 h-10 flex justify-center items-center py-2 px-2 bg-cyan-600 hover:shadow-cyan-400 hover:shadow-md hover:bg-cyan-500 rounded-full"
        >
          <FaEnvelope className="text-lg" />
        </a>
        <a
          href="tel:+234 9163345794"
          class="w-10 h-10 flex justify-center items-center py-2 px-2 bg-cyan-600 hover:shadow-cyan-400 hover:shadow-md hover:bg-cyan-500 rounded-full"
        >
          <FaPhone className="text-lg" />
        </a>
        <a
          href="https://wa.me/2347069230704"
          class="w-10 h-10 flex justify-center items-center py-2 px-2 bg-cyan-600 hover:shadow-cyan-400 hover:shadow-md hover:bg-cyan-500 rounded-full"
        >
          <FaWhatsapp className="text-lg" />
        </a>
        <a
          href="https://github.com/JohnSanusi"
          class="w-10 h-10 flex justify-center items-center py-2 px-2 bg-cyan-600 hover:shadow-cyan-400 hover:shadow-md hover:bg-cyan-500 rounded-full"
        >
          <FaGithub className="text-lg" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
