import { evento } from '../data/evento'
import BotaoLembrete from './BotaoLembrete'

function Hero() {
  return (
    <section className="bg-pink-700 text-white text-center px-6 py-20 shadow-inner">
      <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">{evento.nome}</h1>
      <p className="mt-3 text-lg sm:text-xl font-medium text-pink-100">{evento.slogan}</p>
      
      <div className="mt-8 text-sm sm:text-base text-pink-50 font-semibold max-w-md mx-auto border-t border-pink-500/40 pt-4">
        <p>{evento.data}</p>
        <p className="opacity-90 mt-1">{evento.local}</p>
      </div>

      <a href="#inscricao" className="mt-8 inline-flex items-center justify-center bg-white text-pink-700 font-black uppercase tracking-wider text-sm px-8 py-3.5 rounded-full shadow-md hover:bg-pink-50 transition-colors min-h-[44px]">
        Garantir Ingresso
      </a>

      <BotaoLembrete />
    </section>
  )
}

export default Hero
