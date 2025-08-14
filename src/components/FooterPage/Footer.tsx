export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#fdfaf6] w-full border-t border-t-[#e6dcd5] py-6">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center">
          <span className="text-sm text-[#3b352e]">
            © {currentYear} Cesar Pisa – Toledo, Paraná.
          </span>
          <a 
            href="#" 
            className="text-sm text-[#3b352e] hover:text-[#fdfaf6] transition-colors">
            Voltar ao topo
          </a>
        </div>
      </div>
    </footer>
  );
}