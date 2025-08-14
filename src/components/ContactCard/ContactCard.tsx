import Button from '@/components/Buttons/Button';
import { Send, Github , Linkedin } from 'lucide-react';

export default function ContactCard() {
  return (
    <section className="bg-[#fdfaf6] border border-[#e6dcd5] rounded-xl p-6 w-full cursor-pointer transition-all duration-300 hover:shadow-md">
      
      <h2 className="text-4xl font-serif font-normal text-text-primary">
        Contato
      </h2>

      <p className="text-text-secondary mt-2 mb-6">
        Disponível para projetos. Contate-me!
      </p>

      <div className="flex  items-center gap-4">
        <a href="mailto:seu-email-cpisa.eng@hotmail.com">
          <Button variant="primary" iconLeft={<Send size={20}/>}>
            Enviar e-mail
          </Button>
        </a>
        <a href="https://github.com/engpisa" target="_blank" rel="noopener noreferrer">
          <Button variant="secondary" iconLeft={<Github  size={20}/>}>
            GitHub
          </Button>
        </a>
        <a href="https://linkedin.com/in/engpisa" target="_blank" rel="noopener noreferrer">
          <Button variant="secondary" iconLeft={<Linkedin size={20}/>}>
            LinkedIn
          </Button>
        </a>
      </div>
    </section>
  );
}