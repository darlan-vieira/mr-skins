
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const testimonials = [
  {
    name: "Fabrício Correa",
    role: "Gamer",
    content: "Super prestativo!",
    rating: 5,
  },
  {
    name: "George Augusto",
    role: "Trader de Skins",
    content: " Oh brabo, o melhor do Brasil!",
    rating: 5,
  },
  {
    name: "Matheus Maggi",
    role: "Gamer",
    content: "Comprei um kit e chegou rapidin, valeu irmão!!",
    rating: 5,
  },
  {
    name: "Darlan Vieira",
    role: "Gamer",
    content: "Obrigado por mostrar o lado lucrativo do cs2!",
    rating: 5,
  },
];

const Testimonials = () => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <Card key={index} className="glass-card p-6 space-y-4">
          <div className="flex gap-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-primary text-primary" />
            ))}
          </div>
          <p className="text-white/90">{testimonial.content}</p>
          <div className="pt-4 border-t border-white/10">
            <p className="font-semibold">{testimonial.name}</p>
            <p className="text-sm text-white/70">{testimonial.role}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Testimonials;
