import { Injectable } from '@angular/core';
import { Country, Region, SmallCountry } from '../interfaces/country.interfaces';
import { Observable, map, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private baseUrl = 'https://restcountries.com/v3.1'
  private _regions : Region[] = [Region.Africa,Region.Americas,Region.Asia,Region.Europa,Region.Oceania];

  constructor(
    private http : HttpClient
  ) { }

  get regions() : Region[] {
 return [...this._regions];// el spread convierte esto en un arreglo diferente al original para no alterarlo
  }

  getCountriesByRegion(region : Region) : Observable<SmallCountry[]>{// aqui solo estamos definiendo el observable
    if(!region) return of([]) // el of convierte el arreglo en un observable
    // el if para retornar un arreglo vacio y no hacer la peticion
    const baseUrl = `${this.baseUrl}/region/${region}?/fields=cca3,name,borders`
      return this.http.get<Country[]>(baseUrl)//   
      .pipe(
        map(countries => countries.map( country => (// con e map arreglo se crea el nuevo objeto
          {
            name : country.name.common,
            cca3 : country.cca3,
            borders : country.borders ?? [] // covalencia nulla, si es null, regresa un arreglo

          })
        ) )// toma la respuesta, y regresa otra cosa 
        // tap(  response => console.log(response))// se usa para hacer efectos secundarios

      )
    }
}
