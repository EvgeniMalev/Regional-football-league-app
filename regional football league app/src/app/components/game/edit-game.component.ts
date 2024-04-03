
import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css']
})
export class EditGameComponent {
  gameName: string = '';

  onSubmit() {
 
    console.log('Game Name:', this.gameName);
  }
}
