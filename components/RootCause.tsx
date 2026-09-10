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
    <div className="mt-8 border border-black/10 bg-white">
      <div className="border-b border-black/10 px-5 py-4">
        <p className="font-mono text-xs tracking-[0.15em] text-black/40 uppercase">
          Análise da causa
        </p>
      </div>

      <div className="divide-y divide-black/10">
        {analise.map((item) => (
          <div
            key={item.rotulo}
            className="grid gap-3 px-5 py-5 sm:grid-cols-[160px_1fr_auto] sm:items-start"
          >
            <p className="text-sm font-medium">{item.rotulo}</p>

            <p className="max-w-2xl text-sm leading-6 text-black/55">
              {item.texto}
            </p>

            <span
              className={
                item.estado === "descartada"
                  ? "w-fit border border-black/10 px-2.5 py-1 font-mono text-[10px] text-black/40 uppercase"
                  : item.estado === "confirmada"
                    ? "w-fit border border-black/10 bg-black/5 px-2.5 py-1 font-mono text-[10px] text-black/55 uppercase"
                    : "w-fit border border-red-200 bg-red-50 px-2.5 py-1 font-mono text-[10px] text-red-700 uppercase"
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