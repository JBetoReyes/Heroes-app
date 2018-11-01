import { RouterModule, Route } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {HeroesComponent} from './components/heroes/heroes.component';


const APP_ROUTES: Route[] = [
  { path: 'home', component: HomeComponent},
  { path: ' heroes', component: HeroesComponent},
  { path: '**', component: HeroesComponent},
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
