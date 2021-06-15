package api

import (
	"encoding/json"
	"net/http"

	"github.com/zeshanwd/go-res-api/src/helpers"
	"github.com/zeshanwd/go-res-api/src/models"
)

type DataP struct {
	Success bool              `json: "success"`
	Data    []models.Products `json: "data"`
	Errors  []string          `json:errors`
}

func ConsultarProducto(w http.ResponseWriter, req *http.Request) {
	bodyProduct, success := helpers.DecodeBodyProducts(req)
	if success != true {
		http.Error(w, "no decode body", http.StatusBadRequest)
		return
	}

	var rest []models.Products = models.GetProducts(bodyProduct.Prod_category)
	var data = DataP{true, rest, make([]string, 0)}
	json, _ := json.Marshal(data)

	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.WriteHeader(http.StatusOK)
	w.Write(json)
}
