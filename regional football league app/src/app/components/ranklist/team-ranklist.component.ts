import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-ranklist',
  templateUrl: './team-ranklist.component.html',
  styleUrls: ['./team-ranklist.component.css']
})
export class TeamRanklistComponent implements OnInit {
  teamRanklist: any[]; // Assuming each team has a 'name' and 'points' property

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.getTeamRanklist();
  }

  getTeamRanklist(): void {
    // Assuming you have a method in TeamService to get the team ranklist
    this.teamService.getTeamRanklist().subscribe(ranklist => {
      this.teamRanklist = ranklist;
    });
  }
}
