import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Player } from '../player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-remove-player',
  templateUrl: './remove-player.component.html',
  styleUrls: ['./remove-player.component.css']
})
export class RemovePlayerComponent implements OnInit {
  player: Player;

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
      .subscribe(player => this.player = player);
  }

  removePlayer(): void {
    this.playerService.removePlayer(this.player.id)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
