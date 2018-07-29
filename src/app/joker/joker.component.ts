import { Component, OnInit } from '@angular/core';
import { Actors } from '../jokers';
import { JokerService } from '../joker.service';
@Component({
  selector: 'app-joker',
  templateUrl: './joker.component.html',
  styleUrls: ['./joker.component.scss']
})
export class JokerComponent implements OnInit {
  Actors: Actors[];
  selectedactor: Actors;
  constructor(private jokerService: JokerService) { }
  ngOnInit() {
    this.getActors();
  }
  onSelect(actor: Actors): void {
    this.selectedactor = actor;
  }
  getActors(): void {
    this.jokerService.getActors().subscribe(actors => this.Actors = actors);
  }
  add(name: string): void {
    name = name.trim();    
    if (!name) { return; }
    this.jokerService.addActor({ name } as Actors)
      .subscribe(actor => {
        this.Actors.push(actor);
      });
  }
  delete(actor: Actors): void {    
    this.Actors = this.Actors.filter(a => a !== actor);
    this.jokerService.deleteActor(actor).subscribe();
  }
}
