import Input from "./../../partials/input";
 
export interface iProfileInputs {
    emailInput: Input,
    loginInput: Input,
    firstNameInput: Input,
    secondNameInput: Input,
    nameInput: Input,
    phoneInput: Input
}


export const inputs:iProfileInputs = {
    emailInput: new Input({
        class: "inputProfile-field",
        type: "email",
        name: "email",
        id: "email",
        events: {
            blur: () => inputs.emailInput.validateInput(),
            focus:() => inputs.emailInput.validateInput()
        }
    }),
    loginInput: new Input({
        class: "inputProfile-field",
        type: "text",
        name: "login",
        id: "login",
        events: {
            blur: () => inputs.loginInput.validateInput()
        }
    }),
    firstNameInput: new Input({
        class: "inputProfile-field",
        type: "text",
        name: "first_name",
        id: "first_name",
        events: {
            blur: () => inputs.firstNameInput.validateInput()
        }
    }),
    secondNameInput: new Input({
        class: "inputProfile-field",
        type: "text",
        name: "second_name",
        id: "second_name",
        events: {
            blur: () => inputs.secondNameInput.validateInput()
        }
    }),
    phoneInput: new Input({
        class: "inputProfile-field",
        type: "text",
        name: "phone",
        id: "phone",
        events: {
            blur: () => inputs.phoneInput.validateInput()
        }
    }),
    nameInput: new Input({
        class: "inputProfile-field",
        type: "name",
        name: "name",
        id: "name",
        events: {
            blur: () => inputs.nameInput.validateInput()
        }
    })
}
