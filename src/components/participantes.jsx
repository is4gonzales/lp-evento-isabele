import { participantes } from '../data/evento'

function Participantes() {
  return (
    <ul>
      {participantes.map((participante) => (
        <li key={participante.nome}>
          {participante.nome} — {participante.genero}
        </li>
      ))}
    </ul>
  )
}

export default Participantes
