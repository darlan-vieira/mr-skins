import { Badge } from "@/components/ui/badge";
import ButtonLayot from "@/components/Button";
import hero from "@/assets/hero.png";

const Hero = () => {
    return (
      <section className="hero-gradient min-h-screen md:flex-row flex items-center relative">
        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <Badge className="bg-primary/20 border border-primary text-primary hover:bg-primary/40">
              Mercado em Crescimento
            </Badge>
          </div>
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl sm:text-6xl font-bold">
              Transforme Skins de CS2 em{" "}
              <span className="text-gradient">Dinheiro R$</span>
            </h1>
            <p className="text-xl text-white/70">
              Descubra como investir de forma inteligente no mercado de skins e
              maximize seus lucros com estratégias comprovadas.
            </p>
            <ButtonLayot />
          </div>
          <div className="flex items-center justify-center mt-12 relative overflow-hidden">
            <img
              src={hero}
              alt="imagem de um iphone e algumas skins"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>
    );
}

export default Hero;