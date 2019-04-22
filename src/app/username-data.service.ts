import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsernameDataService {

    private usernameData = new BehaviorSubject('USER');

    currentusernameData = this.usernameData.asObservable();

  constructor() { }


  changeUsername(usernameData: string) {
    this.usernameData.next(usernameData);
  }
}
