export default function AsyncStateCorrected() {
    return (
      <div className="mt-8 overflow-hidden border border-white/10 bg-[#111114]">
        <div className="border-b border-white/10 px-5 py-4">
          <p className="font-mono text-xs tracking-[0.15em] text-purple-400 uppercase">
            Decisão de correção
          </p>
  
          <p className="mt-1 text-sm text-white/45">
            O estado da operação passa a ser representado explicitamente pela
            interface.
          </p>
        </div>
  
        <div className="grid gap-0 md:grid-cols-3">
          <div className="border-b border-white/10 p-5 md:border-b-0 md:border-r">
            <p className="font-mono text-xs text-white/30 uppercase">
              Estado inicial
            </p>
  
            <div className="mt-5 border border-white/10 bg-[#0b0b0d] px-4 py-3">
              <p className="text-sm text-white/70">Enviar</p>
            </div>
  
            <p className="mt-3 text-sm leading-6 text-white/45">
              O controle permanece visualmente disponível durante a operação.
            </p>
          </div>
  
          <div className="border-b border-white/10 bg-purple-400/[0.04] p-5 md:border-b-0 md:border-r">
            <p className="font-mono text-xs text-purple-400 uppercase">
              Decisão
            </p>
  
            <div className="mt-5 border border-purple-400/20 bg-purple-400/[0.06] px-4 py-3">
              <div className="flex items-center justify-between gap-4">
                <p className="font-mono text-sm text-purple-300">
                  isProcessing = true
                </p>
  
                <span className="h-2 w-2 bg-purple-400" />
              </div>
            </div>
  
            <p className="mt-3 text-sm leading-6 text-white/45">
              O componente passa a controlar explicitamente o estado de
              processamento.
            </p>
          </div>
  
          <div className="p-5">
            <p className="font-mono text-xs text-white/30 uppercase">Depois</p>
  
            <div className="mt-5 border border-white/10 bg-[#0b0b0d] px-4 py-3">
              <p className="text-sm text-white/70">Processando...</p>
            </div>
  
            <p className="mt-3 text-sm leading-6 text-white/45">
              A interface comunica que a operação está em andamento e evita uma
              nova execução simultânea.
            </p>
          </div>
        </div>
  
        <div className="border-t border-white/10 px-5 py-5">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
            <span className="border border-white/10 bg-white/[0.03] px-3 py-2 text-white/45">
              ação
            </span>
  
            <span className="text-white/20">→</span>
  
            <span className="border border-purple-400/20 bg-purple-400/[0.06] px-3 py-2 text-purple-300">
              isProcessing
            </span>
  
            <span className="text-white/20">→</span>
  
            <span className="border border-white/10 bg-white/[0.03] px-3 py-2 text-white/45">
              feedback visual
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
