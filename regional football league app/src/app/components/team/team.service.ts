import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Team } from './team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private teams: Team[] = [
    { id: 1, name: 'Spartak Polski Senovets' },
    { id: 2, name: 'Levski Strazhitsa' },
    { id: 3, name: 'Lovico' }
    { id: 4, name: 'Botev B Ch' },
    { id: 5, name: 'Yantra Pt' },
    { id: 6, name: 'CSKA Vishovgrad' }
    { id: 7, name: 'Rakovski Emen' },
    { id: 8, name: 'Buditel Byala reka' },
    { id: 9, name: 'Starotel Oresh' }
    { id: 10, name: 'Voevodov Dragizhevo' }
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
