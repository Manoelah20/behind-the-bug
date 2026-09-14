import Link from "next/link";

import AsyncStateEvidence from "@/components/AsyncStateEvidence";
import AsyncStateInvestigation from "@/components/AsyncStateInvestigation";
import AsyncRootCause from "@/components/AsyncRootCause";
import AsyncStateCorrected from "@/components/AsyncStateCorrected";
import AsyncResult from "@/components/AsyncResult";

const investigacao = [
  {
    numero: "01",
    titulo: "O sintoma",
    descricao:
      "O usuário inicia uma operação e não recebe uma indicação clara de que a ação está sendo processada.",
    detalhe:
      "Sem feedback visual, a interface pode parecer parada. O usuário pode interpretar a ausência de resposta como falha ou tentar executar a mesma ação novamente.",
  },
  {
    numero: "02",
    titulo: "A evidência",
    descricao:
      "A operação depende de uma resposta assíncrona, mas o estado da interface permanece visualmente igual durante o processamento.",
    detalhe:
      "A investigação concentra-se no intervalo entre o disparo da ação e a conclusão da operação.",
  },
  {
    numero: "03",
    titulo: "A investigação",
    descricao:
      "São analisados os estados possíveis da interação: disponível, processando, concluído e falha.",
    detalhe:
      "O objetivo é verificar se a interface representa cada etapa da operação e se impede novas ações enquanto a operação ainda está em andamento.",
  },
  {
    numero: "04",
    titulo: "A causa raiz",
    descricao:
      "A ação não possui um estado de processamento explicitamente representado no componente.",
    detalhe:
      "A operação assíncrona existe, mas o estado visual da interface não acompanha seu ciclo de execução.",
  },
  {
    numero: "05",
    titulo: "A correção",
    descricao:
      "O componente passa a controlar explicitamente o estado de processamento da ação.",
    detalhe:
      "Durante a operação, a interface fornece feedback e impede uma nova execução até que a ação atual seja concluída.",
  },
  {
    numero: "06",
    titulo: "O resultado",
    descricao:
      "O usuário consegue identificar quando a operação começou, quando está em andamento e quando terminou.",
    detalhe:
      "O fluxo fica mais previsível e reduz a possibilidade de ações repetidas causadas pela falta de feedback.",
  },
];

export default function Case003() {
  return (
    <main className="min-h-screen bg-[#0b0b0d] text-[#f4f1eb]">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Link
            href="/"
            className="font-mono text-sm font-medium tracking-[0.18em] uppercase"
          >
            Behind the Bug
          </Link>

          <Link
            href="/#casos"
            className="font-mono text-xs tracking-[0.08em] text-white/45 transition-colors hover:text-white"
          >
            ← Todos os casos
          </Link>
        </div>
      </header>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs tracking-[0.18em] text-purple-400 uppercase">
                  Case 003
                </span>

                <span className="h-px w-10 bg-white/15" />

                <span className="font-mono text-xs tracking-[0.12em] text-white/30 uppercase">
                  UI State · Async · React
                </span>
              </div>

              <h1 className="mt-7 max-w-4xl text-4xl font-medium leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                Interface sem feedback durante uma operação
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
                Uma ação assíncrona é executada, mas a interface não comunica
                claramente que o processamento está acontecendo.
              </p>
            </div>

            <div className="border-l border-white/10 pl-5 lg:min-w-[150px]">
              <p className="font-mono text-[10px] tracking-[0.15em] text-white/30 uppercase">
                Severidade
              </p>

              <p className="mt-2 font-mono text-sm text-white/55">Média</p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-2 border-t border-white/10 pt-6">
            {["UI State", "Async", "React"].map((tag) => (
              <span
                key={tag}
                className="border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[10px] tracking-[0.08em] text-white/45 uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid gap-16 lg:grid-cols-[260px_1fr]">
          <aside>
            <p className="font-mono text-xs tracking-[0.18em] text-purple-400 uppercase">
              Investigação
            </p>

            <p className="mt-4 max-w-xs text-sm leading-6 text-white/40">
              O objetivo é observar como a interface representa o ciclo de
              uma operação assíncrona.
            </p>
          </aside>

          <div className="divide-y divide-white/10 border-t border-white/10">
            {investigacao.map((etapa) => (
              <article
                key={etapa.numero}
                className="grid gap-5 py-10 sm:grid-cols-[70px_1fr]"
              >
                <span className="font-mono text-xs text-purple-400/70">
                  {etapa.numero}
                </span>

                <div>
                  <h2 className="text-2xl font-medium tracking-[-0.02em]">
                    {etapa.titulo}
                  </h2>

                  <p className="mt-4 max-w-2xl text-base leading-7 text-white/65">
                    {etapa.descricao}
                  </p>

                  <p className="mt-4 max-w-2xl border-l-2 border-white/10 pl-4 text-sm leading-6 text-white/40">
                    {etapa.detalhe}
                  </p>

                  {etapa.numero === "02" && <AsyncStateEvidence />}

                  {etapa.numero === "03" && <AsyncStateInvestigation />}

                  {etapa.numero === "04" && <AsyncRootCause />}

                  {etapa.numero === "05" && <AsyncStateCorrected />}

                  {etapa.numero === "06" && <AsyncResult />}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#111114]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
            <div>
              <p className="font-mono text-xs tracking-[0.18em] text-purple-400 uppercase">
                Aprendizado técnico
              </p>
            </div>

            <div>
              <p className="max-w-3xl text-xl leading-9 tracking-[-0.02em] text-white/70 sm:text-2xl">
                Uma operação assíncrona precisa ser representada também no
                estado visual da interface. O usuário deve conseguir perceber
                quando uma ação começou, está acontecendo e terminou.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0b0b0d] px-6 py-8 text-white/30 lg:px-10">
        <div className="mx-auto flex max-w-7xl justify-between border-t border-white/10 pt-6 font-mono text-[10px] tracking-[0.1em] uppercase">
          <span>Behind the Bug</span>

          <Link
            href="/#casos"
            className="transition-colors hover:text-white/70"
          >
            Voltar para os casos
          </Link>
        </div>
      </footer>
    </main>
  );
}