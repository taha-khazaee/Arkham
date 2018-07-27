import { Component, OnInit } from '@angular/core';
 
import { Observable, Subject } from 'rxjs';
 
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';
 import {Actors} from '../jokers';
 import {JokerService} from '../joker.service';

@Component({
  selector: 'app-joker-search',
  templateUrl: './joker-search.component.html',
  styleUrls: ['./joker-search.component.scss']
})
export class JokerSearchComponent implements OnInit {
  actors$: Observable<Actors[]>;
  private searchTerms = new Subject<string>();
  constructor(private jokerService:JokerService) { }
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.actors$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
 
      // ignore new term if same as previous term
      distinctUntilChanged(),
 
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.jokerService.searchActors(term)),
    );
  }

}
