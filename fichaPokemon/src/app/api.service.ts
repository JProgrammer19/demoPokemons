import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})



export class ApiService {
  //comm servidor
  private static readonly SERVICE_GET_POKEMONS: string = 'http://127.0.0.1:8000/api/pokemons';
  constructor(private httpclient: HttpClient) {

  }
  //Method pokemons list
  getPokemons(): Observable<Object> {
    console.log("service here");
    let observable: Observable<Object>;
    observable = this.httpclient.get(ApiService.SERVICE_GET_POKEMONS, { observe: "response" });
    return observable;
  }
}
