import { Component } from '@angular/core';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent {
  teamName: string = '';

  constructor(private teamService: TeamService) {}

  addTeam() {
   
    this.teamService.addTeam({ name: this.teamName });
  }
}
