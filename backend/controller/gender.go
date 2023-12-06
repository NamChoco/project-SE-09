package controller

import (
	"net/http"

	"github.com/NamChoco/project-SE-09/entity"
	"github.com/gin-gonic/gin"
)


func GetGender(c *gin.Context) {
	var gender []entity.Gender
	if err := entity.DB().Raw("SELECT * FROM genders").Find(&gender).Error; err != nil{
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data":gender})
}