import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private name: string;
  private symbol: string;
  private canPlay: Boolean = false;
  private score: Number = 0;

  constructor(name: string, symbol: string) {

    this.name = name;
    this.symbol = symbol;
  }

  public getName() {
    return this.name;
  }

  public setName(name: string) {
    this.name = name;
  }

  public getSymbol() {
    return this.symbol;
  }

  public setSymbol(symbol: string) {
    this.symbol = symbol;
  }

  public getScore() {
    return this.score;
  }

  public setScore(score: number) {
    this.score = score;
  }

  public getCanPlay() {
    return this.canPlay;
  }

  public switchCanPlay() {
    this.canPlay = !this.canPlay;
  }
}
