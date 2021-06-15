package models

import (
	"log"

	"github.com/zeshanwd/go-res-api/src/database"
)

type Restaurants struct {
	Rest_id    int    `json:"rest_id"`
	Rest_name  string `json:"rest_name"`
	Rest_phone string `json:"rest_phone"`
	Created_at string `json:"created_at"`
}

func GetRestaurants() []Restaurants {
	db := database.GetConnection()
	rows, err := db.Query("SELECT * FROM restaurantes ORDER BY rest_id")
	if err != nil {
		log.Fatal(err)
	}

	defer rows.Close()

	var restaurantes []Restaurants
	for rows.Next() {
		t := Restaurants{}

		var Rest_id int
		var Rest_name string
		var Rest_phone string
		var Created_at string
		err := rows.Scan(&Rest_id, &Rest_name, &Rest_phone, &Created_at)
		if err != nil {
			log.Fatal(err)
		}

		t.Rest_id = Rest_id
		t.Rest_name = Rest_name
		t.Rest_phone = Rest_phone
		t.Created_at = Created_at

		restaurantes = append(restaurantes, t)
	}

	err = rows.Err()
	if err != nil {
		log.Fatal(err)
	}

	return restaurantes

}
