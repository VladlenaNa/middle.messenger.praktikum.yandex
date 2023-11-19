import { tmpl } from "./input.tmpl";
import InputControler from "../../core/InputControler"

interface iInput {
    placeholder?: string
    name: string
    type?: string
    id?: string,
    class?: string,
    value?: string,
    disabled?: boolean,
    events?: {
        blur?: () => void,
        focus?: () => void
    }
}

export class Input extends InputControler {
    
    constructor(props: iInput) {
        super({
            ...props, 
            class: props.class || "input-field"
        }, props.name);
    }

    public getValue(): string | null {
        return (<HTMLInputElement>this.element).value || null;
    }
    
    render() {
        return this.compile(tmpl, {...this.props})
    }
}
