import { Component, OnInit } from '@angular/core';
import { Actors } from '../jokers';
import {JokerService} from '../joker.service';
@Component({
  selector: 'app-joker',
  templateUrl: './joker.component.html',
  styleUrls: ['./joker.component.scss']
})
export class JokerComponent implements OnInit {
  Actors:Actors[];
  selectedactor:Actors;
  constructor(private jokerService:JokerService) { }
  ngOnInit() {
    this.getActors();
  }
  onSelect(actor:Actors):void{
    this.selectedactor=actor;
  }
  getActors(): void {
    this.jokerService.getActors().subscribe(actors=> this.Actors=actors);
  }
}
