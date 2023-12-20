package controller

import (
	"net/http"

	"github.com/NamChoco/project-SE-09/entity"
	"github.com/gin-gonic/gin"
)

func GetAddressByID(c *gin.Context) {
	var address entity.Address
	member_id := c.Param("member_id")
	if err := entity.DB().Raw("SELECT id FROM admins WHERE member_id = ?", member_id).Scan(&address).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": address})
}
