import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ServCOVIDLifeService {

  constructor( private http:HttpClient, 
               private storage: Storage) {

   }

   getSummary(){
     return this.http.get('https://api.covid19api.com/summary');
   }

   getCountries(){
     return this.http.get('https://api.covid19api.com/summary');
   }
}
