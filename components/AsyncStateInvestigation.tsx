export default function AsyncStateInvestigation() {
  return (
    <div className="mt-8 overflow-hidden border border-white/10 bg-[#111114]">
      <div className="border-b border-white/10 px-5 py-4">
        <p className="font-mono text-xs tracking-[0.15em] text-purple-400 uppercase">
          Linha de investigação
        </p>

        <p className="mt-1 text-sm leading-6 text-white/45">
          O ponto central é identificar quais estados a interface representa
          durante o ciclo da operação.
        </p>
      </div>

      <div className="grid gap-0 md:grid-cols-3">
        <div className="border-b border-white/10 p-5 md:border-b-0 md:border-r">
          <p className="font-mono text-xs text-white/30 uppercase">
            01 · Estado inicial
          </p>

          <p className="mt-4 text-lg font-medium text-white/85">Idle</p>

          <p className="mt-2 text-sm leading-6 text-white/45">
            Nenhuma operação está em andamento. O controle pode ser utilizado.
          </p>
        </div>

        <div className="border-b border-white/10 bg-amber-400/[0.06] p-5 md:border-b-0 md:border-r">
          <p className="font-mono text-xs text-white/30 uppercase">
            02 · Estado intermediário
          </p>

          <div className="mt-4 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-amber-400" />

            <p className="text-lg font-medium text-white/85">Loading</p>
          </div>

          <p className="mt-2 text-sm leading-6 text-white/45">
            A operação assíncrona foi iniciada, mas a interface não possui uma
            representação visual clara desse estado.
          </p>
        </div>

        <div className="p-5">
          <p className="font-mono text-xs text-white/30 uppercase">
            03 · Estado final
          </p>

          <p className="mt-4 text-lg font-medium text-white/85">
            Success / Error
          </p>

          <p className="mt-2 text-sm leading-6 text-white/45">
            A operação termina e a interface apresenta o resultado.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#0b0b0d] px-5 py-5">
        <p className="font-mono text-[10px] tracking-[0.15em] text-white/30 uppercase">
          Estado observado
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-3 font-mono text-xs">
          <span className="border border-white/10 bg-white/[0.03] px-3 py-2 text-white/45">
            idle
          </span>

          <span className="text-white/20">→</span>

          <span className="border border-amber-400/20 bg-amber-400/10 px-3 py-2 font-medium text-amber-300">
            loading
          </span>

          <span className="text-white/20">→</span>

          <span className="border border-white/10 bg-white/[0.03] px-3 py-2 text-white/45">
            success / error
          </span>
        </div>

        <p className="mt-4 max-w-2xl text-sm leading-6 text-white/45">
          A investigação indica que o problema não está na execução da
          operação, mas na ausência de uma representação explícita do estado
          intermediário na interface.
        </p>
      </div>
    </div>
  );
}
