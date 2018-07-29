import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Actors } from './jokers';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
import { MessageService } from './message.service';
import { query } from '../../node_modules/@angular/core/src/render3/query';
@Injectable({ providedIn: 'root' })
export class JokerService {
  private actorsURL = 'api/JOKERS';
  constructor(private http: HttpClient, private messageservice: MessageService) { }
  getActors(): Observable<Actors[]> {
    return this.http.get<Actors[]>(this.actorsURL).pipe(
      tap(actors => this.log('All actors Fetched')),
      catchError(this.handleError('getActors', []))
    );;
  }
  getActorNo404<Data>(id: number): Observable<Actors> {
    const url = `${this.actorsURL}/?id=${id}`;
    return this.http.get<Actors[]>(url)
      .pipe(
        map(actors => Actors[0]), // returns a {0|1} element array
        tap(a => {
          const outcome = a ? `Fetched` : `did not find`;
          this.log(`${outcome} actor id=${id}`);
        }),
        catchError(this.handleError<Actors>(`getActor id=${id}`))
      );
  }
  getTopActors(): Observable<Actors[]> {        
    let tops = this.getActors();
    return tops;    
  }
  getActor(id: number): Observable<Actors> {
    const url = `${this.actorsURL}/${id}`;
    return this.http.get<Actors>(url).pipe(
      tap(_ => this.log(`Fatched actor id=${id}`),
        catchError(this.handleError<Actors>(`getActor id=${id}`))
      )
    );
  }
  updateActor(actor: Actors): Observable<any> {
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
  addActor(actor: Actors): Observable<Actors> {
    return this.http.post<Actors>(this.actorsURL, actor, httpOptions).pipe(
      tap((actor: Actors) => this.log(`added actor id=${actor.id}`)),
      catchError(this.handleError<Actors>('addActor'))
    );
  }
  deleteActor(actor: Actors | number): Observable<Actors> {
    const id = typeof actor === 'number' ? actor : actor.id;
    const url = `${this.actorsURL}/${id}`;

    return this.http.delete<Actors>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted actor id=${id}`)),
      catchError(this.handleError<Actors>('deleteActor'))
    );
  }
  private log(message: string) {
    this.messageservice.add(`JService: ${message}`);
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
