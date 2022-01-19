import Checklist from "./checklist.model";

export default class Cartao {
    nome: string = '';
    descricao: string = '';
    detalhes: string = '';
    concluido: boolean = false;
    checklist: Checklist[] = [];
}