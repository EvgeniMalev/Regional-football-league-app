
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Player } from '../player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  player: Player;
  playerName: string;
  playerNumber: number;
  playerGoalsScored: number;

  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPlayer();
  }

  getPlayer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.playerService.getPlayer(id)
      .subscribe(player => {
        this.player = player;
        this.playerName = player.name;
        this.playerNumber = player.number;
        this.playerGoalsScored = player.goalsScored;
      });
  }

  editPlayer(): void {
    this.player.name = this.playerName;
    this.player.number = this.playerNumber;
    this.player.goalsScored = this.playerGoalsScored;
    this.playerService.updatePlayer(this.player)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
