import {Component, EventEmitter, NgModule, OnInit, Output} from '@angular/core';
import {DxSelectBoxModule} from "devextreme-angular";
import {EstadoCidadeService} from "../../services/estado-cidade.service";
import DevExpress from "devextreme";
import ArrayStore from 'devextreme/data/array_store';
import DataSource from 'devextreme/data/data_source';
import {EstadoModel} from "./Models/estadoModel";
import {cidadeModel} from "./Models/cidadeModel";

@Component({
  selector: 'app-estado-cidade',
  templateUrl: './estado-cidade.component.html',
  styleUrls: ['./estado-cidade.component.scss']
})


export class EstadoCidadeComponent implements OnInit {

  estadosBrasil: EstadoModel[] = []
  cidadeBrasil: cidadeModel[] = []
  estadoSelecionado:String=''
  @Output() select = new EventEmitter<cidadeModel>()

  constructor(
    private serviceEstCid: EstadoCidadeService
  ) {
  }

  ngOnInit(): void {
    this.listEstados()
  }


  emitCidade(valor:any){
    let cidadeSelecionada = new cidadeModel(valor.value)
    this.select.emit(cidadeSelecionada)

    // if(valor.value == null){
    //   this.select.emit('Dados nao selecionados')
    // }else{
    //   this.select.emit(cidadeSelecionada)
    // }

  }


  selectEstadoValue(e: any) {
    this.estadoSelecionado = e.value.sigla
    this.listCidades()
  }

  listEstados() {
    return this.serviceEstCid.getEstadosBrasil().subscribe(
      data => {
        this.estadosBrasil = data
      })
  }

  listCidades() {
    return this.serviceEstCid.getCidadesPorEstado(this.estadoSelecionado).subscribe(
      data => {
        this.cidadeBrasil = data

      }
    )
  }


}




@NgModule({
  imports: [
    DxSelectBoxModule,

  ],
  declarations: [EstadoCidadeComponent],
  bootstrap: [EstadoCidadeComponent],
  exports: [EstadoCidadeComponent]

})
export class EstadoCidadeModule {
}

