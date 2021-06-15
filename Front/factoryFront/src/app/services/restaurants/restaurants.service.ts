import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  private url_restaurants = environment.url_service;
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
   * getAllRestaurants
   */
  public getAllRestaurants() {
    let headers = new HttpHeaders().set("Content-Type", 'application/json');
    return this.httpClient.get(
      this.url_restaurants +
        "/consultarRestaurantes",        
      { headers: headers }
    );
  }
}
