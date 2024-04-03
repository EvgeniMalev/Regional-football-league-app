import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Player } from './player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private players: Player[] = [
    { id: 1, name: 'Ivanov', number: 8, goalsScored: 8 },
    { id: 2, name: 'Bodurkov', number: 2, goalsScored: 4 },
    { id: 3, name: 'Marinov', number: 12, goalsScored: 3 }
  ];

  constructor() { }

  getPlayers(): Observable<Player[]> {
    return of(this.players);
  }

  getPlayer(id: number): Observable<Player> {
    const player = this.players.find(p => p.id === id);
    return of(player);
  }

  addPlayer(player: Player): void {
    this.players.push(player);
  }

  updatePlayer(updatedPlayer: Player): void {
    const index = this.players.findIndex(p => p.id === updatedPlayer.id);
    if (index !== -1) {
      this.players[index] = updatedPlayer;
    }
  }

  removePlayer(id: number): void {
    this.players = this.players.filter(p => p.id !== id);
  }
}
