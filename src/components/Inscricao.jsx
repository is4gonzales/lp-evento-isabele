import { useState } from 'react'
import { ingressos } from '../data/evento'

function Inscricao() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [ingresso, setIngresso] = useState(ingressos[0]?.nome || '')
  const [enviado, setEnviado] = useState(false)

  function enviar(e) {
    e.preventDefault()
    setEnviado(true)
  }

  if (enviado) {
    return (
      <section id="inscricao" className="max-w-xl mx-auto px-4 py-16 text-center">
        <div role="status" className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <p className="text-2xl font-black text-pink-700 mb-2">Inscrição Confirmada! 🎉</p>
          <p className="text-gray-800 text-base">Obrigado, <strong className="text-pink-700 block my-2 text-xl font-black">{nome}</strong> Sua vaga está garantida na categoria: <span className="block font-bold text-gray-900 mt-1">{ingresso}</span></p>
          <p className="text-xs text-gray-500 mt-4 border-t border-gray-100 pt-4">Um comprovante foi enviado para: {email}</p>
        </div>
      </section>
    )
  }

  return (
    <section id="inscricao" className="max-w-xl mx-auto px-4 py-16">
      <form onSubmit={enviar} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-gray-900">
        <h2 className="text-3xl font-black uppercase tracking-tight text-pink-700 mb-1 text-center">Garanta sua Vaga</h2>
        <p className="text-sm text-gray-500 mb-8 text-center">Preencha os dados abaixo e corra sob as luzes da cidade.</p>

        <label className="block mb-4">
          <span className="block mb-1 text-sm font-bold text-gray-700">Nome Completo</span>
          <input type="text" required value={nome} onChange={(e) => setNome(e.target.value)} className="w-full p-2.5 rounded-lg text-gray-950 border border-gray-200 focus:outline-none focus:border-pink-700 bg-gray-50 text-sm" placeholder="Seu nome" />
        </label>

        <label className="block mb-4">
          <span className="block mb-1 text-sm font-bold text-gray-700">E-mail do Atleta</span>
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2.5 rounded-lg text-gray-950 border border-gray-200 focus:outline-none focus:border-pink-700 bg-gray-50 text-sm" placeholder="seuemail@exemplo.com" />
        </label>

        <label className="block mb-6">
          <span className="block mb-1 text-sm font-bold text-gray-700">Escolha o Percurso / Ingresso</span>
          <select value={ingresso} onChange={(e) => setIngresso(e.target.value)} className="w-full p-2.5 rounded-lg text-gray-950 border border-gray-200 focus:outline-none focus:border-pink-700 bg-gray-50 text-sm font-medium">
            {ingressos.map((op) => (
              <option key={op.id} value={op.nome}>{op.nome}</option>
            ))}
          </select>
        </label>

        <button type="submit" className="w-full bg-pink-700 text-white font-black uppercase tracking-wider p-3.5 rounded-full hover:bg-pink-800 transition-colors shadow-sm min-h-[44px] text-sm">Confirmar Inscrição</button>
      </form>
    </section>
  )
}

export default Inscricao
