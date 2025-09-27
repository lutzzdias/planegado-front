import { Herd } from "../entities/herd";
import { Ration } from "../entities/ration";
import { Sale } from "../entities/sale";
import { ExpectedProfit } from "../entities/expected-profit";

export class CalculateExpectedProfit {
    execute(herd: Herd, ration: Ration | null, sale: Sale, days: number): ExpectedProfit {
        const expectedProfit = new ExpectedProfit(ration, sale);
        expectedProfit.calcProfit(herd, days);
        return expectedProfit;
    }
}
