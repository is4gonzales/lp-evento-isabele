import { useState } from 'react'

function PerguntasFrequentes() {
  const [aberto, setAberto] = useState(null)

  const faqs = [
    { id: 1, pergunta: 'Preciso de atestado médico?', resposta: 'Não é obrigatório, mas é recomendado para a sua segurança.' },
    { id: 2, pergunta: 'Tem guarda-volumes?', resposta: 'Sim, na tenda da organização, ao lado da largada.' },
    { id: 3, pergunta: 'Posso correr com fone de ouvido?', resposta: 'Pode, com volume baixo, para conseguir ouvir os avisos e orientações da equipe.' }
  ]

  function alternar(id) { setAberto(aberto === id ? null : id) }

  return (
    <section id="faq" className="max-w-xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-black uppercase tracking-tight text-pink-700 mb-2 text-center">Dúvidas Frequentes</h2>
      <p className="text-sm text-gray-500 mb-8 text-center">Clique nas perguntas abaixo para ver as respostas.</p>
      
      <div className="flex flex-col gap-4">
        {faqs.map((faq) => (
          <div key={faq.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <button onClick={() => alternar(faq.id)} className="w-full text-left p-4 font-bold text-gray-900 flex justify-between items-center min-h-[44px] hover:text-pink-700 transition-colors">
              <span>{faq.pergunta}</span>
              <span className="text-pink-700 font-black text-lg">{aberto === faq.id ? '−' : '+'}</span>
            </button>
            {aberto === faq.id && (
              <div className="p-4 bg-gray-50 text-sm text-gray-600 border-t border-gray-100 leading-relaxed">{faq.resposta}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default PerguntasFrequentes
