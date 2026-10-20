import { evento, numerosDestaque } from '../data/evento'

function Sobre() {
  return (
    <section id="sobre" className="max-w-4xl mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl font-black uppercase tracking-tight text-pink-700 mb-6">Sobre o Evento</h2>
      <p className="text-gray-700 leading-relaxed text-base max-w-2xl mx-auto mb-12">{evento.sobre}</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {numerosDestaque.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-xl shadow-sm border border-pink-100">
            <span className="block text-4xl font-black text-pink-700">{item.valor}</span>
            <span className="text-gray-500 text-sm font-bold uppercase tracking-wide mt-1 block">{item.texto}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
export default Sobre
