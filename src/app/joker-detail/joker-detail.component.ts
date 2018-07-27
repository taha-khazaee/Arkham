import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { JokerService } from '../joker.service'
import { Actors } from '../jokers';
@Component({
  selector: 'app-joker-detail',
  templateUrl: './joker-detail.component.html',
  styleUrls: ['./joker-detail.component.scss']
})
export class JokerDetailComponent implements OnInit {
  @Input() actor: Actors;

  constructor(
    private route: ActivatedRoute,
    private jokerService: JokerService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getActor();
  }
  getActor(): void {
    const id = + this.route.snapshot.paramMap.get('id');
    this.jokerService.getActor(id).subscribe(actor => this.actor = actor);
  }
  goBack():void{
    this.location.back();
  }
  save(): void {
    this.jokerService.updateActor(this.actor)
      .subscribe(() => this.goBack());
  }

}
