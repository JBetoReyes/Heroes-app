import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {HeroesComponent} from './components/heroes/heroes.component';
import {AboutComponent} from './components/about/about.component';
import {HeroeComponent} from './components/heroe/heroe.component';


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'heroes/:criteria', component: HeroesComponent},
  { path: 'heroe/:id', component: HeroeComponent},
  { path: '**', component: HeroesComponent},
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
