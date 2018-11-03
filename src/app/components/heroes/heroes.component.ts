import { Component, OnInit } from '@angular/core';
import {Heroe, HeroesService} from '../../services/heroes.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  constructor(private _heroesService: HeroesService,
              private _router: Router,
              private _activateRoute: ActivatedRoute
              ) { }

  heroes: Heroe[] = [];
  criteria: string = '';

  ngOnInit() {
    this._activateRoute.params.subscribe((params) => {
      if (params.criteria) {
        this.criteria = params.criteria;
        this.heroes = this._heroesService.searchHeroes(params.criteria);
      } else {
        this.heroes = this._heroesService.getHerores();
      }
    });
  }

  seeMore(idx) {
    this._router.navigate(['/heroe', idx]);
  }

}
