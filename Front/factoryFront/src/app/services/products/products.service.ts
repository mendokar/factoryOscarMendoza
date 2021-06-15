import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url_products = environment.url_service;
  constructor(private httpClient: HttpClient) {}

  public getAllProducts(body:any) {
    let headers = new HttpHeaders().set("Content-Type", 'application/json');
    return this.httpClient.post(
      this.url_products +
        "/consultarProducto",   body,     
      { headers: headers }
    );
  }
}
