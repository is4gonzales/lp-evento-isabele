import { evento } from '../data/evento'

function Rodape() {
  return (
    <footer className="bg-pink-700 text-white text-center text-xs py-8 px-6 shadow-inner">
      <p className="font-black text-white text-sm mb-1 uppercase tracking-tight">{evento.nome} · <span className="text-pink-100">{evento.local}</span></p>
      <p className="text-pink-100/80 font-medium">Evento de corrida beneficente</p>
    </footer>
  )
}

export default Rodape
