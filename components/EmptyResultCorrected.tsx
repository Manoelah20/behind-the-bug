export default function EmptyResultCorrected() {
  return (
    <div className="mt-8 overflow-hidden border border-white/10 bg-[#111114]">
      <div className="border-b border-white/10 px-5 py-4">
        <p className="font-mono text-xs tracking-[0.15em] text-purple-400 uppercase">
          Decisão de correção
        </p>

        <p className="mt-1 text-sm text-white/45">
          O estado vazio passa a ser tratado explicitamente pela interface.
        </p>
      </div>

      <div className="grid gap-0 md:grid-cols-3">
        <div className="border-b border-white/10 p-5 md:border-b-0 md:border-r">
          <p className="font-mono text-xs text-white/30 uppercase">Antes</p>

          <p className="mt-4 text-sm leading-6 text-white/45">
            A coleção vazia não tinha uma representação própria. A área de
            resultados permanecia sem uma indicação clara do que aconteceu.
          </p>
        </div>

        <div className="border-b border-white/10 p-5 md:border-b-0 md:border-r">
          <p className="font-mono text-xs text-white/30 uppercase">
            Decisão
          </p>

          <p className="mt-4 text-sm leading-6 text-white/45">
            Criar um estado específico para uma resposta válida sem registros,
            separado de loading e error.
          </p>
        </div>

        <div className="p-5">
          <p className="font-mono text-xs text-purple-400 uppercase">
            Depois
          </p>

          <code className="mt-4 block border border-purple-400/20 bg-purple-400/[0.06] p-3 font-mono text-sm text-white/70">
            200 + []
            <br />
            ↓
            <br />
            <span className="text-purple-300">Empty State</span>
          </code>

          <p className="mt-3 text-sm leading-6 text-white/45">
            A interface passa a comunicar que a busca terminou, mas não
            encontrou registros.
          </p>
        </div>
      </div>
    </div>
  );
}