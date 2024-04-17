import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries-service.service';
import { Region, SmallCountry } from '../../interfaces/country.interfaces';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.css']
})
export class SelectorPageComponent implements OnInit {


  countriesByRegion : SmallCountry[] = [];
  public myForm : FormGroup = this.fb.group(
    {
      region : ['',Validators.required],
      country : ['',Validators.required],
      borders : ['',Validators.required],

    })

  constructor(
private fb : FormBuilder,
private countriesService : CountriesService
  ){}


  ngOnInit(): void {
      this.onRegionChange()
  }

  get regions() : Region[]{
   return  this.countriesService.regions; 
  }

  onRegionChange(): void {// es conveniente que cuando se suscriba uno a esta clase de motodos, y se destruya el componente, debe destruirse tambien estas subscripciones de manwera manual
    this.myForm.get('region')!.valueChanges
      .pipe(
        switchMap(
          region => this.countriesService.getCountriesByRegion(region)
        ) // recibe el valor de un observable,para suscribirse a otro observable
      )
      .subscribe(
        countries => this.countriesByRegion = countries
      )
  }

}
