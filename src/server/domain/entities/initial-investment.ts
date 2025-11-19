export interface InitialInvestmentProps {
    totalValue: number;
    perHead: number;
    avgWeight: number;
}

export class InitialInvestment {
    totalValue: number;
    perHead: number;
    avgWeight: number;

    constructor(props: InitialInvestmentProps) {
        this.totalValue = props.totalValue;
        this.perHead = props.perHead;
        this.avgWeight = props.avgWeight;
    }
}
