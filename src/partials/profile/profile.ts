import Block from "../../core/Block";
import { inputs, iProfileInputs } from "./profileInputs";
import { tmpl } from "./profile.tmpl";


interface iProfileForm {
    disabled: boolean
}


export class ProfileForm extends Block {

    constructor(props: iProfileForm) {
        super({
            ...inputs,
            disabled: props.disabled
        });
        Object.keys(inputs).forEach((fieldName) => {
            inputs[fieldName as keyof iProfileInputs].setProps({
                disabled: props.disabled
            })
        })
    }

    render() {
        return this.compile(tmpl)
    }
}


