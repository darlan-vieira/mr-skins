
import React from 'react';
import { Button } from "@/components/ui/button";
import logo_2 from "@/assets/logo_2.png";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <img 
              src={logo_2} 
              alt="Mr Skins Logo" 
              className="h-10 w-auto"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-xl">Mr Skins</h3>
            <p className="text-sm text-white/70">
              Sua plataforma especializada em investimentos em skins de CS2.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-primary transition-colors">Guia do Iniciante</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Suporte</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <Button variant="ghost" className="hover:text-primary" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
              </Button>
              <Button variant="ghost" className="hover:text-primary" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">Discord</a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/70">
          <p>&copy; {new Date().getFullYear()} Mr Skins. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

