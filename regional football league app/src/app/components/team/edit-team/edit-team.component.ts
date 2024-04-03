import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team } from '../team.model';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {
  team: Team;
  teamName: string = '';

  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService
  ) { }

  ngOnInit(): void {
    this.getTeam();
  }

  getTeam(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.teamService.getTeam(id)
      .subscribe(team => {
        this.team = team;
        this.teamName = team.name;
      });
  }

  updateTeam(): void {
    this.team.name = this.teamName;
    this.teamService.updateTeam(this.team)
      .subscribe(() => console.log('Team updated successfully'));
  }
}
