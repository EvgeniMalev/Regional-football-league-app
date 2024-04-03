import { Component, OnInit } from '@angular/core';
import { Team } from '../team.model';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  teams: Team[];

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.getTeams();
  }

  getTeams(): void {
    this.teamService.getTeams()
      .subscribe(teams => this.teams = teams);
  }

  removeTeam(id: number): void {
    this.teamService.removeTeam(id)
      .subscribe(() => {
        console.log('Team removed successfully');
        this.teams = this.teams.filter(team => team.id !== id);
      });
  }
}
