import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-test',
  templateUrl: './case-test.page.html',
  styleUrls: ['./case-test.page.scss'],
})
export class CaseTestPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  completion = "0"

  p1 = "inline-block"
  p2 = "none"
  p3 = "none"
  p4 = "none"
  tr1 ="none" 
  tr2 ="none" 
  tr3 ="none"
  tr4 ="none" 
  tr5 ="none"  
  
  primeraYes(){
    this.p1= "none"
    this.p2 = "inline-block"
    this.completion = "0.25"
  }
  primeraNo(){
    this.p1 = "none"
    this.tr1 ="inline-block"
    this.completion ="1"
  }

  segundaYes(){
    this.p2= "none"
    this.tr2 = "inline-block"
    this.p3 = "inline-block"
    this.completion = "0.5"
  }
  segundaNo(){
    this.p2 = "none"
    this.tr1 ="inline-block"
    this.completion ="1"
  }

  terceraYes(){
    this.p3= "none"
    this.tr3= "inline-block"
    this.completion = "1"
  }
  terceraNo(){
    this.p3 = "none"
    this.p4 ="inline-block"
    this.completion =".75"
  }
  cuartaYes(){
    this.p4= "none"
    this.tr5= "inline-block"
    this.completion = "1"
  }
  cuartaNo(){
    this.p4 = "none"
    this.tr4 ="inline-block"
    this.completion ="1"
  }
  





}
