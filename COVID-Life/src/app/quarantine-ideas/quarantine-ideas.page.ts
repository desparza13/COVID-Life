import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quarantine-ideas',
  templateUrl: './quarantine-ideas.page.html',
  styleUrls: ['./quarantine-ideas.page.scss'],
})
export class QuarantineIdeasPage implements OnInit {

  public score=0;
  public items= [
    'Wake up 5min before your zoom class',
    'Wear comfy clothes',
    'Wear the same outfit 2 days in a row',
    'Spend more than 2 hours on TikTok',
    'Play AmongUs with your friends',
    'Wake up after noon just to eat',
    'Seen a Netflix series in a day',
    'Done a Zoom meeting with your friends',
    'Obsess yourself over a new fictional character/actor',
    'Bake something',
    'Forgot your mask',
    'Create new Spotify playlists',
    'Leave your microphone on while in class'
  ];

  constructor() { }

  ngOnInit() {
  }


}
