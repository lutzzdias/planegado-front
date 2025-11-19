import { z } from 'zod';

export const RationSchema = z.object({
    percentageAliveWeight: z.number().min(0).max(100),
    expectedGMD: z.number().min(0),
    priceKg: z.number().min(0)
});