import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries-service.service';
import { Region } from '../../interfaces/country.interfaces';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.css']
})
export class SelectorPageComponent implements OnInit {

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


  ngOnInit(): void {
      this.onRegionChange()
  }

  get regions() : Region[]{
   return  this._countriesService.regions; 
  }

   onRegionChange() : void{// es conveniente que cuando se suscriba uno a esta clase de motodos, y se destruya el componente, debe destruirse tambien estas subscripciones de manwera manual
    this.myForm.get('region')!.valueChanges.subscribe(
region => region
  )
  }

}
