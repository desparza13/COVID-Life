import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ServCOVIDLifeService } from '../serv-covid-life.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  Summary = [];
  Countries = [];
  constructor(public service:ServCOVIDLifeService,
              public navCtrl:NavController) {

  }

  IonViewWillEnter(){
    
  }

  ngOnInit(){
    this.service.getSummary().subscribe(data => {
      this.Summary = data['Global'];
      console.log(data['Global']);
    });

      this.service.getCountries().subscribe(countryList => {
        this.Countries.push(countryList);
        console.log("Countries:", countryList);
      })
  }

  goToSelectCountries(){
    this.navCtrl.navigateForward('country-list');
  }

}
