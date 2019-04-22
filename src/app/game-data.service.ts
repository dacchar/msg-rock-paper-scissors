import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameDataService {

    private gameResultData = new BehaviorSubject([]);

    currentGameResultData = this.gameResultData.asObservable();

  constructor() { }


  changeGameResultData(gameResultData: string[]) {
    this.gameResultData.next(gameResultData);
  }
}
