import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { Competencia } from '../model/competencia';
import { CompetenciasService } from '../services/competencias.service';

@Component({
  selector: 'funance-competencias',
  templateUrl: './competencias.component.html',
  styleUrls: ['./competencias.component.css']
})
export class CompetenciasComponent implements OnInit {

  competencias$: Observable <Competencia[]>;
  displayedColumns = ['descricao', 'valor'];

  //competenciasService: CompetenciasService;

  addLinha() {
    console.log("Clicou add linha!")
  }

  constructor(
    private competenciasService: CompetenciasService,
    public dialog: MatDialog
    ) { 
    //this.competenciasService = new CompetenciasService();
    this.competencias$ = this.competenciasService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar as informações')
        console.log("StackTrace: ", error);
        //comando of([]) cria um Observable com array vazio, pois nesse caso é ncessário retornar algum dado
        return of([])
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {
  }

}
