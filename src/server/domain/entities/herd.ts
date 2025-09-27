import { WeightCalculationType } from "../enums/weight-calc-type";
import { InitialInvestment } from "./initial-investment";

export interface HerdProps {
    numberOfAnimals: number;
    totalWeight: number;
    priceKg: number;
    weightCalculationType: WeightCalculationType;
}

export class Herd {
    numberOfAnimals: number;
    totalWeight: number;
    priceKg: number;
    weightCalculationType: WeightCalculationType;

    constructor(props: HerdProps) {
        this.numberOfAnimals = props.numberOfAnimals;
        this.totalWeight = props.totalWeight;
        this.priceKg = props.priceKg;
        this.weightCalculationType = props.weightCalculationType;
    }

    calcMediumWeight(): number {
        if (this.numberOfAnimals === 0) return 0;
        return this.totalWeight / this.numberOfAnimals;
    }

    calcInvestment(): InitialInvestment {
        if (this.weightCalculationType === WeightCalculationType.Total) {
            return new InitialInvestment({
                totalValue: this.totalWeight * this.priceKg,
                perHead: (this.totalWeight * this.priceKg) / this.numberOfAnimals,
                avgWeight: this.calcMediumWeight(),
            });
        }

        const avgWeight = this.calcMediumWeight();
        return new InitialInvestment({
            totalValue: this.numberOfAnimals * avgWeight * this.priceKg,
            perHead: avgWeight * this.priceKg,
            avgWeight,
        });
    }
}
