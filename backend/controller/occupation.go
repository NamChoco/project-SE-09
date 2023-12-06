package controller

import (
	"net/http"

	"github.com/NamChoco/project-SE-09/entity"
	"github.com/gin-gonic/gin"
)


func GetOccupation(c *gin.Context) {
	var occupation []entity.Occupation
	if err := entity.DB().Raw("SELECT * FROM occupations").Find(&occupation).Error; err != nil{
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data":occupation})
}