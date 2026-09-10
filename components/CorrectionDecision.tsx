const decisoes = [
  {
    numero: "01",
    titulo: "Isolar a busca de dados",
    texto:
      "A chamada à API deve estar vinculada a um único ponto previsível do ciclo de execução do componente.",
  },
  {
    numero: "02",
    titulo: "Evitar efeitos desnecessários",
    texto:
      "Dependências e condições de execução precisam representar apenas os valores que realmente determinam uma nova busca.",
  },
  {
    numero: "03",
    titulo: "Preservar o fluxo de dados",
    texto:
      "A correção deve eliminar a chamada redundante sem alterar o estado final esperado pela interface.",
  },
];

export default function CorrectionDecision() {
  return (
    <div className="mt-8 border border-black/10 bg-[#171717] text-white">
      <div className="border-b border-white/10 px-5 py-4">
        <p className="font-mono text-xs tracking-[0.15em] text-white/40 uppercase">
          Decisão de correção
        </p>
      </div>

      <div className="divide-y divide-white/10">
        {decisoes.map((decisao) => (
          <div
            key={decisao.numero}
            className="grid gap-4 px-5 py-6 sm:grid-cols-[48px_190px_1fr]"
          >
            <span className="font-mono text-xs text-white/30">
              {decisao.numero}
            </span>

            <h3 className="font-medium text-white/90">{decisao.titulo}</h3>

            <p className="max-w-2xl text-sm leading-6 text-white/50">
              {decisao.texto}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
