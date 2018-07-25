import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Actors } from './jokers';
import { JOKERS } from './Jokers-mock';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class JokerService {
  constructor(private messageSerivice:MessageService) { }
  getActors(): Observable<Actors[]> {
    this.messageSerivice.add('JokerService : fetched actors');
    return of (JOKERS);
  }     
}
