import Block from "../../core/Block";
import { tmpl } from "./menu.tmpl";

export class Menu extends Block {

    constructor() {
        super()
    }
    
    render() {
        return this.compile(tmpl)
    }
}
