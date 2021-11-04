import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';


//  Módulo destinado à importação dos módulos do Angula Material
//          no intuito de mmanter mais organizado
@NgModule({
  exports: [
    MatTableModule,
    MatCardModule,
    MatToolbarModule
  ],
})
export class AppMaterialModule { }
