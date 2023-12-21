package entity

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var db *gorm.DB //ประกาศตัวแปปรเป็น object ของ gorm

func DB() *gorm.DB { //รับ object จัดการฐานข้อมูล
	return db //คืนค่า object
}

func SetupDatabase() {
	database, err := gorm.Open(sqlite.Open("PawsInLuxury.db"), &gorm.Config{}) //กำหนดการเชื่อมต่อกับฐานข้อมูล
	if err != nil {
		panic("Failed to connect database")
	}

	// Migrate the schema
	database.AutoMigrate(
		&Member{},
		&Gender{},
		&Occupation{},
		&Prefix{},
		&Address{},
		&Review{},
		&Cart{},
		&Payment{},
		&BankType{},
		&Transport{},
		&Admin{},
		&Banner{},
		&PaymentStatus{},
		&Order{},
		&OrderList{},
		&Stock{},
		&StockStatus{},
		&Categories{},
	)

	db = database

	//------------------------------Member Data---------------------------------- //
	member := Member{
		Username:  "member",
		Password:  "password",
		FirstName: "Member FirstName",
		LastName:  "Member LastName",
		Email:     "member@example.com",
		Phone:     "0987654321",
		Birthday:  "1990-01-01",
		Avatar:    "Img-Avatar",
	}
	db.Model(&Member{}).Create(&member)

	//------------------------------Admin Data---------------------------------- //
	admin := Admin{
		Username: "admin",
		Password: "password",
	}
	database.Create(&admin)

	//------------------------------Payment Status---------------------------------- //
	confirm := PaymentStatus{
		NameStatus: "Confirm",
	}
	db.Model(&PaymentStatus{}).Create(&confirm)

	cancel := PaymentStatus{
		NameStatus: "Cancel",
	}
	db.Model(&PaymentStatus{}).Create(&cancel)
	
	//------------------------------Bank Type---------------------------------- //
	SCB := BankType{
		NameBank: "SCB",
	}
	db.Model(&BankType{}).Create(&SCB)

	KTB := BankType{
		NameBank: "KTB",
	}
	db.Model(&BankType{}).Create(&KTB)

	KBANK := BankType{
		NameBank: "KBANK",
	}
	db.Model(&BankType{}).Create(&KBANK)

	BBL := BankType{
		NameBank: "BBL",
	}
	db.Model(&BankType{}).Create(&BBL)

	BAY := BankType{
		NameBank: "BAY",
	}
	db.Model(&BankType{}).Create(&BAY)

	TMB := BankType{
		NameBank: "TMB",
	}
	db.Model(&BankType{}).Create(&TMB)

	TBANK := BankType{
		NameBank: "TBANK",
	}
	db.Model(&BankType{}).Create(&TBANK)

	GSB := BankType{
		NameBank: "GSB",
	}
	db.Model(&BankType{}).Create(&GSB)

	//------------------------------Gender Data---------------------------------- //
	male := Gender{
		NameGender: "Male",
	}
	db.Model(&Gender{}).Create(&male)

	female := Gender{
		NameGender: "Female",
	}
	db.Model(&Gender{}).Create(&female)

	//------------------------------Occupation Data---------------------------------- //
	Teacher := Occupation{
		NameOccupation: "Teacher",
	}
	db.Model(&Occupation{}).Create(&Teacher)

	Student := Occupation{
		NameOccupation: "Student",
	}
	db.Model(&Occupation{}).Create(&Student)

	//------------------------------Prefix Data---------------------------------- //
	mr := Prefix{
		NamePrefix: "Mr.",
	}
	db.Model(&Prefix{}).Create(&mr)

	ms := Prefix{
		NamePrefix: "Ms.",
	}
	db.Model(&Prefix{}).Create(&ms)

	//------------------------------Address Data---------------------------------- //
	addr1 := Address{
		HouseNo:      "999",
		Moo:          "5",
		Province:     "Bangkok",
		District:     "bang ra jun",
		Sub_district: "sut yot",
		Postal_code:  "10101",
	}
	database.Create(&addr1)

	addr2 := Address{
		HouseNo:      "222",
		Moo:          "4",
		Province:     "Ra yong hi",
		District:     "Ra bert way ra",
		Sub_district: "Som",
		Postal_code:  "10101",
	}
	database.Create(&addr2)

	// ------------------------------StockStatus Data---------------------------------- //
	status1 := StockStatus{
		NameStockStatus: "Active",
	}
	database.Create(&status1)

	status2 := StockStatus{
		NameStockStatus: "Inactive",
	}
	database.Create(&status2)

	//------------------------------Catagories Data---------------------------------- //
	pet1 := Categories{
		NameCategories: "Pet",
	}
	database.Create(&pet1)

	pet2 := Categories{
		NameCategories: "Pet Item",
	}
	database.Create(&pet2)

	pet3 := Categories{
		NameCategories: "Pet Food",
	}
	database.Create(&pet3)
	//------------------------------Transpot---------------------------------- //
}

