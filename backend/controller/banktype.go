package controller

import (
	"net/http"

	"github.com/NamChoco/project-SE-09/entity"
	"github.com/gin-gonic/gin"
)


func GetBankType(c *gin.Context) {
	var bankType []entity.BankType
	if err := entity.DB().Raw("SELECT * FROM banktypes").Find(&bankType).Error; err != nil{
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data":bankType})
}