import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FettuccinePastaComponent } from './fettuccine-pasta/fettuccine-pasta.component';
import { FruitybiscottiDessertComponent } from './fruitybiscotti-dessert/fruitybiscotti-dessert.component';
import { HotSmokedsalmonRisottoComponent } from './hot-smokedsalmon-risotto/hot-smokedsalmon-risotto.component';
import { LinguinePastaComponent } from './linguine-pasta/linguine-pasta.component';
import { MargheritaPizzaComponent } from './margherita-pizza/margherita-pizza.component';
import { MinipanettoneDessertComponent } from './minipanettone-dessert/minipanettone-dessert.component';
import { NeapditanPizzaComponent } from './neapditan-pizza/neapditan-pizza.component';
import { PepperoniPizzaComponent } from './pepperoni-pizza/pepperoni-pizza.component';
import { QuattroFormaggiPizzaComponent } from './quattro-formaggi-pizza/quattro-formaggi-pizza.component';
import { SaffronRisottoComponent } from './saffron-risotto/saffron-risotto.component';
import { ScallopRisottoComponent } from './scallop-risotto/scallop-risotto.component';
import { SemifreddoDessertComponent } from './semifreddo-dessert/semifreddo-dessert.component';
import { SpaghattiPastaComponent } from './spaghatti-pasta/spaghatti-pasta.component';
import { TiramisuDessertComponent } from './tiramisu-dessert/tiramisu-dessert.component';
import { VermicelliPastaComponent } from './vermicelli-pasta/vermicelli-pasta.component';
import { ImageComponent } from './image/image.component';

const routes: Routes = [{
  path:'fettuccine-pasta',
  component:FettuccinePastaComponent},
  {
    path:'fruitybiscotti-dessert',
    component:FruitybiscottiDessertComponent
  },{
  path:'hot-smokedsalmon-risotto',
  component:HotSmokedsalmonRisottoComponent},
  {
    path:'linguine-pasta',
    component:LinguinePastaComponent
  },{
    path:'margherita-pizza',
    component:MargheritaPizzaComponent
  },{
    path:'minipanettone-dessert',
    component:MinipanettoneDessertComponent
  },{
    path:'neapditan-pizza',
    component:NeapditanPizzaComponent
  },{
    path:'pepperoni-pizza',
    component:PepperoniPizzaComponent
  },{
    path:'quattro-formaggi-pizza',
    component:QuattroFormaggiPizzaComponent
  },{
    path:'saffron-risotto',
    component:SaffronRisottoComponent
  },{
    path:'scallop-risotto',
    component:ScallopRisottoComponent
  },
  {
    path:'semifreddo-dessert',
    component:SemifreddoDessertComponent
  },{
    path:'spaghatti-dessert',
    component:SpaghattiPastaComponent
  },{
    path:'tiramisu-dessert',
    component:TiramisuDessertComponent
  },{
    path:'vermicelli-pasta',
    component:VermicelliPastaComponent

  },
  {
    path:"image",
    component:ImageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItalianRoutingModule { }