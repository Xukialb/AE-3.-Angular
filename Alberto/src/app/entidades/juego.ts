export class Juego{


    private _id : number = 0;    
    private static contadorId : number = 1;

    
    constructor(public titulo : string, public compania : string, public valoracion : number){
        this._id = Juego.contadorId++;
        this.titulo = titulo
        this.compania = compania
        this.valoracion
    }

    public get id() : number{
        return this._id;
    }

    public toString() : string {
        return `ID: ${this._id}, Titulo: ${this.titulo}, Compania: ${this.compania}, Valoracion: ${this.valoracion}`
    }

}
