import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Programacao from './components/Programacao'
import GaleriaMomentos from './components/GaleriaMomentos'
import Atracoes from './components/Atracoes'
import Inscricao from './components/Inscricao'
import PerguntasFrequentes from './components/PerguntasFrequentes'
import Rodape from './components/Rodape'

function App() {
  return (
    <>
      <Cabecalho />
      <main className="bg-[--color-fundo]">
        <Hero />
        <Sobre />
        <Programacao />
        <GaleriaMomentos />
        <Atracoes />
        <Inscricao />
        <PerguntasFrequentes />
      </main>
      <Rodape />
    </>
  )
}

export default App
