import Block from "../../core/Block";
import { tmpl } from "./5Error.tmpl";
import Error from "./../../partials/error";
import { renderDOM } from "../../core/renderDOM";
import "../../styles.scss";

export class Error5Page extends Block {
    constructor() {
        super({
            errorInfo: new Error({
                errorNumber: 500,
                errorText: "Мы уже фиксим"
            })
        });
    }

    render() {
        return this.compile(tmpl);
    }
}

const block = new Error5Page();

renderDOM("#main", block)
