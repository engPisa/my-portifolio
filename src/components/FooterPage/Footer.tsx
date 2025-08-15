export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background w-full border-t border-t-border py-6">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center">
          <span className="text-sm text-foreground">
            © {currentYear} Cesar Pisa – Toledo, Paraná.
          </span>
          <a 
            href="#" 
            className="text-sm text-foreground hover:text-accent transition-colors">
            Voltar ao topo
          </a>
        </div>
      </div>
    </footer>
  );
}