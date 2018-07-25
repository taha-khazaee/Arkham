import { Injectable } from '@angular/core';
import { JOKERS } from './Jokers-mock';
import { Actors } from './jokers';
@Injectable({
  providedIn: 'root'
})
export class JokerService {
  getActors(): Actors[] {
    return JOKERS;
  }
  constructor() { }
   
}
