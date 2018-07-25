import { Component, OnInit, Input } from '@angular/core';
import { Actors } from '../jokers';
@Component({
  selector: 'app-joker-detail',
  templateUrl: './joker-detail.component.html',
  styleUrls: ['./joker-detail.component.scss']
})
export class JokerDetailComponent implements OnInit {
  @Input() actor: Actors;
  constructor() { }

  ngOnInit() {
  }

}
