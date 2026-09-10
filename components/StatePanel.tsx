const estados = [
  {
    nome: "Loading",
    descricao: "A requisição está em andamento.",
    estado: "normal",
  },
  {
    nome: "Success",
    descricao: "A requisição terminou e existem resultados.",
    estado: "normal",
  },
  {
    nome: "Empty",
    descricao: "A requisição terminou, mas não existem resultados.",
    estado: "active",
  },
  {
    nome: "Error",
    descricao: "A requisição não pôde ser concluída.",
    estado: "normal",
  },
];

export default function StatePanel() {
  return (
    <div className="mt-8 border border-black/10 bg-[#111] text-white">
      <div className="border-b border-white/10 px-5 py-4">
        <p className="font-mono text-xs tracking-[0.15em] text-white/40 uppercase">
          Estados da interface
        </p>

        <p className="mt-1 text-sm text-white/70">
          Cenários possíveis após uma busca
        </p>
      </div>

      <div className="grid divide-y divide-white/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
        {estados.map((estado) => (
          <div
            key={estado.nome}
            className={`px-5 py-6 ${
              estado.estado === "active" ? "bg-white/6" : ""
            }`}
          >
            <div className="flex items-center justify-between gap-4">
              <span className="font-mono text-sm text-white/85">
                {estado.nome}
              </span>

              {estado.estado === "active" && (
                <span className="rounded-full border border-yellow-300/30 bg-yellow-300/10 px-2.5 py-1 font-mono text-[10px] text-yellow-200 uppercase">
                  foco
                </span>
              )}
            </div>

            <p className="mt-3 text-sm leading-6 text-white/45">
              {estado.descricao}
            </p>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 px-5 py-4">
        <div className="flex flex-wrap items-center gap-2 font-mono text-[11px]">
          <span className="text-white/40">requisição</span>
          <span className="text-white/20">→</span>
          <span className="text-white/70">resposta</span>
          <span className="text-white/20">→</span>
          <span className="border border-yellow-300/30 bg-yellow-300/10 px-2.5 py-1 text-yellow-200">
            estado vazio
          </span>
        </div>
      </div>
    </div>
  );
}