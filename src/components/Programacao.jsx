import { programacao } from '../data/evento'

function Programacao() {
  return (
    <section id="programacao" className="bg-white py-16 px-4">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-black uppercase tracking-tight text-pink-700 mb-8 text-center">Programação</h2>
        
        <div className="border-l-2 border-pink-700 ml-4">
          {programacao.map((item) => (
            <div key={item.id} className="relative pl-6 pb-6 last:pb-0">
              <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-pink-700" />
              <span className="font-bold text-pink-700 text-sm block">{item.horario}</span>
              <p className="text-gray-800 font-medium mt-0.5">{item.atividade}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Programacao
