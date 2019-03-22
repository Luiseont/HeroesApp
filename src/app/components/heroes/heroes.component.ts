import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../heroes.service';
import { Hero } from "../../hero";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  resultados:boolean;
  heroes:Hero[];
  constructor(private service:HeroesService) { }

  ngOnInit() {
     this.heroes = this.service.getHeroes();
     console.log(this.heroes)
  }

  AlertHero(nombre:string){
    alert(`Ese es ${nombre}`);
  }

}
