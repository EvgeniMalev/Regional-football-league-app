
import { Component } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent {
  playerName: string;
  playerNumber: number;
  playerGoalsScored: number;

  constructor(private playerService: PlayerService) {}

  addPlayer(): void {
    const newPlayer: Player = {
      name: this.playerName,
      number: this.playerNumber,
      goalsScored: this.playerGoalsScored
    };
    this.playerService.addPlayer(newPlayer);
  }
}
