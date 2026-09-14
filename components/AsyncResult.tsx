export default function AsyncResult() {
    return (
      <div className="mt-8 overflow-hidden border border-white/10 bg-[#111114]">
        <div className="border-b border-white/10 px-5 py-4">
          <p className="font-mono text-xs tracking-[0.15em] text-purple-400 uppercase">
            Resultado da correção
          </p>
  
          <p className="mt-1 text-sm text-white/45">
            O ciclo da operação passa a ser refletido pelo estado da interface.
          </p>
        </div>
  
        <div className="grid gap-0 md:grid-cols-3">
          <div className="border-b border-white/10 p-5 md:border-b-0 md:border-r">
            <p className="font-mono text-xs text-white/30 uppercase">Idle</p>
  
            <p className="mt-4 text-lg font-medium text-white/85">
              Disponível
            </p>
  
            <p className="mt-2 text-sm leading-6 text-white/45">
              A ação pode ser iniciada.
            </p>
          </div>
  
          <div className="border-b border-purple-400/20 bg-purple-400/[0.04] p-5 md:border-b-0 md:border-r">
            <p className="font-mono text-xs tracking-[0.12em] text-purple-400 uppercase">
              Loading
            </p>
  
            <div className="mt-4 flex items-center gap-3">
              <span className="h-2 w-2 bg-purple-400" />
  
              <p className="text-lg font-medium text-white/85">
                Processando...
              </p>
            </div>
  
            <p className="mt-2 text-sm leading-6 text-white/45">
              A interface comunica que a operação está em andamento.
            </p>
          </div>
  
          <div className="p-5">
            <p className="font-mono text-xs text-white/30 uppercase">
              Success / Error
            </p>
  
            <p className="mt-4 text-lg font-medium text-white/85">Resultado</p>
  
            <p className="mt-2 text-sm leading-6 text-white/45">
              A interface representa o estado final da operação.
            </p>
          </div>
        </div>
  
        <div className="border-t border-white/10 px-5 py-5">
          <p className="font-mono text-[10px] tracking-[0.15em] text-white/30 uppercase">
            Fluxo corrigido
          </p>
  
          <div className="mt-4 flex flex-wrap items-center gap-3 font-mono text-xs">
            <span className="border border-white/10 bg-white/[0.03] px-3 py-2 text-white/45">
              idle
            </span>
  
            <span className="text-white/20">→</span>
  
            <span className="border border-purple-400/20 bg-purple-400/[0.06] px-3 py-2 font-medium text-purple-300">
              loading
            </span>
  
            <span className="text-white/20">→</span>
  
            <span className="border border-white/10 bg-white/[0.03] px-3 py-2 text-white/45">
              success / error
            </span>
          </div>
  
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/45">
            O estado de processamento passa a fazer parte explícita do fluxo da
            interface. O usuário consegue identificar quando a ação começou,
            quando está em andamento e quando terminou.
          </p>
        </div>
      </div>
    );
  }