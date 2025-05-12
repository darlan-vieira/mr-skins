
import logo2 from "@/assets/logo2.png";
import  {InstagramLogo}  from "@phosphor-icons/react";
import { DiscordLogo } from "@phosphor-icons/react";
import { SteamLogo } from "@phosphor-icons/react";


const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4 ">
            <img
              src={logo2}
              alt="Mr Skins Logo"
              className="h-20 w-auto mx-auto md:mx-0"
            />
            <p className="text-sm text-white/70 md:mx-4">
              Seu especialista em investimentos em skins de CS2.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Guia do Iniciante
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Suporte
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/mrskins.cs2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramLogo size={32} />
              </a>

              <a
                href="https://discord.gg/7TCMzS2e"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DiscordLogo size={32} />
              </a>

              <a
                href="https://steamcommunity.com/id/MrSsuncioN"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SteamLogo size={32} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/70">
          <p>
            &copy; {new Date().getFullYear()} Mr Skins. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

