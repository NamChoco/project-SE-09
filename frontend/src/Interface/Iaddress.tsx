import { MemberInterface } from "./Imember";

export interface AddressInterface {
    ID?: Number;
    HouseNo?: string;
    Moo?: string;
    Province?: string;
    District?: string;
    Sub_district?: string;
    Postal_code?: string;

    MemberID?: number;
    Member?: MemberInterface;
}