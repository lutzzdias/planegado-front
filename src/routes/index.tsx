import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="flex h-full gap-10 px-20 py-3">
      <div className="flex flex-1 flex-col">
        <div className="flex gap-2">
          <div className="flex flex-1 flex-col gap-1">
            <h2 className="text-xl font-semibold">Investimento inicial</h2>
            <div className="text-sm text-black/60">
              Informações para calcular o valor do investimento inicial
              necessário
            </div>
            <div className="flex flex-col gap-2 text-sm font-normal">
              <div className="text-md font-medium">Simular usando:</div>
              <label className="flex items-center gap-2">
                <input type="radio" />
                Peso total
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" checked />
                Número de animais e peso médio
              </label>
            </div>
          </div>
          <div className="flex flex-1 flex-col">{/* TODO: add inputs */}</div>
        </div>
      </div>
      <div className="flex flex-1 flex-col bg-primary">
        {/* TODO: results placeholders */}
      </div>
    </div>
  );
}
