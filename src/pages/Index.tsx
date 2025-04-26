import { Badge } from "@/components/ui/badge";
import { HandCoins, ShieldCheck, TrendingUp, Users } from "lucide-react";
import logo from "@/assets/logo.png";
import perfil from "@/assets/perfil.png";
import EmailCaptureForm from "@/components/EmailCaptureForm";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const benefits = [
  {
    icon: TrendingUp,
    title: "Alta Valorização",
    description: "Skins raras podem valorizar mais de 300% em poucos meses"
  },
  {
    icon: HandCoins,
    title: "Liquidez Garantida",
    description: "Negocie suas skins rapidamente em marketplaces seguros"
  },
  {
    icon: ShieldCheck,
    title: "Segurança Total",
    description: "Sistema Steam Guard e marketplaces verificados"
  },
  {
    icon: Users,
    title: "Comunidade Ativa",
    description: "Mais de 30 milhões de jogadores ativos mensalmente"
  }
];

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header>
        <div>
          <img src={logo} alt="Logo" className="h-32" />
        </div>
      </header>
      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center relative">
        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <Badge className="bg-primary/20 border border-primary text-primary hover:bg-primary/40">
              Mercado em Crescimento
            </Badge>
          </div>
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl sm:text-6xl font-bold">
              Transforme Skins de CS2 em{" "}
              <span className="text-gradient">Investimentos Lucrativos</span>
            </h1>
            <p className="text-xl text-white/70">
              Descubra como investir de forma inteligente no mercado de skins e
              maximize seus lucros com estratégias comprovadas.
            </p>
            <EmailCaptureForm />
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card p-8 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge className="bg-primary/20 text-primary text-md font-semibold hover:bg-primary/30">
                  Quem sou eu? Prazer Gabriel.
                </Badge>
                <h2 className="text-lg text-white/70 ml-3">
                  Olá jogadores! <br /> Sou Gabriel, colecionador e especialista
                  em skins de CS2, com uma seleção cuidadosa de skins raras e
                  valiosas. Minha missão é fornecer aos jogadores as melhores
                  oportunidades para personalizar suas experiências de jogo e se
                  destacar nas competições.
                </h2>
                <p className="text-primary">
                  Com mais de 500 transações realizadas e com mais de 350 itens
                  no inventário, a Mr Skins se tornou referência no mercado de
                  skins de CS2.
                </p>
                <ul className="space-y-4 text-white/90">
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="text-primary" />
                    Segurança garantida
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="text-primary" />
                    +500 jogadores satisfeitos
                  </li>
                  <li className="flex items-center gap-2">
                    <TrendingUp className="text-primary" />
                    100% de lucro em skins raras
                  </li>
                </ul>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <img
                  src={perfil}
                  alt="Foto de perfil"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge className="bg-primary/20 border border-primary text-primary hover:bg-primary/40">
              Vantagens
            </Badge>
            <h2 className="text-3xl font-bold mt-4">
              Por que Investir em Skins de CS2?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="glass-card p-6 rounded-xl space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-white/70">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge className="bg-primary/20 border border-primary text-primary hover:bg-primary/40">
              Depoimentos
            </Badge>
            <h2 className="text-3xl font-bold mt-4">
              O Que Dizem Nossos Clientes
            </h2>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
