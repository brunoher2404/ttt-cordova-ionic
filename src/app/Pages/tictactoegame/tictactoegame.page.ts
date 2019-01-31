import { Component, OnInit } from '@angular/core';
import { GameService } from '../../providers/game.service';
import { CameraService } from '../../camera.service';

@Component({
  selector: 'app-tictactoegame',
  templateUrl: './tictactoegame.page.html',
  styleUrls: ['./tictactoegame.page.scss'],
})
export class TictactoegamePage implements OnInit {

  private rows: Array<Object>;

  constructor(private game: GameService, private camera: CameraService) {
  }

  private drawGrid: (wrapper: number, lineLength: number) => Array<Object> =
  function(wrapper, lineLength) {
    const grid = [];
    let class_ = '',
        row    = [];

    for (let i = 1; i <= wrapper; i++) {
      row = [];

      for (let j = 1; j <= lineLength; j++) {
        class_ = 'case';

        if (j < lineLength) {
          class_ += ' border-right';
        }

        if (i < wrapper) {
          class_ += ' border-bottom';
        }

        row.push({
          pawn: null,
          class: class_
        });
      }

      grid.push(row);
    }

    return grid;
  };

  takePicture() {
    alert('ok');
    alert(this.camera);
    this.camera.takePicture();
  }

  clickHandler(e) {
      const symbol = this.game.player1.getCanPlay() ? this.game.player1.getSymbol() : this.game.player2.getSymbol();

      if (e.target.innerHTML === '') {
        e.target.innerHTML = symbol;
        this.game.switchPlayers();
      }
  }

  ngOnInit() {
    this.rows = this.drawGrid(3, 3);
  }

}
