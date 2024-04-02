import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private apiUrl = 'http://example.com/api/games'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.apiUrl);
  }

  getGame(id: number): Observable<Game> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Game>(url);
  }

  addGame(game: Game): Observable<Game> {
    return this.http.post<Game>(this.apiUrl, game);
  }

  updateGame(game: Game): Observable<Game> {
    const url = `${this.apiUrl}/${game.id}`;
    return this.http.put<Game>(url, game);
  }

  deleteGame(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
