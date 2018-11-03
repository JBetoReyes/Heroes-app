import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService, Heroe} from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe: Heroe;

  constructor(private _activatedRoute: ActivatedRoute,
              private _heroService: HeroesService) {
    this._activatedRoute.params.subscribe((params) => {
      const { id } = params;
      this.heroe = this._heroService.getHeroe(id);
    });
  }

  ngOnInit() {
  }

}
