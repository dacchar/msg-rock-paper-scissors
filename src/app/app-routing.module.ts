import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeMenuComponent } from './welcome-menu/welcome-menu.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
      { path: '', redirectTo: '/WelcomeMenuComponent', pathMatch: 'full' },
     { path: 'WelcomeMenuComponent', component: WelcomeMenuComponent},
      { path: 'game', component: GameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
