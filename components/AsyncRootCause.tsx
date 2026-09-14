export default function AsyncRootCause() {
  return (
    <div className="mt-8 overflow-hidden border border-white/10 bg-[#111114]">
      <div className="border-b border-white/10 px-5 py-4">
        <p className="font-mono text-xs tracking-[0.15em] text-purple-400 uppercase">
          Análise da causa
        </p>

        <p className="mt-1 text-sm text-white/45">
          A execução assíncrona existe, mas seu estado não é refletido pela
          interface.
        </p>
      </div>

      <div className="grid gap-0 md:grid-cols-2">
        <div className="border-b border-white/10 p-5 md:border-b-0 md:border-r">
          <p className="font-mono text-xs text-white/30 uppercase">
            O que existe
          </p>

          <div className="mt-5 border border-white/10 bg-[#0b0b0d] p-4">
            <p className="font-mono text-sm text-white/70">
              async operation
            </p>

            <p className="mt-2 text-sm leading-6 text-white/45">
              A ação dispara uma operação que depende de uma resposta futura.
            </p>
          </div>
        </div>

        <div className="p-5">
          <p className="font-mono text-xs text-purple-400 uppercase">
            O que falta
          </p>

          <div className="mt-5 border border-purple-400/20 bg-purple-400/[0.06] p-4">
            <div className="flex items-center justify-between gap-4">
              <p className="font-mono text-sm text-purple-300">
                loading state
              </p>

              <span className="border border-purple-400/20 px-2 py-1 font-mono text-[10px] tracking-[0.12em] text-purple-300/70 uppercase">
                ausente
              </span>
            </div>

            <p className="mt-2 text-sm leading-6 text-white/45">
              O componente não representa explicitamente que a operação está
              em andamento.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5">
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
          <span className="border border-white/10 bg-white/[0.03] px-3 py-2 text-white/45">
            ação iniciada
          </span>

          <span className="text-white/20">→</span>

          <span className="border border-purple-400/20 bg-purple-400/[0.06] px-3 py-2 text-purple-300">
            estado visual não muda
          </span>

          <span className="text-white/20">→</span>

          <span className="border border-white/10 bg-white/[0.03] px-3 py-2 text-white/45">
            usuário sem feedback
          </span>
        </div>

        <p className="mt-4 max-w-2xl text-sm leading-6 text-white/45">
          A operação assíncrona funciona, mas o componente não possui um estado
          explícito para representar o processamento. O problema está na camada
          de estado da interface, não na execução da operação.
        </p>
      </div>
    </div>
  );
}