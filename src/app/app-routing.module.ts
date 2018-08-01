import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {MyGamesComponent} from './mygames/mygames.component';
import {GameComponent} from './game/game.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import {MainComponent} from './main/main.component';

const routes: Routes = [
  {
    path: 'game/:id/:context',
    component: GameComponent
  },
  {
    path: 'mygames/:id',
    component: MyGamesComponent
  },
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
// },
// {
//   path: '**',
//   component: NotFoundComponent;
// }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
