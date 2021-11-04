import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Competencia } from '../model/competencia';
import { CompetenciasService } from '../services/competencias.service';

@Component({
  selector: 'funance-competencias',
  templateUrl: './competencias.component.html',
  styleUrls: ['./competencias.component.css']
})
export class CompetenciasComponent implements OnInit {

  competencias: Observable <Competencia[]>;
  displayedColumns = ['descricao', 'valor'];
  //competenciasService: CompetenciasService;

  constructor(private competenciasService: CompetenciasService) { 
    //this.competenciasService = new CompetenciasService();
    this.competencias = this.competenciasService.list();
  }

  ngOnInit(): void {
  }

}
