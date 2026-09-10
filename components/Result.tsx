export default function Result() {
  return (
    <div className="mt-8 border border-black/10 bg-[#111] text-white">
      <div className="border-b border-white/10 px-5 py-4">
        <p className="font-mono text-xs tracking-[0.15em] text-white/40 uppercase">
          Resultado da correção
        </p>

        <p className="mt-1 text-sm text-white/70">
          Cada resposta da aplicação passa a ter uma representação própria.
        </p>
      </div>

      <div className="grid gap-0 sm:grid-cols-3">
        <div className="border-b border-white/10 p-5 sm:border-b-0 sm:border-r">
          <p className="font-mono text-xs text-white/40 uppercase">
            Loading
          </p>

          <p className="mt-3 text-sm leading-6 text-white/55">
            Indica que a busca ainda está em andamento.
          </p>
        </div>

        <div className="border-b border-white/10 p-5 sm:border-b-0 sm:border-r">
          <p className="font-mono text-xs text-white/40 uppercase">
            Success
          </p>

          <p className="mt-3 text-sm leading-6 text-white/55">
            Apresenta os registros quando existem resultados.
          </p>
        </div>

        <div className="p-5">
          <p className="font-mono text-xs text-yellow-200/80 uppercase">
            Empty
          </p>

          <p className="mt-3 text-sm leading-6 text-white/65">
            Informa que a busca foi concluída, mas nenhum registro foi
            encontrado.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5">
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
          <span className="text-white/40">loading</span>
          <span className="text-white/20">→</span>
          <span className="text-white/40">success</span>
          <span className="text-white/20">→</span>
          <span className="text-yellow-200">empty</span>
          <span className="text-white/20">→</span>
          <span className="text-white/40">error</span>
        </div>
      </div>
    </div>
  );
}