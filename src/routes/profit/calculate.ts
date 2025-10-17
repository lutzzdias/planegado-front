import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { ProfitRequest } from "../../server/types/profit-request";
import { Herd } from "../../server/domain/entities/herd";
import { Ration } from "../../server/domain/entities/ration";
import { Sale } from "../../server/domain/entities/sale";
import { CalculateExpectedProfit } from "../../server/domain/usecases/calc-expected-profit";
import { WeightCalculationType } from "../../server/domain/enums/weight-calc-type";

const HerdSchema = z.object({
    numberOfAnimals: z.number().min(1),
    totalWeight: z.number().min(0),
    priceKg: z.number().min(0),
    weightCalculationType: z.enum(WeightCalculationType)
});

const RationSchema = z.object({
    percentageAliveWeight: z.number().min(0).max(100),
    expectedGMD: z.number().min(0),
    priceKg: z.number().min(0)
});

const SaleSchema = z.object({
    priceKg: z.number().min(0)
});

const ProfitRequestSchema = z.object({
    herd: HerdSchema,
    ration: RationSchema.nullable().optional(),
    sale: SaleSchema,
    days: z.number().min(1)
});

export const calculateProfit = createServerFn({
    method: "POST",
})
    .validator((data) => ProfitRequestSchema.parse(data))
    .handler(async ({ data }) => {
        const herd = new Herd(data.herd);
        const ration = data.ration ? new Ration(data.ration) : null;
        const sale = new Sale(data.sale);
        const usecase = new CalculateExpectedProfit();
        const result = usecase.execute(herd, ration, sale, data.days);

        const investment = herd.calcInvestment();

        return {
            investment: {
                totalValue: investment.totalValue,
                perHead: investment.perHead,
                avgWeight: investment.avgWeight
            },
            ration: result.ration ? {
                percentageAliveWeight: result.ration.percentageAliveWeight,
                expectedGMD: result.ration.expectedGMD,
                priceKg: result.ration.priceKg,
                dailyConsumption: result.ration.calcDailyConsumption(herd.calcMediumWeight()),
                totalCost: result.ration.calcTotalCost(herd, data.days)
            } : null,
            sale: {
                priceKg: sale.priceKg,
                totalValue: sale.calcTotalValue(herd)
            },
            profit: result.profit,
        };
    });