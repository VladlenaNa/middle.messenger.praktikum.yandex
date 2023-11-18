import Input from "./../../partials/input";
 
export interface iRegisterInputs {
    emailInput: Input,
    loginInput: Input,
    firstNameInput: Input,
    secondNameInput: Input,
    passwordInput: Input,
    againPasswordInput: Input,
    phoneInput: Input
}


export const inputs:iRegisterInputs = {
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
    loginInput: new Input({
        type: "text",
        placeholder: "Логин",
        name: "login",
        id: "login",
        events: {
            blur: () => inputs.loginInput.validateInput()
        }
    }),
    firstNameInput: new Input({
        type: "text",
        placeholder: "Имя",
        name: "first_name",
        id: "first_name",
        events: {
            blur: () => inputs.firstNameInput.validateInput()
        }
    }),
    secondNameInput: new Input({
        type: "text",
        placeholder: "Фамилия",
        name: "second_name",
        id: "second_name",
        events: {
            blur: () => inputs.secondNameInput.validateInput()
        }
    }),
    phoneInput: new Input({
        type: "text",
        placeholder: "Телефон",
        name: "phone",
        id: "phone",
        events: {
            blur: () => inputs.phoneInput.validateInput()
        }
    }),
    passwordInput: new Input({
        type: "password",
        placeholder: "Пароль",
        name: "password",
        id: "password",
        events: {
            blur: () => inputs.passwordInput.validateInput()
        }
    }),
    againPasswordInput: new Input({
        type: "password",
        placeholder: "Пароль еще раз",
        name: "passwordAgain",
        id: "passwordAgain",
        events: {
            blur: () => inputs.againPasswordInput.validateInput()
        }
    }),
}
