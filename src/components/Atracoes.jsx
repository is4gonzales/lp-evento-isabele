import { percursos } from '../data/evento'
import CartaoAtracao from './Percursos'

function Atracoes() {
  return (
    <section id="percursos" className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-black uppercase tracking-tight text-pink-700 mb-8 text-center">Percursos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {percursos.map((percurso) => (
          <CartaoAtracao key={percurso.id} nome={percurso.nome} nivel={percurso.nivel} descricao={percurso.descricao} />
        ))}
      </div>
    </section>
  )
}
export default Atracoes
