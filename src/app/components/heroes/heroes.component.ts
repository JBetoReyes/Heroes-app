import { Component, OnInit } from '@angular/core';
import {Heroe, HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  constructor(private _heroesService: HeroesService) { }

  heroes: Heroe[] = [];

  ngOnInit() {
    this.heroes = this._heroesService.getHerores();
  }

}
