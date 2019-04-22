import { Injectable } from '@angular/core';
import { AiService } from './ai.service';
import { GameDataService } from './game-data.service';
import { UsernameDataService } from './username-data.service';
import {  Observable, of  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultCalcService {

    results: string[] = [];

    userBits: string[] = [];

    aiBits: string[] = [];

    winner: string;

    user: string;


  constructor(private aiService: AiService, private gameDataService: GameDataService, private usernameDataService: UsernameDataService) { }

  getResults(): Observable<string[]> {
      return of(this.results);
  }

  calculateWinner() {

    let userPoints = 0;
    let aiPoints = 0;

    this.usernameDataService.currentusernameData.subscribe(username => this.user = username);

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.results.length; i++) {
      if (this.results[i] === 'WIN') {
        userPoints++;
      }
      if (this.results[i] === 'LOSE') {
        aiPoints++;
      }
    }

    if (userPoints > aiPoints) {
        this.winner = this.user + ' wins!';
    }

    if (userPoints < aiPoints) {
        this.winner = 'AI wins!';
    }

    if (userPoints === aiPoints) {
        this.winner = 'Draw!';
    }



  }

  calculateResults() {
      this.aiService.getAiBits().subscribe(cur => this.aiBits = cur);
      this.gameDataService.currentGameResultData.subscribe(cur => this.userBits = cur);

      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.userBits.length; i++) {
         if (this.userBits[i] === this.aiBits[i]) {
             this.results[i] = 'DRAW';
        } else {
        if ( this.userBits[i] === 'Rock' && this.aiBits[i] === 'Scissors' || this.userBits[i] === 'Paper' && this.aiBits[i] === 'Rock'
         || this.userBits[i] === 'Scissors' && this.aiBits[i] === 'Paper' ) {
         this.results[i] = 'WIN';
        } else {
             this.results[i] = 'LOSE';
        }
    }
      }
   }

   clearResults() {
        this.results = [];
   }
}
