import Block from "../../core/Block";
import { tmpl } from "./register.tmpl";
import Button from "./../../partials/button";
import { inputs, iRegisterInputs } from "./registerInputs"
import { inputErrorMsgs } from "../../utils/constants";
import { renderDOM } from "../../core/renderDOM";

export class RegisterPage extends Block {
    registerInputs = inputs;
    
    constructor() {
        super();
        this.setProps({...inputs, registerButton: this.registerButton});
    }
    
    registerButton = new Button({
        classes: "button__solid",
        text: "Зарегистрироваться",
        type: "submit",
        id: "register-form",
        events: {
            click: (event: Event) => {
                event.preventDefault();
                const form = (<HTMLInputElement>event.target).form;

                if (!form)
                    return

                const formValues = new FormData(form);

                Object.keys(inputs).forEach((key) => (inputs[key as keyof iRegisterInputs].validateInput()));
                
                if (inputs.passwordInput.getValue() !== inputs.againPasswordInput.getValue()) {
                    const errorMsg = document.createElement("span");
                    errorMsg.classList.add("error-msg");
                    errorMsg.innerHTML = inputErrorMsgs["againPassword" as keyof typeof inputErrorMsgs];

                    const nextElem = inputs.againPasswordInput.element?.nextSibling;
                    if (nextElem) {
                        form?.insertBefore(errorMsg, nextElem);
                    }
                }

                console.log("form data", JSON.stringify(Object.fromEntries(formValues)))
            }
        }
    });

    

    render() {
        return this.compile(tmpl)
    }
}

const block = new RegisterPage();

renderDOM("#main", block)
