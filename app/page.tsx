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
];

function getClassesSeveridade(severidade: string) {
  if (severidade === "Alta") {
    return "border-red-200 bg-red-50 text-red-700";
  }

  return "border-amber-200 bg-amber-50 text-amber-700";
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#171717]">
      <header className="border-b border-black/8 bg-[#f7f7f5]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Link
            href="/"
            className="text-sm font-semibold tracking-[0.18em] uppercase"
          >
            Behind the Bug
          </Link>

          <nav className="flex items-center gap-6 text-sm text-black/60">
            <Link
              href="#casos"
              className="transition-colors hover:text-black"
            >
              Casos
            </Link>

            <Link
              href="#sobre"
              className="transition-colors hover:text-black"
            >
              Sobre o projeto
            </Link>
          </nav>
        </div>
      </header>

      <section className="border-b border-black/8">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="max-w-4xl">
            <p className="mb-6 font-mono text-xs tracking-[0.2em] text-black/45 uppercase">
              Laboratório de investigação Front-end
            </p>

            <h1 className="max-w-4xl text-5xl font-medium leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
              Investigue o que aconteceu.
              <br />
              Entenda por quê.
              <br />
              Corrija o que importa.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-black/60">
              Casos técnicos para investigar problemas reais de Front-end
              através de evidências, diagnóstico e decisões de desenvolvedores.
            </p>
          </div>

          <div className="mt-16 flex flex-col gap-6 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-xs tracking-[0.15em] text-black/45 uppercase">
              Investigações em andamento
            </p>

            <p className="text-sm text-black/50">
              02 casos disponíveis
            </p>
          </div>
        </div>
      </section>

      <section
        id="casos"
        className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24"
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {casos.map((caso) => (
            <article
              key={caso.id}
              className="group flex min-h-[390px] flex-col justify-between border border-black/10 bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)] sm:p-9"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-xs text-black/35">
                    #{caso.id}
                  </span>

                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-medium ${getClassesSeveridade(
                      caso.severidade
                    )}`}
                  >
                    {caso.severidade} severidade
                  </span>
                </div>

                <h2 className="mt-12 text-3xl font-medium tracking-[-0.025em]">
                  {caso.titulo}
                </h2>

                <p className="mt-5 max-w-xl text-base leading-7 text-black/60">
                  {caso.descricao}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {caso.areas.map((area) => (
                    <span
                      key={area}
                      className="border border-black/10 bg-[#f7f7f5] px-2.5 py-1 font-mono text-[11px] text-black/55"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-12 flex items-center justify-between border-t border-black/8 pt-5">
                <span className="text-sm text-black/40">
                  Caso de investigação
                </span>

                <Link
                  href={`/cases/${caso.id}`}
                  className="text-sm font-medium transition-transform duration-200 group-hover:translate-x-1"
                >
                  Investigar →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="sobre"
        className="border-t border-black/8 bg-[#171717] text-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
            <div>
              <p className="font-mono text-xs tracking-[0.2em] text-white/40 uppercase">
                Sobre o projeto
              </p>
            </div>

            <div>
              <p className="max-w-3xl text-2xl leading-10 tracking-[-0.02em] text-white/85">
                Behind the Bug é um projeto técnico de portfólio focado em
                como problemas de Front-end são investigados, compreendidos e
                solucionados — e não simplesmente corrigidos de forma
                superficial.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#171717] px-6 pb-8 text-white/35 lg:px-10">
        <div className="mx-auto flex max-w-7xl justify-between border-t border-white/10 pt-6 text-xs">
          <span>Behind the Bug</span>
          <span>Front-end</span>
        </div>
      </footer>
    </main>
  );
}