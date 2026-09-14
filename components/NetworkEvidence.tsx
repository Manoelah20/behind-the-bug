const requests = [
  {
    method: "GET",
    endpoint: "/api/dashboard",
    status: "200",
    size: "18.4 kB",
    time: "142 ms",
    initiator: "Dashboard.tsx",
  },
  {
    method: "GET",
    endpoint: "/api/dashboard",
    status: "200",
    size: "18.4 kB",
    time: "139 ms",
    initiator: "Dashboard.tsx",
  },
];

export default function NetworkEvidence() {
  return (
    <div className="mt-8 overflow-hidden border border-black/10 bg-[#111] text-white">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div>
          <p className="font-mono text-xs text-white/40">Network</p>
          <p className="mt-1 text-sm text-white/80">
            Atividade durante o carregamento inicial
          </p>
        </div>

        <span className="border border-red-400/30 bg-red-400/10 px-2.5 py-1 font-mono text-[10px] tracking-[0.12em] text-red-300 uppercase">
          2 requests
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-left font-mono text-xs">
          <thead className="border-b border-white/10 text-white/35">
            <tr>
              <th className="px-4 py-3 font-normal">Method</th>
              <th className="px-4 py-3 font-normal">Name</th>
              <th className="px-4 py-3 font-normal">Status</th>
              <th className="px-4 py-3 font-normal">Size</th>
              <th className="px-4 py-3 font-normal">Time</th>
              <th className="px-4 py-3 font-normal">Initiator</th>
            </tr>
          </thead>

          <tbody>
            {requests.map((request, index) => (
              <tr
                key={`${request.endpoint}-${index}`}
                className="border-b border-white/6 last:border-b-0"
              >
                <td className="px-4 py-4 text-white/60">{request.method}</td>

                <td className="px-4 py-4 text-white/85">
                  {request.endpoint}
                </td>

                <td className="px-4 py-4 text-white/60">
                  {request.status}
                </td>

                <td className="px-4 py-4 text-white/60">
                  {request.size}
                </td>

                <td className="px-4 py-4 text-white/50">
                  {request.time}
                </td>

                <td className="px-4 py-4 text-white/50">
                  {request.initiator}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="border-t border-white/10 px-4 py-3">
        <p className="text-xs leading-5 text-white/45">
          A mesma rota foi solicitada duas vezes durante o carregamento inicial.
          A resposta da API é válida nas duas chamadas.
        </p>
      </div>
    </div>
  );
}