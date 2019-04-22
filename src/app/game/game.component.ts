import { Component, OnInit } from '@angular/core';
import { GameDataService } from '../game-data.service';
import { UsernameDataService } from '../username-data.service';
import { AiService } from '../ai.service';
import { ResultCalcService } from '../result-calc.service';



@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

    user: string;
    headElements = ['Your bits', 'AIs bits', 'result'];
    plays = 0;
    gameActiv = true;

    game: string[] = [];

    aiBits: string[] = [];

    results: string[] = [];

  constructor(private gameData: GameDataService, private usernameData: UsernameDataService, private ai: AiService,
              private resultCalcService: ResultCalcService) { }

  ngOnInit() {
     this.usernameData.currentusernameData.subscribe(username => this.user = username);
     this.ai.generateAiBits();
     this.ai.getAiBits().subscribe(x => this.aiBits = x);

  }

  addRock() {
    this.game.push('Rock');
    this.onePlay();
  }

   addPaper() {
    this.game.push('Paper');
    this.onePlay();
  }

   addScissors() {
    this.game.push('Scissors');
    this.onePlay();
  }

  onePlay() {
    this.plays += 1;
    this.gameData.changeGameResultData(this.game);
    this.resultCalcService.calculateResults();
    this.resultCalcService.getResults().subscribe(x => this.results = x);
    if (this.plays >= 10) {
        this.gameActiv = false;
    }

  }

  restart() {
      this.gameActiv = true;
      this.game = [];
      this.plays = 0;
      this.resultCalcService.clearResults();
      this.ai.generateAiBits();
      this.ai.getAiBits().subscribe(x => this.aiBits = x);
  }


}
