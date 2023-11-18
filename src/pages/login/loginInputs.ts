import Input from "./../../partials/input";
 
export interface iLoginInputs {
    emailInput: Input,
    passwordInput: Input,
}


export const inputs:iLoginInputs = {
    emailInput: new Input({
        type: "email",
        placeholder: "Email",
        name: "email",
        id: "email",
        events: {
            blur: () => inputs.emailInput.validateInput(),
            focus:() => inputs.emailInput.validateInput()
        }
    }),
    passwordInput: new Input({
        type: "password",
        placeholder: "Пароль",
        name: "password",
        id: "password",
        events: {
            blur: () => inputs.passwordInput.validateInput(),
            focus:() => inputs.passwordInput.validateInput()
        }
    }),
}
