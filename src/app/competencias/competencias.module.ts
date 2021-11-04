import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetenciasRoutingModule } from './competencias-routing.module';
import { CompetenciasComponent } from './competencias/competencias.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';



@NgModule({
  declarations: [CompetenciasComponent],
  imports: [
    CommonModule,
    CompetenciasRoutingModule,
    AppMaterialModule
  ]
})
export class CompetenciasModule { }
