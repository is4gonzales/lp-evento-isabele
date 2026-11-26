import { useState } from 'react'

function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false)

  const fecharMenu = () => setMenuAberto(false)

  return (
    <header className="bg-white w-full sticky top-0 z-50 border-b border-gray-100">
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        
        <a href="#" className="font-black text-xl tracking-tighter text-gray-900 shrink-0">
          NOTURNA<span className="text-pink-700">OC</span>
        </a>

        <div className="hidden md:flex items-center gap-2">
          <a href="#sobre" className="text-sm font-bold text-gray-800 hover:text-pink-700 min-h-[44px] px-3 flex items-center transition-colors">Sobre</a>
          <a href="#programacao" className="text-sm font-bold text-gray-800 hover:text-pink-700 min-h-[44px] px-3 flex items-center transition-colors">Cronograma</a>
          <a href="#galeria" className="text-sm font-bold text-gray-800 hover:text-pink-700 min-h-[44px] px-3 flex items-center transition-colors">Momentos</a>
          <a href="#percursos" className="text-sm font-bold text-gray-800 hover:text-pink-700 min-h-[44px] px-3 flex items-center transition-colors">Percursos</a>
          <a href="#faq" className="text-sm font-bold text-gray-800 hover:text-pink-700 min-h-[44px] px-3 flex items-center transition-colors">Dúvidas</a>
          <a href="#inscricao" className="text-sm font-bold text-white bg-pink-700 hover:bg-pink-800 rounded-full px-4 py-2 min-h-[44px] flex items-center transition-colors shadow-sm">Inscrever-se</a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <a 
            href="#inscricao" 
            className="text-xs font-bold text-white bg-pink-700 hover:bg-pink-800 rounded-full px-3.5 py-2 min-h-[38px] flex items-center transition-colors shadow-sm"
          >
            Inscrever-se
          </a>

          <button
            onClick={() => setMenuAberto(!menuAberto)}
            aria-label="Abrir menu de navegação"
            className="p-2 text-gray-800 hover:text-pink-700 focus:outline-none"
          >
            {menuAberto ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

      </nav>

      {menuAberto && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-4 flex flex-col gap-1 shadow-lg">
          <a href="#sobre" onClick={fecharMenu} className="text-sm font-bold text-gray-800 hover:text-pink-700 py-3 px-2 border-b border-gray-50">Sobre</a>
          <a href="#programacao" onClick={fecharMenu} className="text-sm font-bold text-gray-800 hover:text-pink-700 py-3 px-2 border-b border-gray-50">Cronograma</a>
          <a href="#galeria" onClick={fecharMenu} className="text-sm font-bold text-gray-800 hover:text-pink-700 py-3 px-2 border-b border-gray-50">Momentos</a>
          <a href="#percursos" onClick={fecharMenu} className="text-sm font-bold text-gray-800 hover:text-pink-700 py-3 px-2 border-b border-gray-50">Percursos</a>
          <a href="#faq" onClick={fecharMenu} className="text-sm font-bold text-gray-800 hover:text-pink-700 py-3 px-2">Dúvidas</a>
        </div>
      )}
    </header>
  )
}

export default Cabecalho
