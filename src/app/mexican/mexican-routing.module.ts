import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlpastorTacosComponent } from './alpastor-tacos/alpastor-tacos.component';
import { BeanandcheeseBurritoComponent } from './beanandcheese-burrito/beanandcheese-burrito.component';
import { BirriaSoupComponent } from './birria-soup/birria-soup.component';
import { CarnitasTacosComponent } from './carnitas-tacos/carnitas-tacos.component';
import { ChocoflanDessertComponent } from './chocoflan-dessert/chocoflan-dessert.component';
import { ConchabreadDessertComponent } from './conchabread-dessert/conchabread-dessert.component';
import { LenguaTacosComponent } from './lengua-tacos/lengua-tacos.component';
import { MargaritapieDessertComponent } from './margaritapie-dessert/margaritapie-dessert.component';
import { MexicanchickentorillaSoupComponent } from './mexicanchickentorilla-soup/mexicanchickentorilla-soup.component';
import { MissionBurritoComponent } from './mission-burrito/mission-burrito.component';
import { NopalesandtomatillaStewComponent } from './nopalesandtomatilla-stew/nopalesandtomatilla-stew.component';
import { PozolerojoSoupComponent } from './pozolerojo-soup/pozolerojo-soup.component';
import { ShrimpTacosComponent } from './shrimp-tacos/shrimp-tacos.component';
import { TexmexBurritoComponent } from './texmex-burrito/texmex-burrito.component';
import { TreslechescakeDessertComponent } from './treslechescake-dessert/treslechescake-dessert.component';

const routes: Routes = [
  {
    path:"alpastor-tacos",
    component:AlpastorTacosComponent
  },
  {
    path:"beanamdcheese-burrito",
    component:BeanandcheeseBurritoComponent
  },
  {
    path:"birria-soup",
    component:BirriaSoupComponent
  },
  {
    path:"carnitas-tacos",
    component:CarnitasTacosComponent
  },
  {
    path:"chocoflan-dessert",
    component:ChocoflanDessertComponent
  },
  {
    path:"conchabread-dessert",
    component:ConchabreadDessertComponent
  },
  {
    path:"lengua-tacos",
    component:LenguaTacosComponent
  },
  {
    path:"margaritapie-dessert",
    component:MargaritapieDessertComponent
  },
  {
    path:"mexicanchickentorilla-soup",
    component:MexicanchickentorillaSoupComponent
  },
  {
    path:"mission-burrito",
    component:MissionBurritoComponent
  },
  {
    path:"nopalesandtomatilla-stew",
    component:NopalesandtomatillaStewComponent
  },
  {
    path:"pozoleroja-soup",
    component:PozolerojoSoupComponent
  },
  {
    path:"shrimp-tacos",
    component:ShrimpTacosComponent
  },
  {
    path:"texmex-burrito",
    component:TexmexBurritoComponent
  },
  {
    path:"treslechescake-dessert",
    component:TreslechescakeDessertComponent
  },
  
  
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MexicanRoutingModule { }
