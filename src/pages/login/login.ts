import Block from "../../core/Block";
import { tmpl } from "./login.tmpl";
import Button from "./../../partials/button";
import { inputs, iLoginInputs } from "./loginInputs";
import { renderDOM } from "../../core/renderDOM";

export class LoginPage extends Block {
    constructor() {
        super({
            ...inputs,
            loginButton: new Button({
                classes: "button__solid",
                text: "Авторизоваться",
                type: "submit",
                events: {
                    click: (event: Event) => {
                        event.preventDefault();
                        const form = (<HTMLInputElement>event.target).form;

                        if (!form)
                            return
                        const formValues = new FormData(form);
        
                        Object.keys(inputs).forEach((key) => (inputs[key as keyof iLoginInputs].validateInput()));
                        
                        console.log("login form data:", JSON.stringify(Object.fromEntries(formValues)))
                    }
                }
            }),
            registerButton: new Button({
                classes: "button__outline",
                text: "Нет аккаунта",
            }),
        });
    }

    render() {
        return this.compile(tmpl)
    }
}

const block = new LoginPage();

renderDOM("#main", block)
