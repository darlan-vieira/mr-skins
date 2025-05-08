'use client'
import React from "react";
import { Button } from "@/components/ui/button";

function redirectToWhatsApp() {
  const phoneNumber = "47992898434"; // substitua pelo número desejado com código do país
  const message = "Olá, gostaria de mais informações!"; // mensagem opcional
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

const ButtonLayot = () => {
    return (
      <Button
      onClick={redirectToWhatsApp}
        type="submit"
        className="bg-primary hover:bg-primary/90 text-white font-medium"
      >
        Começar Agora
      </Button>
    );
}

export default ButtonLayot;