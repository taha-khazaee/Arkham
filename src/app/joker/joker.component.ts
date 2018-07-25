import { Component, OnInit } from '@angular/core';
import { Actors } from '../jokers';
import { JOKERS } from '../Jokers-mock';
import {JokerService} from '../joker.service';
@Component({
  selector: 'app-joker',
  templateUrl: './joker.component.html',
  styleUrls: ['./joker.component.scss']
})
export class JokerComponent implements OnInit {
  Actors = JOKERS;
  selectedactor:Actors;
  onSelect(actor:Actors):void{
    this.selectedactor=actor;
  }
  getActors(): void {
    this.Actors=this.jokerService.getActors();
  }
  constructor(private jokerService:JokerService) { }

  ngOnInit() {
    this.getActors();
  }

}
