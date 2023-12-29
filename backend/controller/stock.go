package controller

import (
	"fmt"
	"net/http"

	"github.com/NamChoco/project-SE-09/entity"
	"github.com/asaskevich/govalidator"
	"github.com/gin-gonic/gin"
)

func CreateStock(c *gin.Context) {
	var stock entity.Stock

	if err := c.ShouldBindJSON(&stock); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	

	if _, err := govalidator.ValidateStruct(stock); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// สร้าง stock
	if err := entity.DB().Create(&stock).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": stock})
}

func DeleteStock(c *gin.Context) {
	id := c.Param("id")
	if tx := entity.DB().Exec("DELETE FROM stocks WHERE id = ?", id); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Stock not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": id})
}




func GetStock(c *gin.Context) {
	var stock  []entity.Stock
	if err := entity.DB().Raw("SELECT * FROM stocks").Find(&stock).Error; err != nil{
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data":stock})
}

func GetStockByID(c *gin.Context) {
	var stock entity.Stock
	id := c.Param("id")
	if err := entity.DB().Preload("Categories").Preload("StockStatus").Raw("SELECT * FROM stocks WHERE id = ?", id).Find(&stock).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": stock})
}

func UpdateStock(c *gin.Context) {
	var stock entity.Stock
	var result entity.Stock

	if err := c.ShouldBindJSON(&stock); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	// ค้นหา user ด้วย id
	if tx := entity.DB().Where("id = ?", stock.ID).First(&result); tx.RowsAffected == 0 {
		fmt.Println("Stock ID:", stock.ID)
		c.JSON(http.StatusBadRequest, gin.H{"error": "stock not found"})
		return
	}

	

	if err := entity.DB().Save(&stock).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": stock})
}