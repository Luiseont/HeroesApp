import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from "../../hero";

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {
  @Input() Hero:Hero;
  @Output() SelectedHero: EventEmitter<string>;
  constructor() { 
    this.SelectedHero = new EventEmitter();
  }

  ngOnInit() {

  }

  ClickCard(){
    this.SelectedHero.emit(this.Hero.nombre);
  }

}
