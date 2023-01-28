import { Piece } from "./Piece";

export class Square{
    constructor(){
        this.piece = undefined;
    }
    placePiece(piece) {
        if(this.piece != undefined)
            throw Error("Can't place a piece inside an already full square!")
        this.piece = piece
    }
}