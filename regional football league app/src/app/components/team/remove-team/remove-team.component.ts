import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from '../team.model';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-remove-team',
  templateUrl: './remove-team.component.html',
  styleUrls: ['./remove-team.component.css']
})
export class RemoveTeamComponent implements OnInit {
  team: Team;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private teamService: TeamService
  ) { }

  ngOnInit(): void {
    this.getTeam();
  }

  getTeam(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.teamService.getTeam(id)
      .subscribe(team => this.team = team);
  }

  removeTeam(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.teamService.removeTeam(id)
      .subscribe(() => {
        console.log('Team removed successfully');
        this.router.navigate(['/team-list']); // Navigate to team list after removal
      });
  }
}
