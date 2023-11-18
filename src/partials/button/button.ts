import Block from "../../core/Block";
import { tmpl } from "./button.tmpl";
import "./button.scss";

interface iButton {
    classes: string,
    text?: string,
    type?: string,
    id?: string,
    events?: {
        click: (e: Event) => void
    },
    imgSrc?: string
}

export class Button extends Block {
    constructor(props: iButton) {
        super(props);
    }

    render() {
        return this.compile(tmpl)
    }
}
