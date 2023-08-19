import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompetenciasComponent } from './competencias/competencias.component';
import { CompetenciasFormComponent } from './competencias-form/competencias-form.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'competencias', component: CompetenciasComponent },
  { path: 'new', component: CompetenciasFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompetenciasRoutingModule { }
