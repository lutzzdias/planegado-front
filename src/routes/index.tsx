import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/Section";
import { TextField } from "../components/TextField";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const initialInvestmentOptions = {
    label: "Calcular usando:",
    values: ["Peso médio", "Peso total"],
  };
  const regimeOptions = {
    label: "Regime",
    values: ["Aberto", "Confinado / semi-confinado"],
  };
  const exitOptions = {
    label: "Calcular usando:",
    values: ["Peso médio", "Peso total"],
  };

  return (
    <div className="flex h-full gap-10 px-20 py-3">
      <div className="flex flex-1 flex-col gap-12">
        <Section
          title="Investimento inicial"
          description="Informações para calcular o valor do investimento inicial necessário"
          options={initialInvestmentOptions}
        >
          <TextField
            name="animal-number"
            label="Número de animais"
            placeholder="42"
          />
          <TextField
            name="total-weight"
            label="Peso total"
            placeholder="1000 kg"
          />
          <TextField
            name="initial-kilo-price"
            label="Preço do quilo"
            placeholder="R$ 12,00"
          />
        </Section>
        <Section
          title="Ração"
          description="Informações para calcular o valor referente ao investimento relacionado à ração"
          options={regimeOptions}
        >
          <TextField
            name="ration-weight-percentage"
            label="% do peso vivo"
            placeholder="0,3 %"
            hint="explicando o que é esse valor, pra que serve e alguns exemplos de ratios comuns"
          />
          <TextField
            name="expected-dmg"
            label="GMD esperado"
            placeholder="1 kg / dia"
          />
          <TextField
            name="ration-kilo-price"
            label="Preço do quilo"
            placeholder="R$ 2,20"
          />
        </Section>
        <Section
          title="Venda"
          description="Informações referentes à saída dos animais"
          options={exitOptions}
        >
          <TextField name="exit-weight" label="Peso médio" placeholder="42" />
          <TextField
            name="exit-weight-price"
            label="Preço do quilo"
            placeholder="R$ 12,00"
          />
          <TextField
            name="split-percentage-investor"
            label="% do lucro do investidor"
            placeholder="50 %"
          />
        </Section>
      </div>
      <div className="flex flex-1 flex-col bg-primary">
        {/* TODO: results placeholders */}
      </div>
    </div>
  );
}
