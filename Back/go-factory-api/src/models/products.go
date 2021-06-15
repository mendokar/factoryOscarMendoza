package models

import (
	"log"

	"github.com/zeshanwd/go-res-api/src/database"
)

type Products struct {
	Prod_id       int    `json:"Prod_id"`
	Prod_name     string `json:"prod_name"`
	Prod_category string `json:"prod_category"`
	Created_at    string `json:"created_at"`
}

func GetProducts(prod_category string) []Products {
	/*fmt.Println("prod_category", prod_category)
	db := database.GetConnection()
	row := db.QueryRow("SELECT prod_id, prod_name FROM productos WHERE prod_category = $1", prod_category)

	var Prod_id int
	var Prod_name string
	err := row.Scan(&Prod_id, &Prod_name)
	if err != nil {
		return Products{}, false
	}

	return Products{Prod_id, Prod_name, prod_category}, true*/

	db := database.GetConnection()
	rows, err := db.Query("SELECT * FROM productos WHERE prod_category = $1", prod_category)
	if err != nil {
		log.Fatal(err)
	}

	defer rows.Close()

	var productos []Products
	for rows.Next() {
		t := Products{}

		var Prod_id int
		var Prod_name string
		var Prod_category string
		var Created_at string
		err := rows.Scan(&Prod_id, &Prod_name, &Prod_category, &Created_at)
		if err != nil {
			log.Fatal(err)
		}

		t.Prod_id = Prod_id
		t.Prod_name = Prod_name
		t.Prod_category = prod_category
		t.Created_at = Created_at

		productos = append(productos, t)
	}

	err = rows.Err()
	if err != nil {
		log.Fatal(err)
	}

	return productos

}
