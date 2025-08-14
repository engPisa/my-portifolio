import Button from '@/components/Buttons/Button';
import { FolderGit2, Phone } from 'lucide-react';
import { size } from 'zod';

export default function HeroSection() {
  return (
    <section className="container mx-auto px-6 md:px-16 py-24 sm:py-32 text-left">
        <div className='max-w-6xl mx-auto'>
            <h2 className="text-4xl md:text-7xl font-serif text-accent leading-tight">
                Software Engineer.<br /> Proprietário da Quickapp.
            </h2>
            <p className="mt-6 text-lg md:text-xl text-foreground mx-auto">
                Especialista em soluções de agendamento online, plataformas SaaS e produtos digitais de alta performance.
            </p>
            <div className="mt-10 flex space-x-6">
                <Button variant="primary" iconLeft={<FolderGit2 size={20}/>}>
                    Ver Projetos
                </Button>
                <Button variant="secondary" iconLeft={<Phone size={20}/>}>
                    Entrar em Contato
                </Button>
            </div>
        </div>
    </section>
  );
}