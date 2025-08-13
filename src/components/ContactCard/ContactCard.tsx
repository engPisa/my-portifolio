import Button from '@/components/Button';

export default function ContactCard() {
  return (
    <section className="bg-surface border border-border rounded-xl p-8 w-full text-center max-w-2xl mx-auto">
      
      <h2 className="text-4xl font-serif font-normal text-text-primary">
        Contato
      </h2>

      <p className="text-text-secondary mt-2 mb-6">
        Disponível para projetos globais, remoto ou em Sydney, Austrália.
      </p>

      <div className="flex justify-center items-center gap-4">
        <a href="mailto:seu-email-aqui@example.com">
          <Button variant="primary">
            Enviar e-mail
          </Button>
        </a>
        <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer">
          <Button variant="secondary">
            GitHub
          </Button>
        </a>
        <a href="https://linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer">
          <Button variant="secondary">
            LinkedIn
          </Button>
        </a>

      </div>
    </section>
  );
}