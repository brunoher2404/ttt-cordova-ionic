import { Injectable } from '@angular/core';
import { PlayerService } from './player.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public player1;
  public player2;

  constructor() {
    this.player1 = new PlayerService('player1', 'O');
    this.player2 = new PlayerService('player2', 'X');
    this.player1.switchCanPlay();
  }

  public switchPlayers() {
    this.player1.switchCanPlay();
    this.player2.switchCanPlay();
  }
}
