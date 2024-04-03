import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from './player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private apiUrl = 'api/players'; 

  constructor(private http: HttpClient) {}

 
  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.apiUrl);
  }

  getPlayerById(id: number): Observable<Player> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Player>(url);
  }

  addPlayer(player: Player): Observable<Player> {
    return this.http.post<Player>(this.apiUrl, player);
  }

  updatePlayer(player: Player): Observable<Player> {
    const url = `${this.apiUrl}/${player.id}`;
    return this.http.put<Player>(url, player);
  }

  deletePlayer(id: number): Observable<Player> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Player>(url);
  }
}
