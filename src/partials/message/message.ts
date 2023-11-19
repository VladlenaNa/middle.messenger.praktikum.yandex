import { tmpl } from "./message.tmpl";
import Block from "../../core/Block"

interface iMessage {
    text: string,
    classes?: string,
    time: string
}

export class Message extends Block {
    
    constructor(props: iMessage) {
        super({
            ...props
        });
    }

    render() {
        return this.compile(tmpl, {...this.props})
    }
}
