import Block from "../../core/Block";
import { tmpl } from "./404Error.tmpl";
import Error from "./../../partials/error";
import { renderDOM } from "../../core/renderDOM";

export class Error404Page extends Block {
    constructor() {
        super({
            errorInfo: new Error({
                errorNumber: 404,
                errorText: "Не туда попали"
            })
        });
    }

    render() {
        return this.compile(tmpl)
    }
}

const block = new Error404Page();

renderDOM("#main", block)
