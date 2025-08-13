export default function Header(){
    return (
        <header className="max-w-5xl flex justify-between items-center mb-16 md:mb-24">
            <h1 className="text-xl font-semibold">Cesar Pisa</h1>
            <nav>
                <ul className="flex space-x-6 md:space-x-8 text-sm">
                    <li><a href="#" className="text-gray-500 transition-colors">Projetos</a></li>
                    <li><a href="#" className="text-gray-500 transition-colors">Stacks</a></li>
                    <li><a href="#" className="text-gray-500 transition-colors">Experiência</a></li>
                    <li><a href="#" className="text-gray-500 transition-colors">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}