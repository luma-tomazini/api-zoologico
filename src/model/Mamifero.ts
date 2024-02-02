import { Animal} from "./Animal";
export class Mamifero extends Animal{
    private raca: string;

    constructor(_raca: string,
                _nome: string,
                _idade: number,
                _genero: string){
                super(_nome, _idade, _genero);
        this.raca = _raca;
    }
    public getNome(raca: string) {
        return this.raca;
    }

    public setNome(_raca: string): void{
        this.raca = _raca;
    }

}