import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  player: Player;

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.getPlayer();
  }

  getPlayer(): void {
    const playerId = 1; 
    this.playerService.getPlayer(playerId)
      .subscribe(player => this.player = player);
  }
}
