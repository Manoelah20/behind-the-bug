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
    <div className="mt-8 overflow-hidden border border-white/10 bg-[#111114]">
      <div className="border-b border-white/10 px-5 py-4">
        <div className="flex items-center justify-between gap-4">
          <p className="font-mono text-xs tracking-[0.15em] text-purple-400 uppercase">
            Linha de investigação
          </p>

          <span className="font-mono text-[10px] text-white/25">
            01 — 04
          </span>
        </div>
      </div>

      <div className="divide-y divide-white/10">
        {etapas.map((etapa) => (
          <div
            key={etapa.numero}
            className="grid gap-4 px-5 py-6 sm:grid-cols-[48px_150px_1fr]"
          >
            <span className="font-mono text-xs text-purple-400/70">
              {etapa.numero}
            </span>

            <h3 className="font-medium text-white/85">
              {etapa.titulo}
            </h3>

            <p className="max-w-2xl text-sm leading-6 text-white/45">
              {etapa.texto}
            </p>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 bg-[#0b0b0d] px-5 py-5">
        <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.06em]">
          <span className="border border-white/10 bg-white/[0.03] px-3 py-2 text-white/45">
            evidência
          </span>

          <span className="text-white/20">→</span>

          <span className="border border-white/10 bg-white/[0.03] px-3 py-2 text-white/45">
            hipótese
          </span>

          <span className="text-white/20">→</span>

          <span className="border border-white/10 bg-white/[0.03] px-3 py-2 text-white/45">
            análise
          </span>

          <span className="text-white/20">→</span>

          <span className="border border-purple-400/20 bg-purple-400/10 px-3 py-2 text-purple-300">
            causa raiz
          </span>
        </div>
      </div>
    </div>
  );
}