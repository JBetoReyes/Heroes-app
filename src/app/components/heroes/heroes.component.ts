import { Component, OnInit } from '@angular/core';
import {Heroe, HeroesService} from '../../services/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  constructor(private _heroesService: HeroesService,
              private _router: Router
              ) { }

  heroes: Heroe[] = [];

  ngOnInit() {
    this.heroes = this._heroesService.getHerores();
  }

  seeMore(idx) {
    this._router.navigate(['/heroe', idx]);
  }

}
