package api

import (
	"encoding/json"
	"net/http"

	"github.com/zeshanwd/go-res-api/src/models"
)

type DataC struct {
	Success bool                `json: "success"`
	Data    []models.Categories `json: "data"`
	Errors  []string            `json:errors`
}

func ConsultarCategorias(w http.ResponseWriter, req *http.Request) {

	var categories []models.Categories = models.GetCategories()

	var data = DataC{true, categories, make([]string, 0)}
	json, _ := json.Marshal(data)

	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.WriteHeader(http.StatusOK)
	w.Write(json)
}
