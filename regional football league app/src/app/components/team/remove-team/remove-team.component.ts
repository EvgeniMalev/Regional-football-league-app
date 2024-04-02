import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-remove-team',
  templateUrl: './remove-team.component.html',
  styleUrls: ['./remove-team.component.css']
})
export class RemoveTeamComponent implements OnInit {
  teamId: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private teamService: TeamService
  ) {}

  ngOnInit() {
    this.teamId = this.route.snapshot.paramMap.get('id');
  }

  removeTeam() {
    this.teamService.removeTeam(this.teamId).then(() => {
      this.router.navigate(['/teams']);
    });
  }
}
