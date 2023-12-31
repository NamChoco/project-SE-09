package main

import (
	"github.com/NamChoco/project-SE-09/controller"
	"github.com/NamChoco/project-SE-09/entity"
	"github.com/gin-gonic/gin"
)

func main() {
	entity.SetupDatabase() //เชื่อมข้อมูล sqlite ผ่าน gorm
	r := gin.Default()  //สร้าง object r และใช้เป็น server  api route
	r.Use(CORSMiddleware())

	r.GET("/gender",controller.GetGender)
	r.GET("/prefix",controller.GetPrefix)
	r.GET("/occupation",controller.GetOccupation)
	r.GET("/banktype",controller.GetBankType)
	r.GET("/categories",controller.GetCategories)
	r.GET("/status",controller.GetStockStatus)
	r.GET("/stocks",controller.GetStock)
	r.GET("/stocks/:id",controller.GetStockByID)
	r.GET("/purchase/:id",controller.GetProductByID)
	r.GET("/amount/:id",controller.GetAmountByID)
	r.POST("/members", controller.CreateMember)
	r.POST("/stock", controller.CreateStock)
	r.POST("/payment", controller.CreatePayment)
	r.GET("/member/:username", controller.LoginByUsername)
	r.GET("/admin/:username", controller.LoginAdminByUsername)
	r.GET("/stock/:username", controller.GetAdminByUsername)
	r.GET("/orderMember/:username", controller.UpdateIDAddressOfOrder)
	r.GET("/addressMemberID/:id", controller.GetAddressByMemberID)
	r.GET("/dataAddress/:id", controller.YourHandlerFunction)
	r.GET("/dataOrder/:id", controller.GetOrderByID)


	r.DELETE("/stock/:id", controller.DeleteStock)

	r.PATCH("/stock", controller.UpdateStock)
	r.PATCH("/changeAddress", controller.UpdateAddressIDAtOrder)
	
	r.Run(":8080")

}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE, PATCH")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}
