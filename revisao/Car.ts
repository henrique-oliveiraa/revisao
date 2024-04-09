export interface Car {
    marca:string;
    modelo:string;
    ano:number;
    startEngine():void;
    stopEngine?():void;

}

