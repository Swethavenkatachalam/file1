import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {
    path:'mins',
    component :MinsComponent
  },
  {
    path:'avacado',
    component :AvacadoComponent
  },
  {
    path:'greek',
    component :GreekComponent
  },
  {
    path:'egg',
    component :EggComponent
  },
  {
    path:'Caprese',
    component :CapreseComponent
  },{
    path:'banana',
    component :BananaComponent
  },{
    path:'cucu',
    
    component :CucuComponent
  },{
    path:'chee',
    component :CheeComponent
  },{
    path:'mug',
    component :MugComponent
  },{
    path:'ramen',
    component :RamenComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule { }
