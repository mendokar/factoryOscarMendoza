package api

import (
	"encoding/json"
	"net/http"

	"github.com/zeshanwd/go-res-api/src/helpers"
	"github.com/zeshanwd/go-res-api/src/models"
)

type Data struct {
	Success bool             `json: "success"`
	Data    []models.Clients `json: "data"`
	Errors  []string         `json:errors`
}

func CrearCliente(w http.ResponseWriter, req *http.Request) {
	bodyClient, success := helpers.DecodeBody(req)
	if success != true {
		http.Error(w, "no decode body", http.StatusBadRequest)
		return
	}

	var data Data = Data{Errors: make([]string, 0)}

	client, success := models.InsertClients(bodyClient.Cli_name, bodyClient.Cli_phone)
	if success != true {
		data.Errors = append(data.Errors, "could not create client")
	}

	data.Success = success
	data.Data = append(data.Data, client)

	json, _ := json.Marshal(data)

	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.WriteHeader(http.StatusOK)
	w.Write(json)
	return
}

func ConsultarCliente(w http.ResponseWriter, req *http.Request) {
	bodyClient, success := helpers.DecodeBody(req)
	if success != true {
		http.Error(w, "no decode body", http.StatusBadRequest)
		return
	}

	var data Data = Data{Errors: make([]string, 0)}

	client, success := models.GetClient(bodyClient.Cli_id)
	if success != true {
		data.Errors = append(data.Errors, "could not get client")
	}

	data.Success = success
	data.Data = append(data.Data, client)

	json, _ := json.Marshal(data)

	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.WriteHeader(http.StatusOK)
	w.Write(json)
	return
}
