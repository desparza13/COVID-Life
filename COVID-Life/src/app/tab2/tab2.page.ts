import { Component, NgModuleFactoryLoader } from '@angular/core';
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
  random: any;
  randomCountry: any;
  constructor(public service:ServCOVIDLifeService,
              public navCtrl:NavController) {

  }

  IonViewWillEnter(){
    this.random = Math.floor(Math.random() * (150));
  }

  ngOnInit(){
    this.service.getSummary().subscribe(data => {
      this.Summary = data['Global'];
      console.log(data['Global']);
    });

      this.service.getCountries().subscribe(countryList => {
        this.Countries = (countryList['Countries']);
      });
  }

  getRandomCountry(){
    this.random = Math.floor(Math.random() * (150));
    console.log(this.Countries);
    this.randomCountry = this.Countries[this.random];
    console.log(this.randomCountry);
  }

  goToSelectCountries(){
    this.navCtrl.navigateForward('country-list');
  }

}
