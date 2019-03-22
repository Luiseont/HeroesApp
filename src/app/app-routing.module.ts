import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component'; 
import { HeroComponent } from './components/hero/hero.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

const routes: Routes = [
   {path:'', component: HomeComponent},
   {path:'About', component: AboutComponent},
   {path:'Heroes', component: HeroesComponent},
   {path:'Hero/:id', component: HeroComponent},
   {path:'Buscador/:termino', component: BuscadorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
