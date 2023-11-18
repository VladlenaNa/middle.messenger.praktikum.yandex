import Block from "../../core/Block";
import { tmpl } from "./avatar.tmpl";

export class Avatar extends Block {

    constructor() {
        super()
    }
    
    render() {
        return this.compile(tmpl)
    }
}
