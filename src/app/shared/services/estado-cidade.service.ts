import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EstadoModel} from "../components/estado-cidade/Models/estadoModel";
import {cidadeModel} from "../components/estado-cidade/Models/cidadeModel";


@Injectable({
  providedIn: 'root'
})
export class EstadoCidadeService {

  constructor(private httpclient:HttpClient) { }
  API_ESTADOS= 'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome';
  API_CIDADES_ESTADOS='https://servicodados.ibge.gov.br/api/v1/localidades/estados/'
  API_CIDADES = 'https://servicodados.ibge.gov.br/api/v1/localidades/distritos'
  getEstadosBrasil(){
    return this.httpclient.get<EstadoModel[]>(this.API_ESTADOS)
  }

  getCidadesPorEstado(estado:String){
    return this.httpclient.get<cidadeModel[]>(`${this.API_CIDADES_ESTADOS}/${estado}/municipios?orderBy=nome`)
  }

  getCidades(){
    return this.httpclient.get<cidadeModel[]>(this.API_CIDADES)
  }
}
