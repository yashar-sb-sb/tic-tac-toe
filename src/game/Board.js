import { Square } from "./Square";

export class Board{
    constructor(size){
        this.size = size
        this.board = Array.from(Array(size), ()=> Array.from(Array(size), ()=> new Square()))
        //Array.from(Array(2), () => new Array(4))
    }
}