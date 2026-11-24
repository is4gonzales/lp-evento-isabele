import { useEffect, useRef } from "react";

const dados = [
  { rotulo: "Corrida 5km", valor: 120 },
  { rotulo: "Corrida 10km", valor: 80 },
  { rotulo: "Caminhada", valor: 45 },
];

function Grafico() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    const maior = Math.max(...dados.map((d) => d.valor));

    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    ctx.font = "bold 16px sans-serif";
    ctx.textBaseline = "middle";

    dados.forEach((item, i) => {
      const largura = (item.valor / maior) * 320; // barra maior (320px)
      const y = 25 + i * 65; // espaçamento vertical maior (65px)

      // 1. cor da barra (rosa do evento)
      ctx.fillStyle = "#be185d";

      // 2. desenha a barra com fillRect, começando em x = 140
      ctx.fillRect(140, y, largura, 40);

      // 3. cor escura e rótulo à esquerda (x = 10)
      ctx.fillStyle = "#1e293b";
      ctx.fillText(item.rotulo, 10, y + 20);

      // 4. valor logo depois do fim da barra
      ctx.fillText(item.valor, 140 + largura + 12, y + 20);
    });
  }, []);

  return (
    <section className="px-4 py-16 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-pink-700">Inscritos por percurso</h2>
      <canvas
        ref={canvasRef}
        width={520}
        height={220}
        role="img"
        aria-label="Gráfico de barras mostrando inscritos por percurso: Corrida 5km com 120, Corrida 10km com 80 e Caminhada com 45"
        className="mt-8 mx-auto max-w-full"
      />
    </section>
  );
}

export default Grafico;
