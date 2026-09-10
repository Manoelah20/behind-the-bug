import Link from "next/link";
import InvestigationFlow from "../../../components/InvestigationFlow";
import NetworkEvidence from "../../../components/NetworkEvidence";
import RootCause from "../../../components/RootCause";
import CorrectionDecision from "../../../components/CorrectionDecision";
import ResultSummary from "../../../components/ResultSummary";

const investigacao = [
  {
    numero: "01",
    titulo: "O sintoma",
    descricao:
      "O dashboard apresenta uma sensação de lentidão durante o carregamento dos dados iniciais.",
    detalhe:
      "A interface eventualmente exibe as informações corretas, mas a atividade de rede indica que o mesmo recurso está sendo solicitado mais de uma vez.",
  },
  {
    numero: "02",
    titulo: "A evidência",
    descricao:
      "O painel Network do DevTools revela requisições repetidas para o mesmo endpoint durante a renderização inicial.",
    detalhe:
      "Os dados retornados são idênticos, mas as chamadas adicionais aumentam o tráfego de rede e geram trabalho desnecessário para a aplicação.",
  },
  {
    numero: "03",
    titulo: "A investigação",
    descricao:
      "A primeira hipótese é que a própria API esteja respondendo mais de uma vez.",
    detalhe:
      "Ao comparar os iniciadores das requisições com o ciclo de vida do componente, as evidências apontam para o Front-end e não para a API.",
  },
  {
    numero: "04",
    titulo: "A causa raiz",
    descricao:
      "A lógica responsável pela busca dos dados está sendo executada mais vezes do que o necessário durante o ciclo de vida do componente.",
    detalhe:
      "O problema não está na quantidade de dados retornados pela API, mas na forma como o componente inicia a requisição.",
  },
  {
    numero: "05",
    titulo: "A correção",
    descricao:
      "O ciclo de vida da requisição é revisado e a lógica de busca é isolada no ponto adequado de execução.",
    detalhe:
      "O objetivo não é apenas reduzir o número de chamadas, mas tornar o fluxo de dados previsível e mais fácil de manter.",
  },
  {
    numero: "06",
    titulo: "O resultado",
    descricao:
      "O dashboard chega ao mesmo estado final com menos atividade de rede desnecessária.",
    detalhe:
      "A investigação demonstra como evidências obtidas no Network podem levar a uma decisão concreta de Front-end, em vez de depender de suposições sobre performance.",
  },
];

export default function Caso001() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#171717]">
      <header className="border-b border-black/8">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Link
            href="/"
            className="text-sm font-semibold tracking-[0.18em] uppercase"
          >
            Behind the Bug
          </Link>

          <Link
            href="/#casos"
            className="text-sm text-black/55 transition-colors hover:text-black"
          >
            ← Todos os casos
          </Link>
        </div>
      </header>

      <section className="border-b border-black/8">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-mono text-xs tracking-[0.2em] text-black/40 uppercase">
                Caso #001
              </p>

              <h1 className="mt-5 max-w-4xl text-5xl font-medium leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                Requisições duplicadas à API
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-black/60">
                Investigação de requisições repetidas e rastreamento do
                problema até o fluxo de dados do Front-end.
              </p>
            </div>

            <span className="w-fit rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-700">
              Alta severidade
            </span>
          </div>

          <div className="mt-12 flex flex-wrap gap-2 border-t border-black/10 pt-6">
            {["Network", "Performance", "React", "Data fetching"].map(
              (tag) => (
                <span
                  key={tag}
                  className="border border-black/10 bg-white px-3 py-1.5 font-mono text-xs text-black/55"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid gap-16 lg:grid-cols-[260px_1fr]">
          <aside>
            <p className="font-mono text-xs tracking-[0.18em] text-black/40 uppercase">
              Investigação
            </p>

            <p className="mt-4 text-sm leading-6 text-black/50">
              Do sintoma à causa raiz, cada etapa é sustentada por evidências
              observáveis.
            </p>
          </aside>

          <div className="divide-y divide-black/10 border-t border-black/10">
            {investigacao.map((etapa) => (
              <article
                key={etapa.numero}
                className="grid gap-5 py-9 sm:grid-cols-[70px_1fr]"
              >
                <span className="font-mono text-xs text-black/35">
                  {etapa.numero}
                </span>
                <div>
                  <h2 className="text-2xl font-medium tracking-[-0.02em]">
                    {etapa.titulo}
                  </h2>

                  <p className="mt-4 max-w-2xl text-base leading-7 text-black/70">
                    {etapa.descricao}
                  </p>

                  <p className="mt-4 max-w-2xl border-l-2 border-black/10 pl-4 text-sm leading-6 text-black/45">
                    {etapa.detalhe}
                  </p>

                  {etapa.numero === "02" && <NetworkEvidence />}

                  {etapa.numero === "03" && <InvestigationFlow />}

                  {etapa.numero === "04" && <RootCause />}

                  {etapa.numero === "05" && <CorrectionDecision />}

                  {etapa.numero === "06" && <ResultSummary />}

                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/8 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
            <div>
              <p className="font-mono text-xs tracking-[0.18em] text-black/40 uppercase">
                Aprendizado técnico
              </p>
            </div>

            <div>
              <p className="max-w-3xl text-2xl leading-10 tracking-[-0.02em] text-black/75">
                Problemas de performance nem sempre são causados por APIs
                lentas. Antes de alterar a infraestrutura, é preciso observar
                as evidências e entender como a aplicação está produzindo as
                requisições.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#171717] px-6 py-8 text-white/40 lg:px-10">
        <div className="mx-auto flex max-w-7xl justify-between text-xs">
          <span>Behind the Bug</span>

          <Link href="/#casos" className="hover:text-white">
            Voltar para os casos
          </Link>
        </div>
      </footer>
    </main>
  );
}