import { Component } from '@angular/core';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent {
  teamName: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private teamService: TeamService) {}

  addTeam() {
    if (!this.teamName.trim()) {
      this.errorMessage = 'Please enter a team name.';
      return;
    }

    this.teamService.addTeam({ name: this.teamName }).subscribe(
      () => {
        this.successMessage = 'Team added successfully.';
        this.resetForm();
      },
      (error) => {
        this.errorMessage = 'Failed to add team. Please try again later.';
        console.error('Failed to add team:', error);
      }
    );
  }

  resetForm() {
    this.teamName = '';
    this.errorMessage = '';
    this.successMessage = '';
  }
}
