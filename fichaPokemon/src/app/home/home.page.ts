import { Component } from '@angular/core';
import { SlidePokemon } from '../slide-pokemon';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Pokemons } from '../pokemons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [ApiService]
})
export class HomePage {
  //Init obj
  pokemons: Pokemons;
  array_pokemons: Array<Pokemons>;
  public slider: SlidePokemon;

  constructor(public apiservice: ApiService) {
    console.log("contructor point");
    //Make object Pokemon.
    this.pokemons = new Pokemons();
    //Call service and request management
    this.gestionarRespuesta();
  }

  //Slider pokemons
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  gestionarRespuesta() {
    let credencial_json = window.localStorage.getItem('key');
    let pokemon: Pokemons = JSON.parse(credencial_json);
    this.apiservice.getPokemons().subscribe(
      respuestaOK => {
        console.log("request ok");
        let mensaje_http: HttpResponse<Array<Pokemons>> = respuestaOK as HttpResponse<Array<Pokemons>>;
        this.array_pokemons = mensaje_http.body;
        this.array_pokemons.map(pokemons => {
          console.log(pokemons.name + " " + pokemons.profile);
        });

      }
      ,
      respuestaKO => {
        console.error("No found, KO");
      }
    );

  }

}
