package controller

import (
	"net/http"

	"github.com/NamChoco/project-SE-09/entity"
	"github.com/gin-gonic/gin"
)

// func CreatePayment(c *gin.Context) {
// 	var payment entity.Payment
// 	var banktype entity.BankType
// 	var admin entity.Admin
// 	var paymentStatus entity.PaymentStatus
// 	var member entity.Member

// 	// bind เข้าตัวแปร user
// 	if err := c.ShouldBindJSON(&payment); err != nil {
// 		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
// 		return
// 	}

// 	if tx := entity.DB().Where("id = ?", payment.BankTypeID).First(&member); tx.RowsAffected == 0 {
// 		c.JSON(http.StatusBadRequest, gin.H{"error": "member not found"})
// 		return
// 	}

// 	if tx := entity.DB().Where("id = ?", payment.AdminID).First(&admin); tx.RowsAffected == 0 {
// 		c.JSON(http.StatusBadRequest, gin.H{"error": "payment not found"})
// 		return
// 	}
// 	if tx := entity.DB().Where("id = ?", payment.PaymentStatusID).First(&paymentStatus); tx.RowsAffected == 0 {
// 		c.JSON(http.StatusBadRequest, gin.H{"error": "payment not found"})
// 		return
// 	}
// 	if tx := entity.DB().Where("id = ?", payment.MemberID).First(&member); tx.RowsAffected == 0 {
// 		c.JSON(http.StatusBadRequest, gin.H{"error": "payment not found"})
// 		return
// 	}

// 	// สร้าง User
// 	p := entity.Payment{
// 		MoneySlip:       payment.MoneySlip,

// 		DateTimePayment: payment.DateTimePayment,

// 		BankTypeID: 	payment.BankTypeID,
// 		BankType:   	banktype,

// 		AdminID: 		payment.AdminID,
// 		Admin:   		admin,

// 		PaymentStatusID: payment.PaymentStatusID,
// 		PaymentStatus:   paymentStatus,

// 		MemberID: 		payment.MemberID,
// 		Member:   		member,
// 	}

// 	// บันทึก
// 	if err := entity.DB().Create(&p).Error; err != nil {
// 		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
// 		return
// 	}

// 	c.JSON(http.StatusOK, gin.H{"data": p})
// }


func CreatePayment(c *gin.Context) {
	var payment entity.Payment

	if err := c.ShouldBindJSON(&payment); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	if err := entity.DB().Create(&payment).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": payment})
}