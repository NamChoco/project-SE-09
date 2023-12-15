package controller

import (
	"net/http"

	"github.com/NamChoco/project-SE-09/entity"
	"github.com/gin-gonic/gin"
)

func GetCategories(c *gin.Context) {
	var categories  []entity.Categories
	if err := entity.DB().Raw("SELECT * FROM categories").Find(&categories).Error; err != nil{
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data":categories})
}