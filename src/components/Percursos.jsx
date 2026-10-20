function CartaoAtracao({ nome, nivel, descricao }) {
  return (
    <article className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight">{nome}</h3>
        
        <span className="inline-flex items-center bg-pink-50 text-pink-700 text-xs font-bold px-3 py-1 rounded-full mt-2">{nivel}</span>
        
        <p className="text-gray-600 text-sm mt-4 leading-relaxed">{descricao}</p>
      </div>
    </article>
  )
}

export default CartaoAtracao
