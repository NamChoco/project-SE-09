import { OrderInterface } from "./Iorder";
import { StockInterface } from "./Istock";



export interface OrderListInterface {
    ID?: number;
    AmountList?: number;

    StockID?: number;
    Stock?: StockInterface;

    OrderID?: number;
    Order?: OrderInterface;
}