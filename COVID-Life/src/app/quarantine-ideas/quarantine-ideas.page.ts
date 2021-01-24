import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quarantine-ideas',
  templateUrl: './quarantine-ideas.page.html',
  styleUrls: ['./quarantine-ideas.page.scss'],
})
export class QuarantineIdeasPage implements OnInit {
  item: any;
  public i= 0;
  buttons = "inline-block"
  public  checked : boolean = true;
  public score=0;
  public items2= [
    {val:'Wake up 5min before your zoom class', gif:"https://media.giphy.com/media/gkQQqnFR1hhhuYPQHh/giphy.gif"},
    {val:'Wear comfy clothes', gif:"https://media.giphy.com/media/xUOrw4vslaW2a8SaZ2/giphy.gif"},
    {val:'Wear the same outfit 2 days in a row', gif:"https://media.giphy.com/media/26gs9kSN6d5PxSsQU/giphy.gif"},
    {val:'Spend more than 2 hours on TikTok', gif:"https://media.giphy.com/media/jS2pgTIhhTuAqneaF0/giphy.gif"},
    {val:'Play AmongUs with your friends', gif:"https://media.giphy.com/media/S7nF0HAVEBxUu76pxR/giphy.gif"},
    {val:'Wake up after noon just to eat', gif:"https://media.giphy.com/media/35I4CNQmUNACsuQPy2/giphy.gif"},
    {val:'Seen a Netflix series in a day', gif:"https://media.giphy.com/media/l0MYsFDv1EzJzgvYI/giphy.gif"},
    {val:'Done a Zoom meeting with your friends', gif:"https://media.giphy.com/media/iG43l9vpu2mZhEsTjt/giphy.gif"},
    {val:'Obsess yourself over a new fictional character/actor', gif:"https://media.giphy.com/media/26BRv0ThflsHCqDrG/giphy.gif"},
    {val:'Bake something', gif:"https://media.giphy.com/media/271TlKdqZyZQCrbvIL/giphy.gif"},
    {val:'Forgot your mask', gif:"https://media.giphy.com/media/Jlp5hQrbXsluyUbhr4/giphy.gif"},
    {val:'Create new Spotify playlists', gif:"https://media.giphy.com/media/l4FGB9Cs55wbvM75u/giphy.gif"},
    {val:'Leave your microphone on while in class', gif:"https://media.giphy.com/media/LU0EPR6tWaNREI35hU/giphy.gif"},
    {val: "Congrats you scored: "+this.score+"/13", gif:"https://media.giphy.com/media/jsUFlgw1L8107yiErE/giphy.gif"}
  ];
 
  constructor() { }

  ngOnInit(){

  }

  addOne()
  {
    this.score++;
  }
  Yes()
  {
    this.score++;
    this.i++;
    this.items2[13].val="Congrats you scored: "+this.score+"/13";
    if (this.i == 13){
      this.buttons ="none";
      this.items2[13].val="Congrats you scored: "+this.score+"/13";
    }

  }
  No()
  {
    this.i++;
    this.items2[13].val="Congrats you scored: "+this.score+"/13";
    if (this.i == 13){
      this.buttons ="none";
      this.items2[13].val="Congrats you scored: "+this.score+"/13";
    }
  }


}
