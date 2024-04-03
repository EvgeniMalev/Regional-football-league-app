
import { Component } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent {
  player: Player = {
    id: 0,
    Name: '',
    number: 0,
    goalsScored: 0
    
  };

  constructor(private playerService: PlayerService) {}

  onSubmit(): void {
    this.playerService.addPlayer(this.player).subscribe(/* response */);
  }
}
