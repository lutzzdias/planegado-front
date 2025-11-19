import { z } from 'zod';
import { WeightCalculationType } from '../server/domain/enums/weight-calc-type';

export const HerdSchema = z.object({
    numberOfAnimals: z.number().min(1),
    totalWeight: z.number().min(0),
    priceKg: z.number().min(0),
    weightCalculationType: z.enum(WeightCalculationType)
});