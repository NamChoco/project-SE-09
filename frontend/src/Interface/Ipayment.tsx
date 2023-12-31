import { BankTypeInterface } from "./IBankType";
import { PaymentStatusInterface } from "./Ipaymentstatus";
import { AdminInterface } from "./Iadmin";
import { MemberInterface } from "./Imember";
import { OrderInterface } from "./Iorder";


export interface PaymentInterface {
    ID?: number;
    MoneySlip?: string;
    DateTimePayment?: string;


    BankTypeID?: number;
    BankType?: BankTypeInterface;

    AdminID?: number;
    Admin?: AdminInterface;

    PaymentStatusID?: number;
    PaymentStatus?: PaymentStatusInterface;

    MemberID?: number;
    Member?: MemberInterface;

    OrderID?: number;
    Order?: OrderInterface;
}