function Cabecalho() {
  return (
    <header className="bg-white w-full sticky top-0 z-50 border-b border-gray-100">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-black text-xl tracking-tighter text-pink-700">NOTURNA<span className="text-gray-900">OC</span></span>
        <div className="flex gap-1 sm:gap-2">
          <a href="#sobre" className="text-xs sm:text-sm font-bold text-gray-600 hover:text-pink-700 min-h-[44px] px-3 flex items-center transition-colors">Sobre</a>
          <a href="#programacao" className="text-xs sm:text-sm font-bold text-gray-600 hover:text-pink-700 min-h-[44px] px-3 flex items-center transition-colors">Cronograma</a>
          <a href="#galeria" className="text-xs sm:text-sm font-bold text-gray-600 hover:text-pink-700 min-h-[44px] px-3 flex items-center transition-colors">Momentos</a>
          <a href="#percursos" className="text-xs sm:text-sm font-bold text-gray-600 hover:text-pink-700 min-h-[44px] px-3 flex items-center transition-colors">Percursos</a>
          <a href="#faq" className="text-xs sm:text-sm font-bold text-gray-600 hover:text-pink-700 min-h-[44px] px-3 flex items-center transition-colors">Dúvidas</a>
          <a href="#inscricao" className="text-xs sm:text-sm font-bold text-white bg-pink-700 hover:bg-pink-800 rounded-full px-4 py-2 min-h-[44px] flex items-center transition-colors shadow-sm">Inscrever-se</a>
        </div>
      </nav>
    </header>
  )
}
export default Cabecalho
