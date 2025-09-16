import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/Section";
import { InfoIcon } from "lucide-react";
import { ResultItem } from "../components/ResultItem";
import { useAppForm } from "../hooks/form";
import { ProfitArea } from "../components/ProfitArea";

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

  const defaultForm = {
    animalNumber: "",
    initialWeight: "",
    initialKiloPrice: "",

    // ration
    rationWeightPercentage: "",
    expectedDmg: "",
    rationKiloPrice: "",

    // final
    finalWeight: "",
    finalKiloPrice: "",
    splitPercentageInvestor: "",
  };

  const form = useAppForm({
    defaultValues: defaultForm,
    validators: {
      // TODO: add validation
    },
    onSubmit: ({ value }) => {
      console.debug(`Form submitted with values: ${value}`);
    },
  });

  return (
    <div className="flex h-full gap-10 px-20 py-3">
      <form
        className="flex flex-1 flex-col gap-6"
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <div className="flex flex-col gap-12">
          <Section
            title="Investimento inicial"
            description="Informações para calcular o valor do investimento inicial necessário"
            options={initialInvestmentOptions}
          >
            <form.AppField
              name="animalNumber"
              children={(field) => (
                <field.TextField label="Número de animais" placeholder="42" />
              )}
            />
            <form.AppField
              name="initialWeight"
              children={(field) => (
                <field.TextField label="Peso total" placeholder="1000 kg" />
              )}
            />
            <form.AppField
              name="initialKiloPrice"
              children={(field) => (
                <field.TextField
                  label="Preço do quilo"
                  placeholder="R$ 12,00"
                />
              )}
            />
          </Section>
          <Section
            title="Ração"
            description="Informações para calcular o valor referente ao investimento relacionado à ração"
            options={regimeOptions}
          >
            <form.AppField
              name="rationWeightPercentage"
              children={(field) => (
                <field.TextField
                  label="% do peso vivo"
                  placeholder="0,3 %"
                  hint="explicando o que é esse valor, pra que serve e alguns exemplos de ratios comuns"
                />
              )}
            />
            <form.AppField
              name="expectedDmg"
              children={(field) => (
                <field.TextField
                  label="GMD esperado"
                  placeholder="1 kg / dia"
                />
              )}
            />
            <form.AppField
              name="rationKiloPrice"
              children={(field) => (
                <field.TextField label="Preço do quilo" placeholder="R$ 2,20" />
              )}
            />
          </Section>
          <Section
            title="Venda"
            description="Informações referentes à saída dos animais"
            options={exitOptions}
          >
            <form.AppField
              name="finalWeight"
              children={(field) => (
                <field.TextField label="Peso médio" placeholder="400 kg" />
              )}
            />
            <form.AppField
              name="finalKiloPrice"
              children={(field) => (
                <field.TextField
                  label="Preço do quilo"
                  placeholder="R$ 12,00"
                />
              )}
            />
            <form.AppField
              name="splitPercentageInvestor"
              children={(field) => (
                <field.TextField
                  label="% do lucro do investidor"
                  placeholder="50 %"
                />
              )}
            />
          </Section>
        </div>
        <div className="flex justify-end">
          <form.Subscribe selector={(state) => state.isSubmitting}>
            {(isSubmitting) => (
              <button
                disabled={isSubmitting}
                className="w-min cursor-pointer rounded-lg bg-primary px-6 py-2 text-white"
              >
                Calcular
              </button>
            )}
          </form.Subscribe>
        </div>
      </form>
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
          <ProfitArea />
        </div>
      </div>
    </div>
  );
}
