import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ServCOVIDLifeService } from '../serv-covid-life.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.page.html',
  styleUrls: ['./country-list.page.scss'],
})
export class CountryListPage implements OnInit {
  countries = [];
  finalCountries = []
  constructor(public navCtrl:NavController, 
              public service:ServCOVIDLifeService) {

  }

  ngOnInit() {
    this.service.getCountries().subscribe(data => {
      this.countries.push(data['Countries'])
      console.log(this.countries[0]);
      this.finalCountries = this.countries[0];
      stringify(this.finalCountries);
    })
  }

  goToStatisticsPage(){
    this.navCtrl.navigateForward('tabs/tab2');
  }
}
