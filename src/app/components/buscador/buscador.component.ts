import { Component, OnInit, Input } from '@angular/core';
import { HeroesService } from '../../heroes.service';
import { Hero } from "../../hero";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router"

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  @Input() heroes:Hero[];
  termino:string;
  resultados:boolean = true;

  constructor(private Router:Router, private ActivatedRoute:ActivatedRoute, private service:HeroesService) {  }

  ngOnInit() {
    this.ActivatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
       if(this.termino == ""){
          this.Router.navigate(['/Heroes']);
       }
       this.heroes = this.service.SearchHero(this.termino);
       if(this.heroes.length > 0){
          this.resultados = true;
       }else{
        this.resultados = false;
       }
    });
   
  }

}
