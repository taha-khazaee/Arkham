import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Actors } from './jokers';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const JOKERS: Actors[] = [
      { id: 1, name: 'Cesar Romero' },
      { id: 2, name: 'Jack Nicholson' },
      { id: 3, name: 'Mark Hamill' },
      { id: 4, name: 'Kevin Michael' },
      { id: 5, name: 'Jeff Bennett' },
      { id: 6, name: 'Veteran voice' },
      { id: 7, name: 'Heath Ledger' },
      { id: 8, name: 'John DiMaggio' },
      { id: 9, name: 'Brent Spiner' },
      { id: 10, name: 'Michael Emerson' },
      { id: 11, name: 'Troy Baker' },
      { id: 12, name: 'Jared Leto' },  
    ];
    return {JOKERS};  
  }  
}
