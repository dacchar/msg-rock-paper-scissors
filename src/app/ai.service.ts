import { Injectable } from '@angular/core';
import { Observable, of  } from 'rxjs';
import { Ai } from './ai';

@Injectable({
  providedIn: 'root'
})
export class AiService {
  constructor() { }

   ai = new Ai();

   generateAiBits() {
       this.ai.clearBits();
       this.ai.generateAiBits();
   }

  getAiBits(): Observable<string[]> {
      return of(this.ai.aiBits);
  }

}

