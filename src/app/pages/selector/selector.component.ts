import {Component, Input, NgModule, OnInit} from '@angular/core';
import {
  DxButtonModule,
  DxDataGridModule,
  DxPopupModule,
  DxSelectBoxModule,
  DxTextBoxModule,
  DxToastModule
} from "devextreme-angular";
import {EstadoCidadeComponent, EstadoCidadeModule} from "../../shared/components";
import {EstadoCidadeService} from "../../shared/services";
import {EstadoModel} from "../../shared/components/estado-cidade/Models/estadoModel";
import {cidadeModel} from "../../shared/components/estado-cidade/Models/cidadeModel";
import {CommonModule, NgIf} from "@angular/common";

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit {

  constructor(private estadoCidadeService: EstadoCidadeService) {
  }

  ngOnInit(): void {
    this.gridList()
  }

  dadosEstadoCidade: String = ''
  dadosGrid: cidadeModel[] = []
  isVisible: boolean = false
  message = ''
  popupVisible: boolean = false
  e: boolean = false;

  gridList() {
    this.message = "Dados da tabela recebidos com Sucesso"
    return this.estadoCidadeService.getCidades().subscribe(
      data => {
        this.isVisible = true
        this.dadosGrid = data
      }
    )
  }

  dadosSelecionados(select: cidadeModel) {
    if (select.id != null) {
    this.dadosEstadoCidade = select.emitCidadeEstado()
  }else {
      this.dadosEstadoCidade = "Dados nao selecionados"
    }
  }

  testePopUp() {
    this.popupVisible = true
  }

}

@NgModule({
  imports: [
    DxSelectBoxModule,
    EstadoCidadeModule,
    DxDataGridModule,
    DxTextBoxModule,
    DxToastModule,
    DxPopupModule,
    DxButtonModule,
    CommonModule
  ],
  declarations: [SelectorComponent],
  bootstrap: [SelectorComponent],
  exports: [SelectorComponent]


})
export class SelectorModule {

}
