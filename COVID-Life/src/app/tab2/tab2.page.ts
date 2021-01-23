import { Component } from '@angular/core';
import { ServCOVIDLifeService } from '../serv-covid-life.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  Summary = [];
  NewConfirmed: any;
  constructor(public service:ServCOVIDLifeService) {

  }
  
  IonViewWillEnter(){
    
  }

  ngOnInit(){
    this.service.getSummary().subscribe(data => {
      this.Summary=data['Global'];
      console.log(data['Global']);
    });
  }

}
