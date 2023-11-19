import Block from "../../core/Block";
import { tmpl } from "./error.tmpl";

interface iError {
    errorNumber: number,
    errorText: string
}

export class Error extends Block {

    constructor(props: iError) {
        super({
            errorNumber: props.errorNumber,
            errorText: props.errorText
        })
    }
    
    render() {
        return this.compile(tmpl)
    }
}
