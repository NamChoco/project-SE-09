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
		&Members{},
		&Addresses{},
		&Reviews{},
		&Carts{},
		&Payments{},
		&Transports{},
		&Admin{},
		&Banners{},
		&PaymentStatus{},
		&Orders{},
		&Stocks{},
		&Catagories{},
	)

	db = database
}