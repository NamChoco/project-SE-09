package unit

import (
	"testing"

	"github.com/NamChoco/project-SE-09/entity"
	"github.com/asaskevich/govalidator"
	. "github.com/onsi/gomega"
)

func TestNameStock(t *testing.T) {

	g := NewGomegaWithT(t)

	t.Run(`Name is required`, func(t *testing.T) {
		stock := entity.Stock{
			NameStock:   "", //ผิด
			AmountStock: 20,
			Price:       200,
			ProductImg:  "image",
		}

		ok, err := govalidator.ValidateStruct(stock)

		g.Expect(ok).NotTo(BeTrue())
		g.Expect(err).NotTo(BeNil())

		g.Expect(err.Error()).To(Equal("Name is required"))
	})
}

func TestPrice(t *testing.T) {

	g := NewGomegaWithT(t)

	t.Run(`Price is required`, func(t *testing.T) {
		stock := entity.Stock{
			NameStock:   "Food",
			AmountStock: 20,
			Price:       0, //ผิด
			ProductImg:  "image",
		}

		ok, err := govalidator.ValidateStruct(stock)

		g.Expect(ok).NotTo(BeTrue())
		g.Expect(err).NotTo(BeNil())

		g.Expect(err.Error()).To(Equal("Price is required"))
	})

	t.Run(`Price must be greater than 0`, func(t *testing.T) {
		stock := entity.Stock{
			NameStock:   "Food",
			AmountStock: 20,
			Price:     -100  , //ผิด
			ProductImg:  "image",
		}

		ok, err := govalidator.ValidateStruct(stock)

		g.Expect(ok).NotTo(BeTrue())
		g.Expect(err).NotTo(BeNil())
		g.Expect(err.Error()).To(Equal("Price must be greater than 0"))
	})
}

func TestQuantity(t *testing.T) {

	g := NewGomegaWithT(t)

	t.Run(`Quantity is required`, func(t *testing.T) {
		stock := entity.Stock{
			NameStock:   "Food",
			AmountStock: 0,
			Price:       200, //ผิด
			ProductImg:  "image",
		}

		ok, err := govalidator.ValidateStruct(stock)

		g.Expect(ok).NotTo(BeTrue())
		g.Expect(err).NotTo(BeNil())
		g.Expect(err.Error()).To(Equal("Amount is required"))
	})
}
