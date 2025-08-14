export default function Header() {
  return (
    <header className="bg-background w-full border-b border-b-foreground/30 py-4">
      <div className="container mx-auto px-6 md:px-16">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold text-accent">Cesar Pisa</h1>
          <nav>
            <ul className="flex space-x-6 md:space-x-8 text-sm text-foreground">
              <li><a href="#" className="hover:text-accent transition-colors ">Projetos</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Stacks</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Experiência</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contato</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}