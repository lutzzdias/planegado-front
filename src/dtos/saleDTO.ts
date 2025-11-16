import { z } from "zod";

export const SaleSchema = z.object({
    priceKg: z.number().min(0)
});