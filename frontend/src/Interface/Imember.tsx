import { GenderInterface } from "./Igender"
import { OccupationInterface } from "./Ioccupation"
import { PrefixInterface } from "./Iprefix"

export interface MemberInterface {
    id?:    number,
    username?: string,
    password?: string,
    FirstName?: string,
    LastName?: string,
    email?: string,
    phone?: string,
    birthday?: string,
    avatar?: string,
    
    GenderID?: number,
    Gender ?: GenderInterface
    OccupationID?: number,
    Occupation?: OccupationInterface
    PrefixID?: number | undefined 
    Prefix?: PrefixInterface
}