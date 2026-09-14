const analise = [
  {
    rotulo: "Hipótese inicial",
    texto:
      "A API poderia estar processando a mesma solicitação mais de uma vez.",
    estado: "descartada",
  },
  {
    rotulo: "Evidência",
    texto:
      "As duas chamadas possuem o mesmo endpoint, o mesmo initiator e retornam dados equivalentes.",
    estado: "confirmada",
  },
  {
    rotulo: "Conclusão",
    texto:
      "A duplicidade acontece no fluxo de execução do componente que inicia a busca.",
    estado: "causa",
  },
];

export default function RootCause() {
  return (
    <div className="mt-8 overflow-hidden border border-white/10 bg-[#111114]">
      <div className="border-b border-white/10 px-5 py-4">
        <div className="flex items-center justify-between gap-4">
          <p className="font-mono text-xs tracking-[0.15em] text-purple-400 uppercase">
            Análise da causa
          </p>

          <span className="font-mono text-[10px] text-white/25">
            ROOT CAUSE
          </span>
        </div>
      </div>

      <div className="divide-y divide-white/10">
        {analise.map((item) => (
          <div
            key={item.rotulo}
            className="grid gap-3 px-5 py-5 sm:grid-cols-[160px_1fr_auto] sm:items-start"
          >
            <p className="text-sm font-medium text-white/80">
              {item.rotulo}
            </p>

            <p className="max-w-2xl text-sm leading-6 text-white/45">
              {item.texto}
            </p>

            <span
              className={
                item.estado === "descartada"
                  ? "w-fit border border-white/10 px-2.5 py-1 font-mono text-[10px] text-white/30 uppercase"
                  : item.estado === "confirmada"
                    ? "w-fit border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] text-white/50 uppercase"
                    : "w-fit border border-purple-400/20 bg-purple-400/10 px-2.5 py-1 font-mono text-[10px] font-medium text-purple-300 uppercase"
              }
            >
              {item.estado}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}