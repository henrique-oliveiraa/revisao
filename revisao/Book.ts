import { product } from "./product/lojinha";

export class Book implements product {
    name:string;
    price:number;
    author:string;

    constructor(name:string, price:number, author:string) {
        this.name = name;
        this.price = price;
        this.author = author;
    }
getDescription(): string {
    return `livro: ${this.name} - autor: ${this.author} - preço: R$${this.price.toFixed(2)}`;
}


}