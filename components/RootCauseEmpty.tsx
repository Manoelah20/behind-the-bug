export default function RootCauseEmpty() {
  return (
    <div className="mt-8 border border-black/10 bg-white">
      <div className="border-b border-black/10 px-5 py-4">
        <p className="font-mono text-xs tracking-[0.15em] text-black/40 uppercase">
          Análise da causa
        </p>

        <p className="mt-1 text-sm text-black/60">
          O problema está na interpretação do estado recebido pela interface.
        </p>
      </div>

      <div className="grid gap-0 md:grid-cols-3">
        <div className="border-b border-black/10 p-5 md:border-b-0 md:border-r">
          <p className="font-mono text-xs text-black/40 uppercase">
            Resposta
          </p>

          <code className="mt-4 block bg-black/[0.04] p-3 font-mono text-sm text-black/70">
            200 + []
          </code>

          <p className="mt-3 text-sm leading-6 text-black/55">
            A requisição foi concluída com sucesso, mas a coleção não possui
            registros.
          </p>
        </div>

        <div className="border-b border-black/10 p-5 md:border-b-0 md:border-r">
          <p className="font-mono text-xs text-black/40 uppercase">
            Comportamento
          </p>

          <code className="mt-4 block bg-black/[0.04] p-3 font-mono text-sm text-black/70">
            data.length === 0
          </code>

          <p className="mt-3 text-sm leading-6 text-black/55">
            A interface não possui uma representação específica para uma
            resposta vazia.
          </p>
        </div>

        <div className="p-5">
          <p className="font-mono text-xs text-black/40 uppercase">
            Causa raiz
          </p>

          <p className="mt-4 text-sm font-medium leading-6 text-black/80">
            O estado vazio é tratado como ausência de conteúdo, em vez de ser
            reconhecido como um estado válido da aplicação.
          </p>

          <div className="mt-4 border-l-2 border-yellow-400 pl-3 text-sm leading-6 text-black/55">
            Resultado: o usuário não consegue distinguir entre “não existem
            resultados” e “a interface ainda não carregou”.
          </div>
        </div>
      </div>
    </div>
  );
}