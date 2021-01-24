import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public NavCtrl: NavController) {}

  goToCaseTest(){
    this.NavCtrl.navigateForward('case-test')
  }

  household= "none"
  you="none"
  firstest="inline-block"

  displayYou(){
    this.you= "inline-block"
    this.firstest ="none"
  }
  displayHouse(){
    this.household ="inline-block"
    this.firstest = "none"
  }



}
