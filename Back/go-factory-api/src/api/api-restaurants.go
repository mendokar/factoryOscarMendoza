package api

import (
	"encoding/json"
	"net/http"

	"github.com/zeshanwd/go-res-api/src/models"
)

type DataR struct {
	Success bool                 `json: "success"`
	Data    []models.Restaurants `json: "data"`
	Errors  []string             `json:errors`
}

func ConsultarRestaurantes(w http.ResponseWriter, req *http.Request) {

	var rest []models.Restaurants = models.GetRestaurants()

	var data = DataR{true, rest, make([]string, 0)}
	json, _ := json.Marshal(data)

	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.WriteHeader(http.StatusOK)
	w.Write(json)
}
