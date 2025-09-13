import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/Section";
import { TextField } from "../components/TextField";
import { InfoIcon } from "lucide-react";
import { ResultItem } from "../components/ResultItem";

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
      <div className="flex flex-1 flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-medium text-primary">
            Investimento inicial
          </h3>
          <div className="flex justify-between">
            <ResultItem title="Peso médio" value="220 kg" />
            <ResultItem title="Valor total" value="R$ 42.073,00" />
            <ResultItem title="Valor por cabeça" value="R$ 2.694,33" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-medium text-primary">Ração</h3>
          <div className="flex justify-between">
            <ResultItem
              title="Média de consumo diário"
              value="4,31 kg"
              hint="sample"
            />
            <ResultItem title="Quantidade total" value="705 kg" />
            <ResultItem title="Valor total" value="R$ 7.325,00" />
          </div>
          <div className="flex w-full flex-col gap-1">
            <div className="flex items-center gap-1 text-sm font-normal text-gray-600">
              Consumo de ração
              <InfoIcon className="h-3.5 w-3.5 cursor-pointer" />
            </div>
            Gráfico
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-medium text-primary">Venda</h3>
          <div className="flex justify-between">
            <ResultItem title="Peso total" value="16.800 kg" />
            <ResultItem title="Valor total" value="R$ 73.987,00" />
            <ResultItem title="Data de saída" value="25/02/2003" />
          </div>
          <div className="flex w-full flex-col gap-1">
            <div className="flex items-center gap-1 text-sm font-normal text-gray-600">
              Lucro
              <InfoIcon className="h-3.5 w-3.5 cursor-pointer" />
            </div>
            <div className="flex flex-1 flex-col items-center gap-1 text-lg font-semibold">
              <div className="flex w-full text-xs font-normal text-white">
                <div
                  className={`flex flex-${50} items-center justify-between rounded-s-md bg-primary px-3 py-2`}
                >
                  <span>Investidor</span>
                  <span>R$ 21.780,50</span>
                  <span>50%</span>
                </div>
                <div
                  className={`flex flex-${50} items-center justify-between rounded-e-md bg-gray-500 px-3 py-2`}
                >
                  <span>50%</span>
                  <span>R$ 21.780,50</span>
                  <span>Produtor</span>
                </div>
              </div>
              R$ 43.561,00
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
