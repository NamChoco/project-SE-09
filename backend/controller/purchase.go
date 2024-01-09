package controller

import (

	"net/http"

	"github.com/NamChoco/project-SE-09/entity"
	"github.com/gin-gonic/gin"
)


func GetProductByID(c *gin.Context) {
	var order []entity.Stock
	id := c.Param("id")
	if err := entity.DB().Raw("SELECT * FROM stocks WHERE id IN (SELECT stock_id FROM order_lists WHERE order_id IN (SELECT id FROM orders WHERE payment_id IN (SELECT id FROM payments WHERE member_id = ? AND payment_status_id = 1)))", id).Find(&order).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": order})
}

func GetAmountByID(c *gin.Context) {
	var amount []entity.OrderList
	id := c.Param("id")
	if err := entity.DB().Raw("SELECT amount_list,stock_id FROM order_lists WHERE stock_id IN (SELECT stock_id FROM order_lists WHERE order_id IN (SELECT id FROM orders WHERE payment_id IN (SELECT id FROM payments WHERE member_id = ? AND payment_status_id = 1)))", id).Scan(&amount).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": amount})
}

