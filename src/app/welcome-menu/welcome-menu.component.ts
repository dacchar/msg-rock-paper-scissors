import { Component, OnInit, Input } from '@angular/core';
import { UsernameDataService } from '../username-data.service';

@Component({
  selector: 'app-welcome-menu',
  templateUrl: './welcome-menu.component.html',
  styleUrls: ['./welcome-menu.component.css']
})
export class WelcomeMenuComponent implements OnInit {

 title = 'rock-paper-scissors';
 username = ' Enter please ';

  str: string;


 @Input() user;

  constructor(private usernameDataService: UsernameDataService) { }

  ngOnInit() {
    this.user = 'Nikita the Great';
  }


  sendUsername() {
    console.log(this.str);
    this.user = this.str;
    this.usernameDataService.changeUsername(this.user);
  }

}

