import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from '../team.service';
import { Team } from '../team.model';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {
  editedTeam: Team = { id: '', name: '' };

  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService
  ) {}

  ngOnInit() {
    const teamId = this.route.snapshot.paramMap.get('id');
    this.loadTeamDetails(teamId);
  }

  loadTeamDetails(teamId: string) {
    this.teamService.getTeamById(teamId).subscribe(team => {
      this.editedTeam = team;
    });
  }

  editTeam() {
    this.teamService.updateTeam(this.editedTeam);
  }
}
