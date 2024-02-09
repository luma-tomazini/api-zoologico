import { Animal} from "./Animal";
export class Mamifero extends Animal{
     /**
     * Representa a raça do mamífero.
     */
    private raca: string;

     /**
     * Construtor da classe Mamifero.
     * 
     * @param _raca A raça do mamífero.
     * @param _nome O nome do mamífero.
     * @param _idade A idade do mamífero.
     * @param _genero O gênero do mamífero.
     */
    constructor(_raca: string,
                _nome: string,
                _idade: number,
                _genero: string){
                super(_nome, _idade, _genero);
        this.raca = _raca;
    }

    /**
     * Retorna a raça do animal
     * 
     * @returns raça: raça do animal
     */
    public getNome(raca: string) {
        return this.raca;
    }

    /**
     * Atribui o parametro ao atributo raça
     * @param _raca : raça do animal
     */
    public setNome(_raca: string): void{
        this.raca = _raca;
    }

}