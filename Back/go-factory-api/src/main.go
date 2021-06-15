package main

import (
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/zeshanwd/go-res-api/src/api"
)

func main() {
	fmt.Print("Hola")
	//db := database.GetConnection()
	var port string = "8080"
	router := mux.NewRouter()
	apiRouter := router.PathPrefix(("/api/")).Subrouter()
	apiRouter.HandleFunc("/registrarCliente", api.CrearCliente).Methods("POST")
	apiRouter.HandleFunc("/consultarCliente", api.ConsultarCliente).Methods("POST")
	/* CONSULTAS RESTAURANTES */
	apiRouter.HandleFunc("/consultarRestaurantes", api.ConsultarRestaurantes).Methods("GET")
	/* CONSULTAS RESTAURANTES */
	apiRouter.HandleFunc("/consultarCategorias", api.ConsultarCategorias).Methods("GET")
	/* CONSULTAS RESTAURANTES */
	apiRouter.HandleFunc("/consultarProducto", api.ConsultarProducto).Methods("POST")

	fmt.Printf("Api running at port %s", port)
	http.ListenAndServe(":"+port, router)
}
