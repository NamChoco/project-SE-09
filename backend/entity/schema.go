package entity

import (
	"gorm.io/gorm"
)

type Member struct {
	gorm.Model
	Username  		string
	Password  		string
	FirstName 		string
	LastName  		string
	Email     		string
	Phone     		string
	Birthday  		string
	Avatar   		string 		`gorm:"type:longtext"`

	GenderID		*uint
	Gender			Gender		`gorm:"references:id"`

	OccupationID	*uint
	Occupation		Occupation	`gorm:"references:id"`

	PrefixID		*uint
	Prefix			Prefix		`gorm:"references:id"`

	Reviews 		[]Review 	`gorm:"foreignKey:MemberID"`
	Carts 			[]Cart		`gorm:"foreignKey:MemberID"`
	Payments 		[]Payment 	`gorm:"foreignKey:MemberID"`
	Orders 			[]Order 	`gorm:"foreignKey:MemberID"`
	Addresses 		[]Address 	`gorm:"foreignKey:MemberID"`
}

type Gender struct {
	gorm.Model
	NameGender		string

	Members			[]Member	`gorm:"foreignKey:GenderID"`
}

type Occupation struct {
	gorm.Model
	NameOccupation	string

	Members			[]Member	`gorm:"foreignKey:OccupationID"`
}

type Prefix struct {
	gorm.Model
	NamePrefix		string

	Members			[]Member	`gorm:"foreignKey:PrefixID"`
}

type Address struct {
	gorm.Model
	HouseNo 		string
	Moo 			string
	Province 		string
	District 		string
	Sub_district 	string
	Postal_code 	string

	MemberID 		*uint
	Member   		Member	 	`gorm:"references:id"`
}

type Review struct {
	gorm.Model
	Star 			int
	Comment 		string

	StockID 		*uint
	Stock  			Stock 		`gorm:"references:id"`

	MemberID 		*uint
	Member   		Member	 	`gorm:"references:id"` 
}

type Cart struct {
	gorm.Model
	ListCart 		string
	AmountCart 		int

	MemberID 		*uint
	Member   		Member	 	`gorm:"references:id"`
}

type Payment struct {
	gorm.Model
	MoneySlip 		string
	DateTimePayment string

	BankTypeID 		*uint
	BankType   		BankType 		`gorm:"references:id"`

	AdminID 		*uint
	Admin   		Admin 			`gorm:"references:id"`

	PaymentStatusID *uint
	PaymentStatus   PaymentStatus 	`gorm:"references:id"`

	MemberID 		*uint
	Member   		Member	 		`gorm:"references:id"`

	Orders			[]Order			`gorm:"foreignKey:PaymentID"`
}

type BankType struct {
	gorm.Model
	NameBank		string

	Payments		[]Payment		`gorm:"foreignKey:BankTypeID"`
}

type Transport struct {
	gorm.Model
	NameTransport	string

	Orders 			[]Order 	`gorm:"foreignKey:TransportID"`
}

type Admin struct {
	gorm.Model
	Username  		string
	Password  		string

	Payments 		[]Payment 	`gorm:"foreignKey:AdminID"`
	Banners	 		[]Banner 	`gorm:"foreignKey:AdminID"`
}

type Banner struct { 
	gorm.Model
	BannerImg		string 		`gorm:"type:longtext"`
	Topic			string
	Public			bool

	AdminID 		*uint
	Admin   		Admin 		`gorm:"references:id"`
}

type PaymentStatus struct {
	gorm.Model
	NameStatus		string

	Payments 		[]Payment 	`gorm:"foreignKey:PaymentStatusID"`
}

type Order struct {
	gorm.Model
	TotalOrders		string
 
	TransportID 	*uint
	Transport   	Transport 		`gorm:"references:id"`

	PaymentID 		*uint
	Payment   		Payment 		`gorm:"references:id"`

	MemberID 		*uint
	Member   		Member			`gorm:"references:id"`

	AddressID 		*uint
	Address   		Address 		`gorm:"references:id"`

	OrderLists 		[]OrderList 	`gorm:"foreignKey:OrderID"`
}

type OrderList struct {
	gorm.Model
	AmountList		int

	StockID 		*uint
	Stock   		Stock 			`gorm:"references:id"`

	OrderID 		*uint
	Order   		Order 			`gorm:"references:id"`
}

type Stock struct {
	gorm.Model
	NameStock		string
	AmountStock		int
	Price			int
	ProductImg		string			`gorm:"type:longtext"`

	CatagoriesID 	*uint
	Catagories   	Catagories 		`gorm:"references:id"`

	AdminID 		*uint
	Admin   		Admin 			`gorm:"references:id"`

	StockStatusID	*uint
	StockStatus		StockStatus		`gorm:"references:id"`

	OrderLists 		[]OrderList 	`gorm:"foreignKey:StockID"`
	Reviews 		[]Review 		`gorm:"foreignKey:StockID"`
}

type StockStatus struct {
	gorm.Model
	NameStockStatus		string

	Stocks		[]Stock 	`gorm:"foreignKey:StockStatusID"`
}

type Catagories struct {
	gorm.Model
	Code 			string
	NameCatagories	string

	Stocks 			[]Stock 		`gorm:"foreignKey:CatagoriesID"`
}

