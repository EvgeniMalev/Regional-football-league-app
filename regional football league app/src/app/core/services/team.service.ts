import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from '../models/team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private apiUrl = 'https://bfs-vt.com/pyrvenstva/oblastna-futbolna-grupa-ug'; 

  constructor(private http: HttpClient) {}

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.apiUrl);
  }

  getTeam(id: number): Observable<Team> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Team>(url);
  }

  addTeam(team: Team): Observable<Team> {
    return this.http.post<Team>(this.apiUrl, team);
  }

  updateTeam(team: Team): Observable<Team> {
    const url = `${this.apiUrl}/${team.id}`;
    return this.http.put<Team>(url, team);
  }

  deleteTeam(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
