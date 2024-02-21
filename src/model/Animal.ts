 export class Animal {
    /**
     * Representa o nome do animal.
     */
    private nome: string;
     
    /**
    * Representa a idade do animal.
    */
  private idade: number;
   
    /**
    * Representa o gênero do animal.
    */
  private genero: string;


     /**
    * Construtor da classe Animal.
    * 
    * @param _nome O nome do animal.
    * @param _idade A idade do animal.
    * @param _genero O gênero do animal.
    */
    constructor(_nome: string,
                _idade: number,
                _genero: string) {
        this.nome = _nome;
        this.idade = _idade;
        this.genero = _genero;
    } 
/**
     * Retorna o nome da pessoa
     * 
     * @returns nome : nome da pessoa
     */
    public getNome() {
        return this.nome;
    }
/**
     * Atribui o parâmetro ao atributo nome
     * 
     * @param _nome : nome da pessoa
     */
    public setNome(_nome: string): void{
        this.nome = _nome;
    }
 /**
     * Retorna a idade da pessoa
     * 
     * @returns idade : idade da pessoa
     */
    public getIdade(): number {
        return this.idade;
    }
 /**
     * Atribui o parâmetro ao atributo idade
     * 
     * @param _idade : idade da pessoa
     */
    public setIdade(_idade: number): void {
        this.idade = _idade;
    }
/**
     * Retorna o gênero da pessoa
     * 
     * @returns genero : gênero da pessoa
     */
    public getGenero(): string {
        return this.genero;
    }
  /**
     * Atribui o parâmetro ao atributo genero
     * 
     * @param _genero : gênero da pessoa
     */
    public setGenero(_genero: string): void{
        this.genero = _genero;
    }


}