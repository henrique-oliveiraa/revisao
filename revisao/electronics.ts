import { product } from "./product/lojinha";

export class electronics implements product {
     name:string;
     price:number;
     brand:string;

     constructor(name:string, price:number, brand:string){
        this.name = name;
        this.price = price;
        this.brand = brand;
    }
getDescription(): string {
    return `livro: ${this.name} - autor: ${this.brand} - preço: R$${this.price.toFixed(2)}`;
}


}
    