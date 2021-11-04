import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompetenciasComponent } from './competencias/competencias.component';


const routes: Routes = [
  { path: '', component: CompetenciasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompetenciasRoutingModule { }
