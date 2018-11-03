import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Heroe} from '../../services/heroes.service';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: []
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() idx = '';
  @Input() heroe: Heroe;

  @Output() seeMore = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onSeeMoreClick() {
    this.seeMore.emit(this.heroe.idx);
  }

}
