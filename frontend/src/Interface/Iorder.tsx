import { AddressInterface } from "./Iaddress";
import { MemberInterface } from "./Imember";
import { TransportInterface } from "./itransport";


export interface OrderInterface {
    ID?: number;
    TotalOrder?: string;

    TransportID?: number;
    Transport?: TransportInterface;

    MemberID?: number;
    Member?: MemberInterface;

    AddressesID?: number;
    addresses?: AddressInterface;
}