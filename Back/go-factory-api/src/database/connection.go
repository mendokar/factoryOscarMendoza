package database

import (
	"database/sql"
	"log"

	_ "github.com/lib/pq" // here
)

func GetConnection() *sql.DB {
	connStr := "postgres://postgres:qwerty@127.0.0.1:5432/factory_db?sslmode=disable"
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal(err)
	}
	return db
}
