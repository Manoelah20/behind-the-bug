const resultados = [
  {
    rotulo: "Comportamento",
    valor: "Mantido",
    texto:
      "A interface continua recebendo e exibindo os mesmos dados esperados.",
  },
  {
    rotulo: "Rede",
    valor: "Simplificada",
    texto:
      "A chamada redundante deixa de fazer parte do fluxo normal de carregamento.",
  },
  {
    rotulo: "Fluxo",
    valor: "Mais previsível",
    texto:
      "A responsabilidade pela busca fica concentrada em um ponto claro do componente.",
  },
];

export default function ResultSummary() {
  return (
    <div className="mt-8 border border-black/10 bg-white">
      <div className="border-b border-black/10 px-5 py-4">
        <p className="font-mono text-xs tracking-[0.15em] text-black/40 uppercase">
          Resultado da investigação
        </p>
      </div>

      <div className="grid divide-y divide-black/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {resultados.map((resultado) => (
          <div key={resultado.rotulo} className="px-5 py-6">
            <p className="font-mono text-[10px] tracking-[0.15em] text-black/35 uppercase">
              {resultado.rotulo}
            </p>

            <p className="mt-3 text-lg font-medium">
              {resultado.valor}
            </p>

            <p className="mt-3 text-sm leading-6 text-black/50">
              {resultado.texto}
            </p>
          </div>
        ))}
      </div>

      <div className="border-t border-black/10 bg-[#f7f7f5] px-5 py-5">
        <p className="max-w-3xl text-sm leading-6 text-black/60">
          A correção resolve a causa identificada sem alterar o resultado
          funcional esperado. O principal ganho é eliminar trabalho
          desnecessário e tornar o fluxo de dados mais previsível.
        </p>
      </div>
    </div>
  );
}