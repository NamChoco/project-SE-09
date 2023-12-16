package controller

import (
	"net/http"

	"github.com/NamChoco/project-SE-09/entity"
	"github.com/gin-gonic/gin"
)

func GetStockStatus(c *gin.Context) {
	var stockstatus  []entity.StockStatus
	if err := entity.DB().Raw("SELECT * FROM stock_statuses").Find(&stockstatus).Error; err != nil{
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data":stockstatus})
}