package controller

import (
// 	"fmt"
"net/http"
"github.com/NamChoco/project-SE-09/entity"
"github.com/gin-gonic/gin"
)


func GetAdminByUsername(c *gin.Context) {
	var admin entity.Admin
	username := c.Param("username")
	if err := entity.DB().Raw("SELECT * FROM admins WHERE username = ?", username).Scan(&admin).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": admin})

}

// func LoginAdminByUsername(c *gin.Context) {
// 	var admin entity.Admin

// 	if err := c.ShouldBindJSON(&admin); err != nil {
// 		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
// 		return
// 	}

// 	// สร้าง User

// 	var adminResponse entity.Admin

// 	if err := entity.DB().Raw("SELECT * FROM admins WHERE username = ?", admin.Username).Find(&adminResponse).Error; err != nil {
// 		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
// 		return
// 	}
// 	// fmt.Println(memberResponse)

	
// 	result := admin.Password != adminResponse.Password 
// 	fmt.Println(result)
// 	if result {
// 		c.JSON(http.StatusBadRequest, gin.H{"error": "Passwords do not match"})
// 		return
// 	}

// 	c.JSON(http.StatusOK, gin.H{"data": adminResponse})
// }