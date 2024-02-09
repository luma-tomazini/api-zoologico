import { Atracao } from "./Atracao";
export class Zoologico {/**
* Representa o nome do zoológico.
*/
/**
* Representa a lista de atrações do zoológico.
*/
private nome: string;
private listaDeAtrações: Array <Atracao>;

 /**
     * Construtor da classe Zoologico.
     * 
     * @param _nome O nome do zoológico.
     * @param _lista_de_atracoes A lista de atrações do zoológico.
     */
    constructor(_nome: string,
                _listaDeAtracoes: Array<Atracao>,){
        this.nome = _nome;
        this.listaDeAtrações = _listaDeAtracoes
    }
    /**
     * Retorna o nome do zoologico
     * 
     * @returns o nome do zoologico
     */
    public getNome(nome: string) {
        return this.nome;
    }
/**
 * Define o nome do zoologico
 * @param _nome o nome a ser atribuido ao zoologico
 */
    public setNome(_nome: string): void{
        this.nome = _nome;
    }

    /**
     * Retorna a lista de atracoes do zoologico
     *  
     * @returns a lista de atracoes do zoologico
     */
    public getListaDeAtracoes(listaDeAtrações: Array<Atracao>) {
        return this.listaDeAtrações = listaDeAtrações;
    }

    /**
     * Define a lista de atracoes do zoologico
     * @param _listaDeAtrações a lista de atracoes ser atribuída ao zoologico
     */
    public setListaDeAtracoes(_listaDeAtrações: Array<Atracao>): void{
        this.listaDeAtrações = _listaDeAtrações;
    }
}