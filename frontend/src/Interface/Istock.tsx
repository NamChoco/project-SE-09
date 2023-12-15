import { AdminInterface } from "./Iadmin"
import { CategoriesInterface } from "./Icategories"
import { StockStatusInterface } from "./Istockstatus"

export interface StockInterface {
    ID?:				number,
    NameStock?:	        string,
	AmountStock?:		number,
	Price?:			    number,
	ProductImg?:		string,


	CategoriesID?: 		number,
	Categories?:		CategoriesInterface,
	StockStatusID?:		number,
	StockStatus?:		StockStatusInterface
	AdminID ?:			Number,
	Admin  ?:			AdminInterface
}