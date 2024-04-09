export class animal {
    nome:string;
    peso:number;

constructor(nome:string, peso:number){
    this.nome = nome;
    this.peso = peso;

}

eat(quantity:number):void {
    console.log("o naimal comeu" + quantity);
    
}

}


