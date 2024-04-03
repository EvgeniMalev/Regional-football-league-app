import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private router: Router) {}

  addGame() {
    this.router.navigate(['/dashboard/add-game']);
  }

  addTeams() {
    this.router.navigate(['/dashboard/add-teams']);
  }

  showScoreDetails() {
    this.router.navigate(['/dashboard/score-details']);
  }

  showRanklists() {
    this.router.navigate(['/dashboard/ranklist']);
  }
}
