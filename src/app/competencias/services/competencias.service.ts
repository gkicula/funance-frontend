import { Injectable } from '@angular/core';
import { Competencia } from '../model/competencia';
import { HttpClient } from '@angular/common/http';
import { delay, first, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompetenciasService {

  private readonly API = '/assets/valores.json'

  //Feito a injeção da dependência
  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Competencia[]>(this.API).pipe(first());

    /*************************************************************************
    *                                                                        *
    *    UTILIZAR O .pipe() COMO FORMA DE DEBUGGAR AS CHAMADAS ASSÍNCRONAS   *
    *                                                                        *
    *return this.httpClient.get<Competencia[]>(this.API)                     *
    *.pipe(                                                                  *
    *  tap(competencias => console.log(competencias))                        *
    *);                                                                      *
    *************************************************************************/
  }
}
