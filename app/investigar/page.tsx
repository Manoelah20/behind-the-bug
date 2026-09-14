"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type Investigacao = {
  titulo: string;
  url: string;
  problema: string;
  evidencias: string;
};

export default function InvestigarPage() {
  const [investigacao, setInvestigacao] =
    useState<Investigacao | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const titulo = String(formData.get("titulo") ?? "").trim();
    const url = String(formData.get("url") ?? "").trim();
    const problema = String(formData.get("problema") ?? "").trim();
    const evidencias = String(formData.get("evidencias") ?? "").trim();

    if (!titulo || !problema) {
      return;
    }

    setInvestigacao({
      titulo,
      url,
      problema,
      evidencias,
    });
  }

  function novaInvestigacao() {
    setInvestigacao(null);
  }

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

      {!investigacao ? (
        <>
          <section className="border-b border-white/10">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
              <div className="max-w-4xl">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs tracking-[0.18em] text-purple-400 uppercase">
                    Nova investigação
                  </span>

                  <span className="h-px w-10 bg-white/15" />

                  <span className="font-mono text-xs tracking-[0.12em] text-white/30 uppercase">
                    Bring a case
                  </span>
                </div>

                <h1 className="mt-7 max-w-3xl text-4xl font-medium leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                  Traga um problema de Front-end para investigar.
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
                  Apresente o problema, compartilhe o que já foi observado e
                  comece a organizar a investigação a partir das evidências.
                </p>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
            <div className="grid gap-16 lg:grid-cols-[260px_1fr]">
              <aside>
                <p className="font-mono text-xs tracking-[0.18em] text-purple-400 uppercase">
                  Caso inicial
                </p>

                <p className="mt-4 max-w-xs text-sm leading-6 text-white/40">
                  Quanto mais clara a descrição do problema, mais fácil é
                  separar sintomas, evidências e hipóteses.
                </p>
              </aside>

              <div className="max-w-3xl">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label
                      htmlFor="titulo"
                      className="font-mono text-xs tracking-[0.12em] text-white/55 uppercase"
                    >
                      Título do problema
                    </label>

                    <input
                      id="titulo"
                      name="titulo"
                      type="text"
                      required
                      placeholder="Ex.: Requisições repetidas ao trocar um filtro"
                      className="mt-3 w-full border border-white/10 bg-[#111114] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/20 focus:border-purple-400/50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="url"
                      className="font-mono text-xs tracking-[0.12em] text-white/55 uppercase"
                    >
                      URL da aplicação
                      <span className="ml-2 text-white/25">(opcional)</span>
                    </label>

                    <input
                      id="url"
                      name="url"
                      type="url"
                      placeholder="https://exemplo.com"
                      className="mt-3 w-full border border-white/10 bg-[#111114] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/20 focus:border-purple-400/50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="problema"
                      className="font-mono text-xs tracking-[0.12em] text-white/55 uppercase"
                    >
                      O que está acontecendo?
                    </label>

                    <textarea
                      id="problema"
                      name="problema"
                      required
                      rows={6}
                      placeholder="Descreva o comportamento que você está observando..."
                      className="mt-3 w-full resize-y border border-white/10 bg-[#111114] px-4 py-3 text-sm leading-6 text-white outline-none transition-colors placeholder:text-white/20 focus:border-purple-400/50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="evidencias"
                      className="font-mono text-xs tracking-[0.12em] text-white/55 uppercase"
                    >
                      O que você já observou?
                    </label>

                    <textarea
                      id="evidencias"
                      name="evidencias"
                      rows={6}
                      placeholder="Ex.: O Network mostra três chamadas para o mesmo endpoint..."
                      className="mt-3 w-full resize-y border border-white/10 bg-[#111114] px-4 py-3 text-sm leading-6 text-white outline-none transition-colors placeholder:text-white/20 focus:border-purple-400/50"
                    />
                  </div>

                  <div className="border-t border-white/10 pt-6">
                    <button
                      type="submit"
                      className="border border-purple-400/30 bg-purple-400/10 px-5 py-3 font-mono text-xs tracking-[0.08em] text-purple-300 uppercase transition-colors hover:bg-purple-400/15"
                    >
                      Iniciar investigação →
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>

          <section className="border-y border-white/10 bg-[#111114]">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
              <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
                <div>
                  <p className="font-mono text-xs tracking-[0.18em] text-purple-400 uppercase">
                    Como funciona
                  </p>
                </div>

                <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-3">
                  <div className="bg-[#111114] p-5">
                    <p className="font-mono text-xs text-purple-400/70">
                      01
                    </p>
                    <p className="mt-5 font-medium text-white/85">
                      Descrever
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/40">
                      Apresente o comportamento que precisa ser investigado.
                    </p>
                  </div>

                  <div className="bg-[#111114] p-5">
                    <p className="font-mono text-xs text-purple-400/70">
                      02
                    </p>
                    <p className="mt-5 font-medium text-white/85">
                      Observar
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/40">
                      Registre as evidências que já estão disponíveis.
                    </p>
                  </div>

                  <div className="bg-[#111114] p-5">
                    <p className="font-mono text-xs text-purple-400/70">
                      03
                    </p>
                    <p className="mt-5 font-medium text-white/85">
                      Investigar
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/40">
                      Organize hipóteses e decisões a partir das evidências.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          <section className="border-b border-white/10">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-4xl">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs tracking-[0.18em] text-purple-400 uppercase">
                      Investigation draft
                    </span>

                    <span className="h-px w-10 bg-white/15" />

                    <span className="font-mono text-xs tracking-[0.12em] text-white/30 uppercase">
                      Initial evidence
                    </span>
                  </div>

                  <h1 className="mt-7 max-w-4xl text-4xl font-medium leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                    {investigacao.titulo}
                  </h1>

                  <p className="mt-6 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
                    Ficha inicial organizada a partir das informações
                    fornecidas.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={novaInvestigacao}
                  className="w-fit border border-white/10 bg-white/[0.03] px-4 py-2 font-mono text-xs tracking-[0.08em] text-white/50 uppercase transition-colors hover:border-white/20 hover:text-white"
                >
                  Nova investigação
                </button>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
            <div className="grid gap-16 lg:grid-cols-[260px_1fr]">
              <aside>
                <p className="font-mono text-xs tracking-[0.18em] text-purple-400 uppercase">
                  Investigation file
                </p>

                <p className="mt-4 max-w-xs text-sm leading-6 text-white/40">
                  Esta ficha organiza os dados iniciais. A causa raiz ainda
                  precisa ser sustentada por evidências.
                </p>
              </aside>

              <div className="divide-y divide-white/10 border-t border-white/10">
                <article className="grid gap-5 py-10 sm:grid-cols-[70px_1fr]">
                  <span className="font-mono text-xs text-purple-400/70">
                    01
                  </span>

                  <div>
                    <h2 className="text-2xl font-medium tracking-[-0.02em]">
                      Problema observado
                    </h2>

                    <p className="mt-4 max-w-2xl text-base leading-7 text-white/65">
                      {investigacao.problema}
                    </p>
                  </div>
                </article>

                <article className="grid gap-5 py-10 sm:grid-cols-[70px_1fr]">
                  <span className="font-mono text-xs text-purple-400/70">
                    02
                  </span>

                  <div>
                    <h2 className="text-2xl font-medium tracking-[-0.02em]">
                      Evidências disponíveis
                    </h2>

                    {investigacao.evidencias ? (
                      <p className="mt-4 max-w-2xl border-l-2 border-white/10 pl-4 text-base leading-7 text-white/55">
                        {investigacao.evidencias}
                      </p>
                    ) : (
                      <p className="mt-4 max-w-2xl border-l-2 border-amber-400/20 pl-4 text-sm leading-6 text-amber-300/70">
                        Nenhuma evidência foi registrada ainda. Este é o
                        próximo ponto a investigar.
                      </p>
                    )}
                  </div>
                </article>

                <article className="grid gap-5 py-10 sm:grid-cols-[70px_1fr]">
                  <span className="font-mono text-xs text-purple-400/70">
                    03
                  </span>

                  <div>
                    <h2 className="text-2xl font-medium tracking-[-0.02em]">
                      Contexto
                    </h2>

                    {investigacao.url ? (
                      <div className="mt-4 border border-white/10 bg-[#111114] px-4 py-4">
                        <p className="font-mono text-[10px] tracking-[0.12em] text-white/30 uppercase">
                          URL informada
                        </p>

                        <p className="mt-2 break-all font-mono text-sm text-purple-300">
                          {investigacao.url}
                        </p>
                      </div>
                    ) : (
                      <p className="mt-4 text-sm leading-6 text-white/40">
                        Nenhuma URL foi informada. A investigação pode
                        continuar apenas com as evidências descritas.
                      </p>
                    )}
                  </div>
                </article>

                <article className="grid gap-5 py-10 sm:grid-cols-[70px_1fr]">
                  <span className="font-mono text-xs text-purple-400/70">
                    04
                  </span>

                  <div>
                    <h2 className="text-2xl font-medium tracking-[-0.02em]">
                      Próximos pontos de investigação
                    </h2>

                    <div className="mt-5 border border-white/10 bg-[#111114]">
                      <div className="border-b border-white/10 px-5 py-4">
                        <p className="font-mono text-xs tracking-[0.12em] text-white/35 uppercase">
                          Checklist inicial
                        </p>
                      </div>

                      <div className="divide-y divide-white/10">
                        <div className="px-5 py-4">
                          <p className="text-sm text-white/65">
                            Reproduzir o comportamento observado
                          </p>
                        </div>

                        <div className="px-5 py-4">
                          <p className="text-sm text-white/65">
                            Identificar quando o problema acontece
                          </p>
                        </div>

                        <div className="px-5 py-4">
                          <p className="text-sm text-white/65">
                            Comparar o comportamento esperado com o observado
                          </p>
                        </div>

                        <div className="px-5 py-4">
                          <p className="text-sm text-white/65">
                            Registrar evidências antes de definir a causa
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>
        </>
      )}

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