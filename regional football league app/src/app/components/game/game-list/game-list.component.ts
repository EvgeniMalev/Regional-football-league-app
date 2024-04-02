
import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../game.model';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  games: Game[];

  constructor(private gameService: GameService) {}

  ngOnInit() {
    
    this.gameService.getGames().subscribe(games => {
      this.games = games;
    });
  }
}
