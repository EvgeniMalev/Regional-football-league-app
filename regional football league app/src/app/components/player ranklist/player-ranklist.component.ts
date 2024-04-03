import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-ranklist',
  templateUrl: './player-ranklist.component.html',
  styleUrls: ['./player-ranklist.component.css']
})
export class PlayerRanklistComponent implements OnInit {
  playerRanklist: any[]; 

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.getPlayerRanklist();
  }

  getPlayerRanklist(): void {
    
    this.playerService.getPlayerRanklist().subscribe(ranklist => {
      this.playerRanklist = ranklist;
    });
  }
}
