export default function AsyncStateEvidence() {
    return (
        <div className="mt-8 overflow-hidden border border-black/10 bg-[#111] text-white">
            <div className="border-b border-white/10 px-5 py-4">
                <p className="font-mono text-xs tracking-[0.15em] text-white/40 uppercase">
                    Evidência da interação
                </p>

                <p className="mt-1 text-sm text-white/70">
                    O comportamento visual não acompanha o estado da operação.
                </p>
            </div>

            <div className="grid gap-0 md:grid-cols-3">
                <div className="border-b border-white/10 p-5 md:border-b-0 md:border-r">
                    <p className="font-mono text-xs text-white/40 uppercase">
                        01 · Antes da ação
                    </p>

                    <div className="mt-5 border border-white/10 bg-white/5 px-4 py-3">
                        <p className="text-sm text-white/80">Enviar</p>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-white/45">
                        O controle está disponível para interação.
                    </p>
                </div>

                <div className="border-b border-white/10 bg-white/[0.04] p-5 md:border-b-0 md:border-r">
                    <div className="flex items-center justify-between gap-4">
                        <p className="font-mono text-xs text-white/40 uppercase">
                            02 · Durante a operação
                        </p>

                        <span className="border border-yellow-300/30 bg-yellow-300/10 px-2.5 py-1 font-mono text-[10px] tracking-[0.12em] not-first:text-yellow-200 uppercase">
                            foco
                        </span>
                    </div>

                    <div className="mt-5 border border-yellow-300/20 bg-yellow-300/5 px-4 py-3">
                        <div className="flex items-center justify-between gap-4">
                            <p className="text-sm text-white/80">Enviar</p>

                            <span className="font-mono text-[10px] tracking-[0.1em] text-yellow-200/70 uppercase">
                                sem mudança visual
                            </span>
                        </div>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-white/55">
                        A operação está em andamento, mas visualmente o controle continua
                        disponível.
                    </p>
                </div>

                <div className="p-5">
                    <p className="font-mono text-xs text-white/40 uppercase">
                        03 · Depois da operação
                    </p>

                    <div className="mt-5 border border-white/10 bg-white/5 px-4 py-3">
                        <p className="text-sm text-white/80">Concluído</p>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-white/45">
                        A interface volta a representar o estado final da operação.
                    </p>
                </div>
            </div>

            <div className="border-t border-white/10 px-5 py-5">
                <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                    <span className="text-white/40">ação iniciada</span>
                    <span className="text-white/20">→</span>
                    <span className="text-yellow-200">estado sem feedback</span>
                    <span className="text-white/20">→</span>
                    <span className="text-white/40">resultado</span>
                </div>
            </div>
        </div>
    );
}
