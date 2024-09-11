import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItalianRoutingModule } from './italian-routing.module';
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


@NgModule({
  declarations: [
    FettuccinePastaComponent,
    FruitybiscottiDessertComponent,
    HotSmokedsalmonRisottoComponent,
    LinguinePastaComponent,
    MargheritaPizzaComponent,
    MinipanettoneDessertComponent,
    NeapditanPizzaComponent,
    PepperoniPizzaComponent,
    QuattroFormaggiPizzaComponent,
    SaffronRisottoComponent,
    ScallopRisottoComponent,
    SemifreddoDessertComponent,
    SpaghattiPastaComponent,
    TiramisuDessertComponent,
    VermicelliPastaComponent,
    ImageComponent
  ],
  imports: [
    CommonModule,
    ItalianRoutingModule
  ]
})
export class ItalianModule { }
