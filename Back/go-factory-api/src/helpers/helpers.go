package helpers

import (
	"encoding/json"
	"net/http"

	"github.com/zeshanwd/go-res-api/src/models"
)

func DecodeBody(req *http.Request) (models.Clients, bool) {
	var client models.Clients
	err := json.NewDecoder(req.Body).Decode(&client)
	if err != nil {
		return models.Clients{}, false
	}

	return client, true
}

func DecodeBodyRestaurants(req *http.Request) (models.Restaurants, bool) {
	var restaurant models.Restaurants
	err := json.NewDecoder(req.Body).Decode(&restaurant)
	if err != nil {
		return models.Restaurants{}, false
	}

	return restaurant, true
}

func DecodeBodyProducts(req *http.Request) (models.Products, bool) {
	var product models.Products
	err := json.NewDecoder(req.Body).Decode(&product)
	if err != nil {
		return models.Products{}, false
	}

	return product, true
}
