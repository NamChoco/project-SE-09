package entity

import (
	"gorm.io/gorm"
)

type Members struct {
	gorm.Model
	Username  		string
	Password  		string
	FirstName 		string
	LastName  		string
	Email     		string
	Phone     		string
	Birthday  		string
	ProfileMember   string 		`gorm:"type:longtext"`

	// GenderID ทำหน้าที่เป็น FK 
	AddressesID 	*uint
	Addresses   	Addresses 	`gorm:"references:id"`

	Reviews 		[]Reviews 	`gorm:"foreignKey:MembersID"`
	Carts 			[]Carts 	`gorm:"foreignKey:MembersID"`
	Payments 		[]Payments 	`gorm:"foreignKey:MembersID"`
}

type Addresses struct {
	gorm.Model
	HouseNo 		string
	Moo 			string
	Province 		string
	District 		string
	Sub_district 	string
	Postal_code 	string

	Members 		[]Members `gorm:"foreignKey:AddressesID"`
}

type Reviews struct {
	gorm.Model
	Star 			int
	Comment 		string

	MembersID 		*uint
	Members   		Members `gorm:"references:id"`
}

type Carts struct {
	gorm.Model
	ListCart 		string
	AmountCart 		int

	MembersID 		*uint
	Members   		Members `gorm:"references:id"`
}

type Payments struct {
	gorm.Model
	MoneySlip 		string
	DateTimePayment string

	TransportsID 	*uint
	Transports  	Transports `gorm:"references:id"`

	AdminID 		*uint
	Admin   		Admin `gorm:"references:id"`

	PaymentStatusID *uint
	PaymentStatus   PaymentStatus `gorm:"references:id"`

	MembersID 		*uint
	Members   		Members `gorm:"references:id"`

	Orders 			[]Orders 	`gorm:"foreignKey:PaymentsID"`
}

type Transports struct {
	gorm.Model
	NameTransport	string

	Payments 		[]Payments 	`gorm:"foreignKey:TransportsID"`
}

type Admin struct {
	gorm.Model
	Username  		string
	Password  		string
	FirstName 		string
	LastName  		string		
	ProfileAdmin  	string		`gorm:"type:longtext"`

	Payments 		[]Payments 	`gorm:"foreignKey:AdminID"`
	Banners 		[]Banners 	`gorm:"foreignKey:AdminID"`
}

type Banners struct { 
	gorm.Model
	BannerImg		string 		`gorm:"type:longtext"`
	Topic			string

	AdminID 		*uint
	Admin   		Admin 		`gorm:"references:id"`
}

type PaymentStatus struct {
	gorm.Model
	NameStatus		string

	Payments 		[]Payments 	`gorm:"foreignKey:PaymentStatusID"`
}

type Orders struct {
	gorm.Model
	TotalOrder		int

	PaymentsID 		*uint
	Payments   		Payments 		`gorm:"references:id"`

	OrderLists 		[]OrderLists 	`gorm:"foreignKey:OrdersID"`
}

type OrderLists struct {
	gorm.Model
	AmountList		int

	OrdersID 		*uint
	Orders   		Orders 			`gorm:"references:id"`

	StocksID 		*uint
	Stocks   		Stocks 			`gorm:"references:id"`
}

type Stocks struct {
	gorm.Model
	NameStock		string
	AmountStock		int
	ProductImg		string			`gorm:"type:longtext"`
	Price			int

	CatagoriesID 	*uint
	Catagories   	Catagories 		`gorm:"references:id"`

	OrderLists 		[]OrderLists 	`gorm:"foreignKey:StocksID"`
}

type Catagories struct {
	gorm.Model
	Code 			string
	NameCategory	string

	Stocks 			[]Stocks 	`gorm:"foreignKey:CatagoriesID"`
}

