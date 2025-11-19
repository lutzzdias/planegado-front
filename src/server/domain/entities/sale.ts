import { Herd } from "./herd";

export interface SaleProps {
    priceKg: number;
}

export class Sale {
    priceKg: number;

    constructor(props: SaleProps) {
        this.priceKg = props.priceKg;
    }

    calcTotalValue(herd: Herd): number {
        return herd.totalWeight * this.priceKg;
    }
}
