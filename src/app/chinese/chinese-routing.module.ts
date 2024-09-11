import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CantoneseclaypotRiceComponent } from './cantoneseclaypot-rice/cantoneseclaypot-rice.component';
import { ChickenmanchurianFryComponent } from './chickenmanchurian-fry/chickenmanchurian-fry.component';
import { ChongquigspicyNoodleComponent } from './chongquigspicy-noodle/chongquigspicy-noodle.component';
import { DandannoodleComponent } from './dandannoodle/dandannoodle.component';
import { GlutinousballsRiceComponent } from './glutinousballs-rice/glutinousballs-rice.component';
import { GuilinriceNoodleComponent } from './guilinrice-noodle/guilinrice-noodle.component';
import { HotandsourSoupComponent } from './hotandsour-soup/hotandsour-soup.component';
import { KungpaochickenFryComponent } from './kungpaochicken-fry/kungpaochicken-fry.component';
import { NappacabbageSoupComponent } from './nappacabbage-soup/nappacabbage-soup.component';
import { OxtailSoupComponent } from './oxtail-soup/oxtail-soup.component';
import { PineapplefriedRiceComponent } from './pineapplefried-rice/pineapplefried-rice.component';
import { SesameshrimpFryComponent } from './sesameshrimp-fry/sesameshrimp-fry.component';
import { WontonSoupComponent } from './wonton-soup/wonton-soup.component';
import { ZhajiangmianNoodleComponent } from './zhajiangmian-noodle/zhajiangmian-noodle.component';
import { BeefstirFryComponent } from './beefstir-fry/beefstir-fry.component';
import { ImageComponent } from './image/image.component';

const routes: Routes = [{
  path:"beefstir-fry",
  component:BeefstirFryComponent
},
  {
  path:"cantoneseclaypot-rice",
  component:CantoneseclaypotRiceComponent
},
{
  path:"chickenmanchurian-fry",
  component:ChickenmanchurianFryComponent
},
{
  path:"chongquigspicy-noodle",
  component:ChongquigspicyNoodleComponent
},
{
  path:"dandannoodle",
  component:DandannoodleComponent
},
{
  path:"glutinousballs-rice",
  component:GlutinousballsRiceComponent
},
{
  path:"guilinrice-noodle",
  component:GuilinriceNoodleComponent
},
{
  path:"hotandsour-soup",
  component:HotandsourSoupComponent
},
{
  path:"kungpaochicken-fry",
  component:KungpaochickenFryComponent
},
{
  path:"nappacabbage-soup",
  component:NappacabbageSoupComponent
},
{
  path:"oxtail-soup",
  component:OxtailSoupComponent
},
{
  path:"pineapplefried-rice",
  component:PineapplefriedRiceComponent
},
{
  path:"sesameshrimp-fry",
  component:SesameshrimpFryComponent
},
{
  path:"wonton-soup",
  component:WontonSoupComponent
},
{
  path:"zhajiangmian-noodle",
  component:ZhajiangmianNoodleComponent
},{
  path:"image",
  component:ImageComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChineseRoutingModule { }
