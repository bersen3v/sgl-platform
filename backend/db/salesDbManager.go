package db

import (
	"sgl-rights/entities"
)

func GetAllSales() []entities.Sale {
	rows, _ := Pool.Query(`
		SELECT * FROM Sales
	`)
	defer rows.Close()

	sales := []entities.Sale{}

	for rows.Next() {
		e := entities.Sale{}
		rows.Scan(&e.Id, &e.EventId, &e.UserId, &e.Time)
		sales = append(sales, e)
	}

	return sales
}
