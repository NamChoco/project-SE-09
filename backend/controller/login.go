package controller

import (
	"fmt"
	"net/http"

	"github.com/NamChoco/project-SE-09/entity"
	"github.com/gin-gonic/gin"
)

func LoginByUsername(c *gin.Context) {
	var member entity.Member

	if err := c.ShouldBindJSON(&member); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// สร้าง User
	var memberResponse entity.Member

	if err := entity.DB().Raw("SELECT * FROM members WHERE username = ?", member.Username).Find(&memberResponse).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	// fmt.Println(memberResponse)

	
	result := member.Password != memberResponse.Password 
	fmt.Println(result)
	if result {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Passwords do not match"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": memberResponse})
}