import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MexicanRoutingModule } from './mexican-routing.module';
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
import { ImageComponent } from './image/image.component';


@NgModule({
  declarations: [
    AlpastorTacosComponent,
    BeanandcheeseBurritoComponent,
    BirriaSoupComponent,
    CarnitasTacosComponent,
    ChocoflanDessertComponent,
    ConchabreadDessertComponent,
    LenguaTacosComponent,
    MargaritapieDessertComponent,
    MexicanchickentorillaSoupComponent,
    MissionBurritoComponent,
    NopalesandtomatillaStewComponent,
    PozolerojoSoupComponent,
    ShrimpTacosComponent,
    TexmexBurritoComponent,
    TreslechescakeDessertComponent,
    ImageComponent
  ],
  imports: [
    CommonModule,
    MexicanRoutingModule
  ]
})
export class MexicanModule { }
