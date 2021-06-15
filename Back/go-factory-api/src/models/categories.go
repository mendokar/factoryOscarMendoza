package models

import (
	"log"

	"github.com/zeshanwd/go-res-api/src/database"
)

type Categories struct {
	Cat_id     int    `json:"cat_id"`
	Cat_name   string `json:"cat_name"`
	Created_at string `json:"created_at"`
}

func GetCategories() []Categories {
	db := database.GetConnection()
	rows, err := db.Query("SELECT * FROM categorias ORDER BY cat_id")
	if err != nil {
		log.Fatal(err)
	}

	defer rows.Close()

	var categorias []Categories
	for rows.Next() {
		t := Categories{}
		var Cat_id int
		var Cat_name string
		var Created_at string
		err := rows.Scan(&Cat_id, &Cat_name, &Created_at)
		if err != nil {
			log.Fatal(err)
		}

		t.Cat_id = Cat_id
		t.Cat_name = Cat_name
		t.Created_at = Created_at

		categorias = append(categorias, t)
	}

	err = rows.Err()
	if err != nil {
		log.Fatal(err)
	}

	return categorias

}
