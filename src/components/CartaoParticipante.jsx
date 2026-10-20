function CartaoParticipante({ nome, genero }) {
  return (
    <article className="rounded-xl bg-white p-6 shadow-md border-l-4 border-pink-700">
      <h3 className="text-xl font-bold text-gray-800">{nome}</h3>
      <p className="text-sm text-gray-500">Gênero: {genero}</p>
    </article>
  )
}

export default CartaoParticipante
