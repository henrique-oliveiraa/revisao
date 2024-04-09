import { electricCar } from "./electricCar";

export class tesla implements electricCar {
    marca: string;
    modelo: string;
    ano: number;
    battheryCapacity: number;


    constructor(marca: string, modelo: string, ano: number, batteryCapacity: number) {
        this.marca = "tesla";
        this.modelo = modelo;
        this.ano = ano;
        this.battheryCapacity = battheryCapacity;

    }
    startEngine(): void {
        console.log(`o $(this.modelo) ligou`);

    }
    chargeBatthery(): void {
        console.log(`a bateria esta carregando!`);

    }


} 