import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Game } from '../interfaces/interfaces';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  getGames() {
    return this.http.get<Game[] >(`${ environment.url }/api/tbg`);
  }

  vote(gameId: string) {
    return this.http.post(`${ environment.url }/api/tbg/${ gameId }`, {})
      .pipe(
        catchError((error: any) => {
          return of(error.error);
        })
      );
  }
}
