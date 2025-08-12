import Button from '@/components/Button';

export default function HeroSection() {
  return (
    <main>
        <section className="max-w-4xl">
        <h2 className="text-5xl md:text-7xl font-medium leading-tight">
            Software Engineer. Proprietário da Quickapp.
        </h2>
        <p className="mt-6 text-lg md:text-xl text-gray-600">
            Especialista em soluções de agendamento online, plataformas SaaS e produtos digitais de alta performance.
        </p>
        <div className="mt-10 flex  space-x-4">
            <Button variant="primary">
                Ver Projetos
            </Button>
            <Button variant="secondary">
                Entrar em Contato
            </Button>
        </div>
        </section>
    </main>
  );
}