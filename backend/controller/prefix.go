package controller

import (
	"net/http"

	"github.com/NamChoco/project-SE-09/entity"
	"github.com/gin-gonic/gin"
)


func GetPrefix(c *gin.Context) {
	var prefix []entity.Prefix
	if err := entity.DB().Raw("SELECT * FROM prefixes").Find(&prefix).Error; err != nil{
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data":prefix})
}