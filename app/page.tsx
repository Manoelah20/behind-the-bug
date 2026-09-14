import Link from "next/link";

const casos = [
  {
    id: "001",
    titulo: "Requisições duplicadas à API",
    descricao:
      "Um dashboard realiza várias requisições para o mesmo recurso, aumentando a atividade de rede e afetando a percepção de performance.",
    severidade: "Alta",
    areas: ["Network", "Performance", "React"],
  },
  {
    id: "002",
    titulo: "Estado vazio sem tratamento",
    descricao:
      "A interface não trata corretamente uma resposta vazia da API, deixando o usuário sem um retorno claro sobre o estado da aplicação.",
    severidade: "Média",
    areas: ["React", "API", "UI State"],
  },
  {
    id: "003",
    titulo: "Interface sem feedback durante uma operação",
    descricao:
      "Uma ação assíncrona é executada, mas a interface não comunica claramente que o processamento está acontecendo.",
    severidade: "Média",
    areas: ["React", "Async", "UI State"],
  },
];

function getClassesSeveridade(severidade: string) {
  if (severidade === "Alta") {
    return "border-purple-400/30 bg-purple-500/10 text-purple-300";
  }

  return "border-white/15 bg-white/5 text-white/60";
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0b0d] text-[#f4f1eb]">
      <header className="border-b border-white/10 bg-[#0b0b0d]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Link
            href="/"
            className="font-mono text-sm font-medium tracking-[0.18em] uppercase"
          >
            Behind the Bug
          </Link>

          <nav className="flex items-center gap-5 font-mono text-xs tracking-[0.12em] uppercase">
  <Link
    href="#casos"
    className="text-white/45 transition-colors hover:text-white"
  >
    Casos
  </Link>

  <Link
    href="#sobre"
    className="text-white/45 transition-colors hover:text-white"
  >
    Sobre
  </Link>

  <Link
    href="/investigar"
    className="border border-purple-400/30 bg-purple-400/10 px-3 py-2 text-purple-300 transition-colors hover:bg-purple-400/15"
  >
    + Investigar
  </Link>
</nav>
        </div>
      </header>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid gap-16 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-6 font-mono text-xs tracking-[0.2em] text-purple-400 uppercase">
                Technical investigation
              </p>

              <h1 className="max-w-3xl text-4xl font-medium leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                Investigue o que aconteceu.
                <br />
                Entenda por quê.
                <br />
                <span className="text-white/45">Corrija o que importa.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
                Casos técnicos para investigar problemas reais de Front-end
                através de evidências, diagnóstico e decisões de
                desenvolvimento.
              </p>
            </div>

            <div className="border-l border-white/10 pl-6 lg:mb-2">
              <p className="font-mono text-xs tracking-[0.18em] text-white/35 uppercase">
                Investigations
              </p>

              <p className="mt-3 text-5xl font-light tracking-[-0.04em]">
                03
              </p>

              <p className="mt-2 font-mono text-xs tracking-[0.12em] text-white/35 uppercase">
                cases documented
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="casos"
        className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24"
      >
        <div className="mb-10 flex items-end justify-between border-b border-white/10 pb-5">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-purple-400 uppercase">
              Case files
            </p>

            <h2 className="mt-2 text-2xl font-medium tracking-tight">
              Investigações
            </h2>
          </div>

          <p className="hidden font-mono text-xs text-white/30 sm:block">
            001 — 003
          </p>
        </div>

        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-2">
          {casos.map((caso) => (
            <article
              key={caso.id}
              className="group flex min-h-[390px] flex-col justify-between bg-[#111114] p-7 transition-colors duration-200 hover:bg-[#16161a] sm:p-9"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-sm text-purple-400">
                    {caso.id}
                  </span>

                  <span
                    className={`border px-3 py-1 font-mono text-[10px] tracking-[0.08em] uppercase ${getClassesSeveridade(
                      caso.severidade
                    )}`}
                  >
                    {caso.severidade}
                  </span>
                </div>

                <h3 className="mt-12 max-w-xl text-3xl font-medium leading-tight tracking-[-0.025em] sm:text-4xl">
                  {caso.titulo}
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
                  {caso.descricao}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {caso.areas.map((area) => (
                    <span
                      key={area}
                      className="border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] tracking-[0.06em] text-white/40 uppercase"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-5">
                <span className="font-mono text-[10px] tracking-[0.08em] text-white/25 uppercase">
                  Investigation case
                </span>

                <Link
                  href={`/cases/${caso.id}`}
                  className="font-mono text-xs text-white/60 transition-colors group-hover:text-purple-300"
                >
                  Investigar →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#111114]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between lg:px-10 lg:py-14">
          <div>
            <p className="font-mono text-xs tracking-[0.18em] text-purple-400 uppercase">
              Nova investigação
            </p>

            <p className="mt-3 text-lg text-white/70">
              Tem outro caso para investigar?
            </p>

            <p className="mt-1 text-sm leading-6 text-white/40">
              Traga uma URL ou descreva um problema de Front-end.
            </p>
          </div>

          <Link
            href="/investigar"
            className="w-fit border border-purple-400/30 bg-purple-400/10 px-5 py-3 font-mono text-xs tracking-[0.08em] text-purple-300 uppercase transition-colors hover:bg-purple-400/15"
          >
            + Investigar um caso →
          </Link>
        </div>
      </section>

      <section
        id="sobre"
        className="border-t border-white/10 bg-[#111114]"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr]">
            <div>
              <p className="font-mono text-xs tracking-[0.2em] text-purple-400 uppercase">
                About
              </p>
            </div>

            <div>
              <p className="max-w-4xl text-xl leading-9 tracking-[-0.02em] text-white/70 sm:text-2xl">
                Behind the Bug é um projeto técnico de portfólio focado em
                como problemas de Front-end são investigados, compreendidos e
                solucionados — e não simplesmente corrigidos de forma
                superficial.
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