
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const EmailCaptureForm = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inscrição realizada!",
      description: "Em breve você receberá nossas atualizações.",
    });
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
      <Input
        type="email"
        placeholder="Seu melhor e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="bg-white/10 border-white/20 placeholder:text-white/50"
      />
      <Button type="submit" className="bg-primary hover:bg-primary/90 text-white font-medium">
        Começar Agora
      </Button>
    </form>
  );
};

export default EmailCaptureForm;
