import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeRoutingModule } from './recipe-routing.module';
import { MinsComponent } from './mins/mins.component';
import { AvacadoComponent } from './avacado/avacado.component';
import { GreekComponent } from './greek/greek.component';
import { EggComponent } from './egg/egg.component';
import { CapreseComponent } from './caprese/caprese.component';
import { BananaComponent } from './banana/banana.component';
import { CucuComponent } from './cucu/cucu.component';
import { CheeComponent } from './chee/chee.component';
import { MugComponent } from './mug/mug.component';
import { RamenComponent } from './ramen/ramen.component';
import { TunaComponent } from './tuna/tuna.component';
import { AppleComponent } from './apple/apple.component';
import { SpinachComponent } from './spinach/spinach.component';


@NgModule({
  declarations: [
    MinsComponent,
    AvacadoComponent,
    GreekComponent,
    EggComponent,
    CapreseComponent,
    BananaComponent,
    CucuComponent,
    CheeComponent,
    MugComponent,
    RamenComponent,
    TunaComponent,
    AppleComponent,
    SpinachComponent
  ],
  imports: [
    CommonModule,
    RecipeRoutingModule
  ]
})
export class RecipeModule { }
