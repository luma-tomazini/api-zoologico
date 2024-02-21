import { Animal } from "./Animal";
/** 
 * Representa um habitat no zoológico, onde os animais vivem. 
 */ 
export class Habitat {
     /**
     * Representa o nome do habitat.
     */
     /**
      * Representa a lista de animais presentes no habitat.
      */
    private nome: string;
    private listaAnimais: Array <Animal>;

     /**
     * Construtor da classe Habitat.
     * 
     * @param _nome O nome do habitat.
     * @param _lista_de_animais A lista de animais presentes no habitat.
     */
    constructor(_nome: string,
                _listaAnimais: Array<Animal>,){
        this.nome = _nome;
        this.listaAnimais = _listaAnimais
    }
    /**
     * Retorna o nome do habitat
     * 
     * @returns nome: nome do habitat
     */
    public getNome(nome: string) {
        return this.nome;
    }
/**
 * Define o nome do habitat
 * @param _nome : nome do habitat 
 */
    public setNome(_nome: string): void{
        this.nome = _nome;
    }

    /**
     * Retorna a lista de animais
     *  
     * @returns lista_de_animais : lista de animais 
     */
    public getListaAnimais(listaAnimais: Array<Animal>) {
        return this.listaAnimais = listaAnimais;
    }

    /**
     * Atribui o parametro ao atributo nome
     * @param _listaAnimais a lista de animais 
     */
    public setListaAnimais(_listaAnimais: Array<Animal>): void{
        this.listaAnimais = _listaAnimais;
    }
}