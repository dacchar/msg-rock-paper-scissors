import { Component, OnInit } from '@angular/core';
import { GameDataService } from '../game-data.service';
import { AiService } from '../ai.service';
import { ResultCalcService } from '../result-calc.service';


@Component({
  selector: 'app-game-result',
  templateUrl: './game-result.component.html',
  styleUrls: ['./game-result.component.css']
})
export class GameResultComponent implements OnInit {

    res: string[] = [];

    aiBits: string[] = [];

    gameResults: string[] = [];

    winner: string;

    headElements = ['Your bits', 'AIs bits', 'result'];


  constructor(private gameData: GameDataService, private aiService: AiService, private resultCalcService: ResultCalcService) { }

  ngOnInit() {
      this.gameData.currentGameResultData.subscribe(message => this.res = message);
      this.aiService.getAiBits().subscribe(bits => this.aiBits = bits);
      this.resultCalcService.getResults().subscribe(results => this.gameResults = results);
      this.resultCalcService.calculateWinner();
      this.winner = this.resultCalcService.winner;
  }


}
