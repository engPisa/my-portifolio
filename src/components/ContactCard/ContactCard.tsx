import Button from '@/components/Buttons/Button';
import { Send, Github , Linkedin } from 'lucide-react';

export default function ContactCard() {
  return (
    <section className="container mx-auto px-6 md:px-12 py-4 sm:py-8">
      <div className="bg-background border border-border rounded-xl p-5 flex flex-col w-full shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        
        <h2 className="text-xl font-semibold text-accent">
          Contato
        </h2>

        <p className="text-sm text-foreground/80 leading-relaxed font-sans mt-2 mb-6">
          Disponível para projetos. Contate-me!
        </p>

        <div className="flex flex-wrap items-center gap-2 mt-4">
          <a href="mailto:seu-email-cpisa.eng@hotmail.com">
            <Button variant="primary" iconLeft={<Send size={20}/> }>
              Enviar e-mail
            </Button>
          </a>
          <a href="https://github.com/engpisa" target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" iconLeft={<Github  size={20}/> }>
              GitHub
            </Button>
          </a>
          <a href="https://linkedin.com/in/engpisa" target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" iconLeft={<Linkedin size={20}/> }>
              LinkedIn
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}