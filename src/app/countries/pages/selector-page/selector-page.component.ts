import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries-service.service';
import { Regions } from '../../interfaces/country.interfaces';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.css']
})
export class SelectorPageComponent {

  public myForm : FormGroup = this.fb.group(
    {
      region : ['',Validators.required],
      country : ['',Validators.required],
      borders : ['',Validators.required],

    })

  constructor(
private fb : FormBuilder,
private _countriesService : CountriesService
  ){}

  get regions() : Regions[]{
   return  this._countriesService.regions;
  }

}
