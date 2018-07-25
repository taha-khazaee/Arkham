import { Component, OnInit } from '@angular/core';
import {Actors} from '../jokers';
import {JokerService} from '../joker.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  actors:Actors[]=[];
  constructor() { }

  ngOnInit() {
    // this.
  }

}
