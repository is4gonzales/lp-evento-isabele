import { participantes } from '../data/evento'
import CartaoParticipante from './CartaoParticipante'

function ListaParticipantes() {
  return (
    <section className="p-6 bg-gray-50">
      {participantes.map((participante) => (
        <CartaoParticipante 
          key={participante.nome} 
          nome={participante.nome} 
          genero={participante.genero} 
        />
      ))}
    </section>
  )
}
