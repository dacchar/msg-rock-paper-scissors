import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeMenuComponent } from './welcome-menu/welcome-menu.component';
import { FormsModule } from '@angular/forms';
import { GameComponent } from './game/game.component';
import { GameResultComponent } from './game-result/game-result.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeMenuComponent,
    GameComponent,
    GameResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
