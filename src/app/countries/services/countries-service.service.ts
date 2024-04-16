import { Injectable } from '@angular/core';
import { Region, SmallCountry } from '../interfaces/country.interfaces';
import { Observable } from 'rxjs';
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

  // getCountriesByRegion(region : Region) : Observable<SmallCountry[]>{
  //     return []
  // }
}
