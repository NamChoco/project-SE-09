package main

import (
	// "github.com/NamChoco/project-SE-09/controller"
	"github.com/NamChoco/project-SE-09/entity"
	"github.com/gin-gonic/gin"
)

func main() {
	entity.SetupDatabase() //เชื่อมข้อมูล sqlite ผ่าน gorm
	r := gin.Default()  //สร้าง object r และใช้เป็น server  api route
	r.Use(CORSMiddleware())


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
