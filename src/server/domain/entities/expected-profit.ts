import { Herd } from "./herd";
import { Ration } from "./ration";
import { Sale } from "./sale";
import { InitialInvestment } from "./initial-investment";

export class ExpectedProfit {
    investment?: InitialInvestment;
    ration?: Ration | null;
    sale: Sale;
    profit: number = 0;

    constructor(ration: Ration | null, sale: Sale) {
        this.ration = ration;
        this.sale = sale;
    }

    calcProfit(herd: Herd, days: number): number {
        const investment = herd.calcInvestment();
        const rationCost = this.ration ? this.ration.calcTotalCost(herd, days) : 0;
        const saleValue = this.sale.calcTotalValue(herd);

        this.investment = investment;
        this.profit = saleValue - investment.totalValue - rationCost;
        return this.profit;
    }
}
