const etapas = [
  {
    numero: "01",
    titulo: "Observar",
    texto:
      "O Network mostra duas chamadas para o mesmo endpoint durante o carregamento inicial.",
  },
  {
    numero: "02",
    titulo: "Rastrear",
    texto:
      "O campo Initiator indica o componente responsável por iniciar as requisições.",
  },
  {
    numero: "03",
    titulo: "Comparar",
    texto:
      "As respostas são equivalentes. A segunda chamada não acrescenta dados ao estado final da interface.",
  },
  {
    numero: "04",
    titulo: "Isolar",
    texto:
      "A análise do fluxo de execução aponta que a busca está vinculada a uma execução adicional do componente.",
  },
];

export default function InvestigationFlow() {
  return (
    <div className="mt-8 border border-black/10 bg-[#f7f7f5]">
      <div className="border-b border-black/10 px-5 py-4">
        <p className="font-mono text-xs tracking-[0.15em] text-black/40 uppercase">
          Linha de investigação
        </p>
      </div>

      <div className="divide-y divide-black/10">
        {etapas.map((etapa) => (
          <div
            key={etapa.numero}
            className="grid gap-4 px-5 py-6 sm:grid-cols-[48px_150px_1fr]"
          >
            <span className="font-mono text-xs text-black/35">
              {etapa.numero}
            </span>

            <h3 className="font-medium">{etapa.titulo}</h3>

            <p className="max-w-2xl text-sm leading-6 text-black/55">
              {etapa.texto}
            </p>
          </div>
        ))}
      </div>

      <div className="border-t border-black/10 bg-white px-5 py-5">
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
          <span className="border border-black/10 px-3 py-2">
            evidência
          </span>

          <span className="text-black/30">→</span>

          <span className="border border-black/10 px-3 py-2">
            hipótese
          </span>

          <span className="text-black/30">→</span>

          <span className="border border-black/10 px-3 py-2">
            análise
          </span>

          <span className="text-black/30">→</span>

          <span className="border border-black bg-black px-3 py-2 text-white">
            causa raiz
          </span>
        </div>
      </div>
    </div>
  );
}
