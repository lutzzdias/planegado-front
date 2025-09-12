import { createFileRoute } from "@tanstack/react-router";
import { RadioSection } from "../components/RadioGroup";
import { SectionInfo } from "../components/SectionInfo";
import { Input } from "../components/Input";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const weightCalcOptions = ["Peso médio", "Peso total"];

  return (
    <div className="flex h-full gap-10 px-20 py-3">
      <div className="flex flex-1 flex-col">
        <div className="flex gap-2">
          <div className="flex flex-3 flex-col gap-1">
            <SectionInfo
              title="Investimento inicial"
              description="Informações para calcular o valor do investimento inicial necessário"
            />
            <RadioSection label="Simular usando:" options={weightCalcOptions} />
          </div>
          <div className="flex flex-2 flex-col gap-2">
            <Input
              name="animal-number"
              label="Número de animais"
              placeholder="42"
            />
            <Input
              name="total-weight"
              label="Peso total"
              placeholder="1000 kg"
            />
            <Input
              name="weight-price"
              label="Preço do quilo"
              placeholder="R$ 12,00"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col bg-primary">
        {/* TODO: results placeholders */}
      </div>
    </div>
  );
}
