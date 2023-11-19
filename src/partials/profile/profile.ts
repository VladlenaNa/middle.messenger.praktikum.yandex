import Block from "../../core/Block";
import { editProfileInputs, iProfileInputs, profileInputs } from "./profileInputs";
import { tmpl } from "./profile.tmpl";
import Button from "./../../partials/button";

interface iProfileForm {
    disabled: boolean
}

export class ProfileForm extends Block {
    private _disabled: boolean;
    
    constructor(props: iProfileForm) {
        const formInputs = props.disabled 
            ? profileInputs 
            : editProfileInputs

        super({
            ...formInputs,
            disabled: props.disabled,
            saveButton: new Button({
                classes: "button__solid saveButton",
                text: "Сохранить",
                type: "submit",
                id: "profile-form",
                events: {
                    click: (event: Event) => {
                        event.preventDefault();
                        const form = (<HTMLInputElement>event.target).form;
        
                        if (!form)
                            return
        
                        const formValues = new FormData(form);

                        const formInputs = this._disabled 
                            ? editProfileInputs 
                            : profileInputs
        
                        Object.keys(formInputs).forEach((key) => (formInputs[key as keyof iProfileInputs].validateInput()));
                        
                        console.log("form data", JSON.stringify(Object.fromEntries(formValues)))
                    }
                }
            }),
        });

        this._disabled = props.disabled;
    }

    render() {
        return this.compile(tmpl)
    }
}
