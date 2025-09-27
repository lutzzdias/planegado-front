import { Herd } from "./herd";

export interface RationProps {
    percentageAliveWeight: number;
    expectedGMD: number;
    priceKg: number;
}

export class Ration {
    percentageAliveWeight: number;
    expectedGMD: number;
    priceKg: number;

    constructor(props: RationProps) {
        this.percentageAliveWeight = props.percentageAliveWeight;
        this.expectedGMD = props.expectedGMD;
        this.priceKg = props.priceKg;
    }

    calcDailyConsumption(avgWeight: number): number {
        return avgWeight * (this.percentageAliveWeight / 100);
    }

    calcTotalCost(herd: Herd, days: number): number {
        const avgWeight = herd.calcMediumWeight();
        const daily = this.calcDailyConsumption(avgWeight);
        return herd.numberOfAnimals * daily * this.priceKg * days;
    }
}
