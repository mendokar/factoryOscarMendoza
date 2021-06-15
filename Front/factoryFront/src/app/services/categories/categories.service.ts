import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private url_categories = environment.url_service;
  constructor(private httpClient: HttpClient) {}

  /*public registerAgglomerations(body) {
    let headers = new HttpHeaders().set("Content-Type", this.Content_Type);
    return this.httpClient.post(
      this.url_agglomerations + "/registerAgglomerations",
      body,
      {
        headers: headers,
      }
    );
  }*/

  /**
   * consultarCategorias
   */
  public consultarCategorias() {
    let headers = new HttpHeaders().set("Content-Type", 'application/json');
    return this.httpClient.get(
      this.url_categories +
        "/consultarCategorias",        
      { headers: headers }
    );
  }
}
