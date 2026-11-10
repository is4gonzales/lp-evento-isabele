import { evento } from '../data/evento'

function Rodape() {
  return (
    <footer className="bg-pink-700 text-white text-center text-xs py-8 px-6 shadow-inner">
      <p className="font-black text-white text-sm mb-1 uppercase tracking-tight">{evento.nome} · <span className="text-white opacity-95">{evento.local}</span></p>
      <p className="text-white opacity-90 font-medium">Evento de Corrida Noturna.</p>
    </footer>
  )
}

export default Rodape
