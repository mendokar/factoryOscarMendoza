package models

import (
	"fmt"

	"github.com/zeshanwd/go-res-api/src/database"
)

type Clients struct {
	Cli_id    int    `json:"cli_id"`
	Cli_name  string `json:"cli_name"`
	Cli_phone int    `json:"cli_phone"`
}

func InsertClients(cli_name string, cli_phone int) (Clients, bool) {
	db := database.GetConnection()
	var cli_id int
	db.QueryRow("INSERT INTO clientes(cli_name,cli_phone) VALUES ($1,$2) RETURNING cli_id", cli_name, cli_phone).Scan(&cli_id)

	if cli_id == 0 {
		return Clients{}, false
	}
	return Clients{}, true
}

func GetClient(cli_id int) (Clients, bool) {
	fmt.Println("cli_id", cli_id)
	db := database.GetConnection()
	row := db.QueryRow("SELECT cli_name, cli_phone FROM clientes WHERE cli_id = $1", cli_id)

	var Cli_name string
	var Cli_phone int
	err := row.Scan(&Cli_name, &Cli_phone)
	if err != nil {
		return Clients{}, false
	}

	return Clients{cli_id, Cli_name, Cli_phone}, true

}
