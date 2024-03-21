import { Injectable } from '@angular/core';
import { Regions } from '../interfaces/country.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private _regions : Regions[] = [Regions.Africa,Regions.Americas,Regions.Asia,Regions.Europa,Regions.Oceania];

  constructor(
    
  ) { }

  get regions() : Regions[] {
 return [...this._regions];// el spread convierte esto en un arreglo diferente al original para no alterarlo
  }
}
