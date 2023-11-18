import Block from "../../core/Block";
import { tmpl } from "./editPassword.tmpl";
import ProfileHeader from "./../../partials/profileHeader";
import Button from "./../../partials/button";
import { inputs, iEditPasswordInputs } from "./editPasswordInputs"
import { inputErrorMsgs } from "../../utils/constants";
import { renderDOM } from "../../core/renderDOM";
import "../../styles.scss";

export class EditPasswordPage extends Block {
    constructor() {
        super({
            ...inputs,
            profileHeader: new ProfileHeader(),
            saveButton: new Button({
                classes: "button__solid saveButton",
                text: "Сохранить",
                type: "submit",
                events: {
                    click: (event) => this.handlePassword(event)
                }
            })
        });
    }

    handlePassword(event: Event) {
        event.preventDefault();
        const form = (<HTMLInputElement>event.target).form;

        if (!form)
            return

        const formValues = new FormData(form);

        Object.keys(inputs).forEach((key) => (inputs[key as keyof iEditPasswordInputs].validateInput()));
        
        if (inputs.newPasswordInput.getValue() !== inputs.newPasswordAgainInput.getValue()) {
            const errorMsg = document.createElement("span");
            errorMsg.classList.add("error-msg");
            errorMsg.classList.add(`error-${this.props.name}`)
            errorMsg.innerHTML = inputErrorMsgs["againPassword" as keyof typeof inputErrorMsgs];

            const nextElem = inputs.newPasswordAgainInput.element?.nextSibling;

            if (nextElem) {
                form?.insertBefore(errorMsg, nextElem);
            }
        }
        else {
            const errorMsg = document.querySelector(`.error-${this.props.name}`)

            if (errorMsg) {
                errorMsg.remove();
            }

            return false;
        }

        console.log("form data", JSON.stringify(Object.fromEntries(formValues)))
    }

    render() {
        return this.compile(tmpl)
    }
}


const block = new EditPasswordPage();

renderDOM("#main", block)
