import { useState } from 'react'

function GaleriaMomentos() {
  const [indexAtivo, setIndexAtivo] = useState(0)

  const momentos = [
    { id: 1, titulo: 'Shows e Atrações Musicais', legenda: 'Abertura dos portões com apresentações ao vivo no palco principal.', foto: '/images/show.png' },
    { id: 1.5, titulo: 'Shows e Atrações Musicais', legenda: 'Grande show de pagode animando o público da Corrida OC.', foto: '/images/pagode.png' },
    { id: 2, titulo: 'Retirada dos Kits', legenda: 'Atletas retirando o chip, número de peito e camiseta refletiva.', foto: '/images/kits.jpg' },
    { id: 3, titulo: 'Aquecimento Coletivo', legenda: 'Preparação física e animação da galera antes da largada.', foto: '/images/aquecimento.jpg' },
    { id: 4, titulo: 'Largada', legenda: 'Atletas iniciando o percurso principal.', foto: '/images/largada.webp' },
    { id: 6, titulo: 'Saída da Caminhada', legenda: 'Famílias e amigos iniciando os 3 km de caminhada livre.', foto: '/images/caminhada.jpg' },
    { id: 7, titulo: 'Corrida Kids', legenda: 'Crianças de 6 a 12 anos correndo os 500 metros especiais.', foto: '/images/kids.jpg' },
    { id: 8, titulo: 'Atração Kids Especial', legenda: 'Show especial da Patrulha Canina para as crianças pós os 500 metros.', foto: '/images/atracaoKids.png' },
    { id: 9, titulo: 'Pontos de Hidratação', legenda: 'Participantes se refrescando nos 6 pontos de água espalhados pelo centro.', foto: '/images/hidratacao.webp' },
    { id: 10, titulo: 'Entrega das Medalhas', legenda: 'Todos os atletas celebrando com a medalha oficial da Corrida OC.', foto: '/images/medalhas.png' }
  ]

  function anterior() { setIndexAtivo((prev) => (prev === 0 ? momentos.length - 1 : prev - 1)) }
  function proximo() { setIndexAtivo((prev) => (prev === momentos.length - 1 ? 0 : prev + 1)) }

  return (
    <section id="galeria" className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-black uppercase tracking-tight text-pink-700 mb-2 text-center">Momentos do Evento</h2>
      <p className="text-sm text-gray-500 mb-8 text-center">Clique nas setas para navegar pela experiência completa da corrida.</p>

      <div className="relative bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden p-6 min-h-[680px] flex flex-col justify-between">

        <div className="w-full h-[500px] bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center border border-gray-100">
          <img src={momentos[indexAtivo].foto} alt={momentos[indexAtivo].titulo} className="w-full h-full object-contain" />
        </div>

        <div className="mt-6 text-center px-4">
          <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight">{momentos[indexAtivo].titulo}</h3>
          <p className="text-gray-800 text-base mt-2 leading-relaxed">{momentos[indexAtivo].legenda}</p>
        </div>

        <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-50">
          <button onClick={anterior} aria-label="Momento anterior" className="bg-pink-100 text-pink-900 font-black px-6 py-3 rounded-full hover:bg-pink-200 transition-colors text-sm min-h-[44px] min-w-[44px] flex items-center justify-center">← Voltar</button>
          <span className="text-sm font-bold text-gray-500">{indexAtivo + 1} / {momentos.length}</span>
          <button onClick={proximo} aria-label="Próximo momento" className="bg-pink-700 text-white font-black px-6 py-3 rounded-full hover:bg-pink-800 transition-colors text-sm min-h-[44px] min-w-[44px] flex items-center justify-center">Avançar →</button>
        </div>

      </div>
    </section>
  )
}

export default GaleriaMomentos
