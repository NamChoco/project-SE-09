package controller

import (
	"net/http"

	"github.com/NamChoco/project-SE-09/entity"
	"github.com/gin-gonic/gin"
)

func LoginByUsername(c *gin.Context) {
	var member entity.Member
	username := c.Param("username")
	if err := entity.DB().Raw("SELECT * FROM members WHERE username = ?", username).Find(&member).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": member})
}

// GET / Admin /:username
func LoginAdminByUsername(c *gin.Context) {
	var admin entity.Admin
	username := c.Param("username")
	if err := entity.DB().Raw("SELECT * FROM admins WHERE username = ?", username).Find(&admin).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": admin})
}