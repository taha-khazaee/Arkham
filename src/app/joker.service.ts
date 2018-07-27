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
    this.messageSerivice.add('JService : All Actors Fetched');
    return of (JOKERS);
  }     
  getTopActors():Observable<Actors[]>{
    this.messageSerivice.add('JService : Top Actors Fetched');
    let tops =[];
    tops.push(JOKERS[1]);
    tops.push(JOKERS[6]);    
    return of (tops);
  }
  getActor(id:number):Observable<Actors>{
    this.messageSerivice.add('JService : One Actor Fetched');
    console.log(id);
    return of (JOKERS.find(hero=>hero.id===id));

  }
}
