
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-remove-game',
  templateUrl: './remove-game.component.html',
  styleUrls: ['./remove-game.component.css']
})
export class RemoveGameComponent {
  @Input() gameName: string = '';

  removeGame() {
    console.log('Removing game:', this.gameName);
  }
}
