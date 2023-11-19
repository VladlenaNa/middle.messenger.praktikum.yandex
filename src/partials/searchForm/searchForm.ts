import Block from "../../core/Block";
import { tmpl } from "./searchForm.tmpl";

export class searchForm extends Block {

    constructor() {
        super()
    }
    
    render() {
        return this.compile(tmpl)
    }
}
