export class Juego{


    private _id : number = 0;    
    private static contadorId : number = 1;

    
    constructor(public titulo : string, public company : string, public rating : number){
        this._id = Juego.contadorId++;
        this.titulo = titulo
        this.company = company
        this.rating
    }

    public get id() : number{
        return this._id;
    }

    public toString() : string {
        return `ID: ${this._id}, Titulo: ${this.titulo}, Company: ${this.company}, Rating: ${this.rating }`
    }

}
