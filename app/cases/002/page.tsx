import Link from "next/link";

import StatePanel from "../../../components/StatePanel";
import RootCauseEmpty from "../../../components/RootCauseEmpty";
import EmptyResultCorrected from "../../../components/EmptyResultCorrected";
import Result from "../../../components/Result";

const investigacao = [
  {
    numero: "01",
    titulo: "O sintoma",
    descricao:
      "O usuário realiza uma busca e a aplicação retorna corretamente, mas a área de resultados permanece sem uma orientação clara.",
    detalhe:
      "A ausência de registros é apresentada visualmente de forma semelhante a uma lista que ainda não recebeu dados.",
  },
  {
    numero: "02",
    titulo: "A evidência",
    descricao:
      "A resposta da API indica sucesso, porém a coleção retornada está vazia.",
    detalhe:
      "O problema não está na comunicação com o servidor. A aplicação recebeu uma resposta válida e precisa representar esse estado na interface.",
  },
  {
    numero: "03",
    titulo: "A investigação",
    descricao:
      "O fluxo de estados da tela é analisado para identificar como carregamento, erro, sucesso e ausência de resultados são tratados.",
    detalhe:
      "A investigação mostra que existe tratamento para dados disponíveis, mas não há uma condição específica para uma resposta bem-sucedida sem registros.",
  },
  {
    numero: "04",
    titulo: "A causa raiz",
    descricao:
      "A interface considera apenas a existência ou ausência de dados, sem distinguir o estado vazio como uma situação válida da aplicação.",
    detalhe:
      "Com isso, um resultado legítimo da busca acaba parecendo uma falha ou uma tela incompleta.",
  },
  {
    numero: "05",
    titulo: "A correção",
    descricao:
      "Um estado vazio explícito é criado para informar que a busca foi concluída, mas não encontrou registros.",
    detalhe:
      "A mensagem deve contextualizar o resultado e, quando fizer sentido, oferecer uma ação para ajustar os critérios da busca.",
  },
  {
    numero: "06",
    titulo: "O resultado",
    descricao:
      "A interface passa a representar corretamente a ausência de resultados sem confundi-la com carregamento ou erro.",
    detalhe:
      "Cada estado passa a comunicar uma situação diferente para o usuário e para o próprio fluxo da aplicação.",
  },
];

export default function Caso002() {
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
                  Case 002
                </span>

                <span className="h-px w-10 bg-white/15" />

                <span className="font-mono text-xs tracking-[0.12em] text-white/30 uppercase">
                  UI State · UX · React
                </span>
              </div>

              <h1 className="mt-7 max-w-4xl text-4xl font-medium leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                Estado vazio sem tratamento
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
                Investigação de uma interface que recebe uma resposta válida,
                mas não comunica adequadamente a ausência de resultados.
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
            {["UI State", "UX", "React", "Data handling"].map((tag) => (
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
              Uma resposta vazia também é um estado válido da aplicação e
              precisa ser tratado como tal.
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

                  {etapa.numero === "02" && <StatePanel />}

                  {etapa.numero === "04" && <RootCauseEmpty />}

                  {etapa.numero === "05" && <EmptyResultCorrected />}

                  {etapa.numero === "06" && <Result />}
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
                Uma interface não possui apenas os estados de sucesso e erro.
                Carregamento, ausência de dados e falhas de comunicação
                representam situações diferentes e precisam de tratamentos
                diferentes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
  <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-xs text-white/35 md:flex-row md:items-center md:justify-between">
    <p>© 2026 Manoela Harrison · Behind the Bug</p>

    <p>Investigações técnicas sobre problemas de Front-end.</p>
  </div>
</footer>
    </main>
  );
}
