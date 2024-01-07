package controller

import (
	"net/http"

	"github.com/NamChoco/project-SE-09/entity"
	"github.com/gin-gonic/gin"
)

func GetAddressByMemberID(c *gin.Context) {
	var address []entity.Address
	member_id := c.Param("id")
	if err := entity.DB().Preload("member_id").Raw("SELECT * FROM addresses WHERE member_id = ?", member_id).Scan(&address).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": address})
}

func YourHandlerFunction(c *gin.Context) {
	// Call GetAddressByMemberID
	var order entity.Order
	memberID := c.Param("id")
	if err := entity.DB().Preload("transport_id").Preload("member_id").Preload("address_id").Raw("SELECT address_id FROM orders WHERE member_id = ?", memberID).Scan(&order).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Extract the address ID from the order
	addressID := order.AddressID

	// Call GetAddressByAddressID
	var address entity.Address
	if err := entity.DB().Preload("transport_id").Preload("member_id").Preload("address_id").Raw("SELECT * FROM addresses WHERE id = ?", addressID).Scan(&address).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Return the data
	c.JSON(http.StatusOK, gin.H{"data": address})
}

func UpdateAddressIDAtOrder(c *gin.Context) {
	var order entity.Order
	var result entity.Order

	if err := c.ShouldBindJSON(&order); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	// ค้นหา user ด้วย id
	if tx := entity.DB().Where("id = ?", order.ID).First(&result); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "stock not found"})
		return
	}

	if err := entity.DB().Model(&result).Update("AddressID",order.AddressID).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": order})
}

func GetOrderByID(c *gin.Context) {
	var order []entity.Order
	id := c.Param("id")
	if err := entity.DB().Preload("transport_id").Preload("member_id").Preload("address_id").Raw("SELECT * FROM orders WHERE id = ?", id).Scan(&order).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": order})
}
