import z from "zod";
import { HerdSchema } from "./HerdDTO";
import { RationSchema } from "./RationDTO";
import { SaleSchema } from "./saleDTO";

export const ProfitRequestSchema = z.object({
    herd: HerdSchema,
    ration: RationSchema.nullable().optional(),
    sale: SaleSchema,
    days: z.number().min(1)
});
