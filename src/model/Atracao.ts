import { Habitat } from "./Habitat";
export class Atracao {
     /**
     * Representa o nome da atração.
     */
     /**
      * Representa a lista de habitats associados à atração.
      */
    private nome: string;
    private listaHabitats: Array <Habitat>;

    /**
    * Construtor da classe Atracao.
    * 
    * @param _nome O nome da atração.
    * @param _lista_de_habitats A lista de habitats associada à atração.
    */
    constructor(_nome: string,
                _listaHabitats: Array<Habitat>,){
        this.nome = _nome;
        this.listaHabitats = _listaHabitats
    }
    /**
     * Retorna o nome da atracao
     * 
     * @returns nome : o nome da atracao
     */
    public getNome(nome: string) {
        return this.nome;
    }
/**
 * Define o nome da atracao
 * @param _nome o nome a ser atribuido á atracao
 */
    public setNome(_nome: string): void{
        this.nome = _nome;
    }

    /**
     * Retorna a lista de habitats associada á atracao
     *  
     * @returns a lista de habitats da atracao 
     */
    public getListaHabitats(listaHabitats: Array<Habitat>) {
        return this.listaHabitats = listaHabitats;
    }

    /**
     * Define a lista de habitats associada á atracao
     * @param _listaHabitats a lista de habitats ser atribuída a atracao
     */
    public setListaHabitats(_listaHabitats: Array<Habitat>): void{
        this.listaHabitats = _listaHabitats;
    }
}