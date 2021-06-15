package models

import (
	"fmt"

	"github.com/zeshanwd/go-res-api/src/database"
)

type Pedidos struct {
	Ped_id       int    `json:"ped_id"`
	Ped_name     string `json:"ped_name"`
	Ped_category string `json:"ped_category"`
}

func InsertPedidos(ped_name string, ped_category string) (Pedidos, bool) {
	db := database.GetConnection()
	var ped_id int
	db.QueryRow("INSERT INTO pedidos(ped_name,ped_category) VALUES ($1,$2) RETURNING cli_id", ped_name, ped_category).Scan(&ped_id)

	if ped_id == 0 {
		return Pedidos{}, false
	}
	return Pedidos{}, true
}

func GetPedido(ped_id int) (Pedidos, bool) {
	fmt.Println("cli_id", ped_id)
	db := database.GetConnection()
	row := db.QueryRow("SELECT ped_name, ped_category FROM pedidos WHERE ped_id = $1", ped_id)

	var Ped_name string
	var Ped_category string
	err := row.Scan(&Ped_name, &Ped_category)
	if err != nil {
		return Pedidos{}, false
	}

	return Pedidos{ped_id, Ped_name, Ped_category}, true

}
