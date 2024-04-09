import { animal } from "./animal";

export class dog extends animal{

    constructor(nome:string, peso:number){
        super(nome, peso);

    }
      bark(): void {
        console.log("au au ");
        
      } 
}
