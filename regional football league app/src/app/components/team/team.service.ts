import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Team } from './team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private teams: Team[] = [
    { id: 1, name: 'Spartak' },
    { id: 2, name: 'Levski' },
    { id: 3, name: 'Lovico' }
  ];

  constructor() { }

  getTeams(): Observable<Team[]> {
    return of(this.teams);
  }

  getTeam(id: number): Observable<Team> {
    const team = this.teams.find(t => t.id === id);
    return of(team);
  }

  addTeam(team: Team): void {
    this.teams.push(team);
  }

  updateTeam(updatedTeam: Team): void {
    const index = this.teams.findIndex(t => t.id === updatedTeam.id);
    if (index !== -1) {
      this.teams[index] = updatedTeam;
    }
  }

  removeTeam(id: number): void {
    this.teams = this.teams.filter(t => t.id !== id);
  }
}
