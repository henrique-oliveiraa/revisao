import { Car } from "./Car";

export class Toyota implements Car{
    marca:string;
    modelo:string;
    ano:number;

    constructor(marca:string, modelo:string, ano:number){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    startEngine(): void {
        console.log("engine started");
        
    }
}