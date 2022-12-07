export class cidadeModel {
  id!: number;
  nome!: String;
  microrregiao!: {
    idMicro: number;
    nomeMicro: String;
    mesorregiao: {
      id: number;
      nome: String;
      UF: {
        id: number;
        sigla: String;
        nome: String;
      }
    }
  }

  emitCidadeEstado(){
    return this.microrregiao.mesorregiao.UF.nome.concat(" - ") + this.nome
  }

  constructor(init?: Partial<cidadeModel>) {
    Object.assign(this, init);

  }


}
