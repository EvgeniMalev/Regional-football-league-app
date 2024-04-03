add-game.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent {
  gameName: string = '';

  onSubmit() {

    console.log('Game Name:', this.gameName);
  }
}
