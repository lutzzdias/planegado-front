import { HerdProps } from "../domain/entities/herd";
import { RationProps } from "../domain/entities/ration";
import { SaleProps } from "../domain/entities/sale";

export interface ProfitRequest {
    herd: HerdProps;
    ration?: RationProps | null;
    sale: SaleProps;
    days: number;
}
