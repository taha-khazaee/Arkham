import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Actors } from './jokers';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
import { MessageService } from './message.service';
@Injectable({providedIn: 'root'})
export class JokerService {
  private actorsURL = 'api/Jokers';
  constructor(private http: HttpClient,private messageservice: MessageService) { }
  getActors(): Observable<Actors[]> {    
    return this.http.get<Actors[]>(this.actorsURL).pipe(
      tap(heroes => this.log('fetched heroes')),
      catchError(this.handleError('getActors', []))
    );;
  }
  getActorNo404<Data>(id: number): Observable<Actors> {
    const url = `${this.actorsURL}/?id=${id}`;
    return this.http.get<Actors[]>(url)
      .pipe(
        map(actors => Actors[0]), // returns a {0|1} element array
        tap(a => {
          const outcome = a ? `fetched` : `did not find`;
          this.log(`${outcome} actor id=${id}`);
        }),
        catchError(this.handleError<Actors>(`getActor id=${id}`))
      );
  }
  getTopActors(): Observable<Actors[]> {    
    let tops = [];
    let actors = this.getActors();
    tops.push(actors[1]);
    tops.push(actors[6]);
    return of(tops);
  }
  getActor(id: number): Observable<Actors> {
    const url = `${this.actorsURL}/${id}`;      
    return this.http.get<Actors>(url).pipe(
      tap(_ =>this.log(`fetched hero id=${id}`),
      catchError(this.handleError<Actors>(`getActor id=${id}`))
    )
  );  
  }
  updateActor (actor: Actors): Observable<any> {
    return this.http.put(this.actorsURL, actor, httpOptions).pipe(
      tap(_ => this.log(`updated actor id=${actor.id}`)),
      catchError(this.handleError<any>('updateActor'))
    );
  }
  searchActors(term: string): Observable<Actors[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Actors[]>(`${this.actorsURL}/?name=${term}`).pipe(
      tap(_ => this.log(`found actors matching "${term}"`)),
      catchError(this.handleError<Actors[]>('searchActors', []))
    );
  }
  addActor (actor: Actors): Observable<Actors> {
    return this.http.post<Actors>(this.actorsURL, actor, httpOptions).pipe(
      tap((actor: Actors) => this.log(`added actor w/ id=${actor.id}`)),
      catchError(this.handleError<Actors>('addActor'))
    );
  }
  deleteActor (actor: Actors | number): Observable<Actors> {
    const id = typeof actor === 'number' ? actor : actor.id;
    const url = `${this.actorsURL}/${id}`;
  
    return this.http.delete<Actors>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Actors>('deleteHero'))
    );
  }  
   private log(message: string) {
    this.messageservice.add(`JService: ${message}`);
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {         
      console.error(error);      
      this.log(`${operation} failed: ${error.message}`);         
      return of(result as T);
    };
  }
}
