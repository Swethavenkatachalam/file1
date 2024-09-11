import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChineseRoutingModule } from './chinese-routing.module';
import { DandannoodleComponent } from './dandannoodle/dandannoodle.component';
import { ZhajiangmianNoodleComponent } from './zhajiangmian-noodle/zhajiangmian-noodle.component';
import { GuilinriceNoodleComponent } from './guilinrice-noodle/guilinrice-noodle.component';
import { ChongquigspicyNoodleComponent } from './chongquigspicy-noodle/chongquigspicy-noodle.component';
import { CantoneseclaypotRiceComponent } from './cantoneseclaypot-rice/cantoneseclaypot-rice.component';
import { GlutinousballsRiceComponent } from './glutinousballs-rice/glutinousballs-rice.component';
import { PineapplefriedRiceComponent } from './pineapplefried-rice/pineapplefried-rice.component';
import { HotandsourSoupComponent } from './hotandsour-soup/hotandsour-soup.component';
import { WontonSoupComponent } from './wonton-soup/wonton-soup.component';
import { OxtailSoupComponent } from './oxtail-soup/oxtail-soup.component';
import { NappacabbageSoupComponent } from './nappacabbage-soup/nappacabbage-soup.component';
import { ChickenmanchurianFryComponent } from './chickenmanchurian-fry/chickenmanchurian-fry.component';
import { KungpaochickenFryComponent } from './kungpaochicken-fry/kungpaochicken-fry.component';
import { BeefstirFryComponent } from './beefstir-fry/beefstir-fry.component';
import { SesameshrimpFryComponent } from './sesameshrimp-fry/sesameshrimp-fry.component';
import { ImageComponent } from './image/image.component';


@NgModule({
  declarations: [
    DandannoodleComponent,
    ZhajiangmianNoodleComponent,
    GuilinriceNoodleComponent,
    ChongquigspicyNoodleComponent,
    CantoneseclaypotRiceComponent,
    GlutinousballsRiceComponent,
    PineapplefriedRiceComponent,
    HotandsourSoupComponent,
    WontonSoupComponent,
    OxtailSoupComponent,
    NappacabbageSoupComponent,
    ChickenmanchurianFryComponent,
    KungpaochickenFryComponent,
    BeefstirFryComponent,
    SesameshrimpFryComponent,
    ImageComponent
  ],
  imports: [
    CommonModule,
    ChineseRoutingModule
  ]
})
export class ChineseModule { }
