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
                Caso #002
              </p>

              <h1 className="mt-5 max-w-4xl text-5xl font-medium leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                Estado vazio sem tratamento
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-black/60">
                Investigação de uma interface que recebe uma resposta válida,
                mas não comunica adequadamente a ausência de resultados.
              </p>
            </div>

            <span className="w-fit rounded-full border border-yellow-200 bg-yellow-50 px-4 py-2 text-sm font-medium text-yellow-700">
              Média severidade
            </span>
          </div>

          <div className="mt-12 flex flex-wrap gap-2 border-t border-black/10 pt-6">
            {["UI State", "UX", "React", "Data handling"].map((tag) => (
              <span
                key={tag}
                className="border border-black/10 bg-white px-3 py-1.5 font-mono text-xs text-black/55"
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
            <p className="font-mono text-xs tracking-[0.18em] text-black/40 uppercase">
              Investigação
            </p>

            <p className="mt-4 text-sm leading-6 text-black/50">
              Uma resposta vazia também é um estado válido da aplicação e
              precisa ser tratado como tal.
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
                Uma interface não possui apenas os estados de sucesso e erro.
                Carregamento, ausência de dados e falhas de comunicação
                representam situações diferentes e precisam de tratamentos
                diferentes.
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
