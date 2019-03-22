import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Hero } from "../../hero";
import { HeroesService } from '../../heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit{
  id:number;
  Hero:Hero;
  constructor(private router:ActivatedRoute, private service:HeroesService) { 
    this.router.params.subscribe( params => {
      this.id = params.id;
    });
  }

  ngOnInit(){
    this.Hero = this.service.getHero(this.id);
  }
}
