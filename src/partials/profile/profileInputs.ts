import Input from "./../../partials/input";
 
export interface iProfileInputs {
    emailInput: Input,
    loginInput: Input,
    firstNameInput: Input,
    secondNameInput: Input,
    nameInput: Input,
    phoneInput: Input
}


export const editProfileInputs:iProfileInputs = {
    emailInput: new Input({
        class: "inputProfile-field",
        type: "email",
        name: "email",
        id: "email",
        events: {
            blur: () => editProfileInputs.emailInput.validateInput()
        }
    }),
    loginInput: new Input({
        class: "inputProfile-field",
        type: "text",
        name: "login",
        id: "login",
        events: {
            blur: () => editProfileInputs.loginInput.validateInput()
        }
    }),
    firstNameInput: new Input({
        class: "inputProfile-field",
        type: "text",
        name: "first_name",
        id: "first_name",
        events: {
            blur: () => editProfileInputs.firstNameInput.validateInput()
        }
    }),
    secondNameInput: new Input({
        class: "inputProfile-field",
        type: "text",
        name: "second_name",
        id: "second_name",
        events: {
            blur: () => editProfileInputs.secondNameInput.validateInput()
        }
    }),
    phoneInput: new Input({
        class: "inputProfile-field",
        type: "text",
        name: "phone",
        id: "phone",
        events: {
            blur: () => editProfileInputs.phoneInput.validateInput()
        }
    }),
    nameInput: new Input({
        class: "inputProfile-field",
        type: "name",
        name: "name",
        id: "name",
        events: {
            blur: () => editProfileInputs.nameInput.validateInput()
        }
    })
}

export const profileInputs:iProfileInputs = {
    emailInput: new Input({
        class: "inputProfile-field",
        type: "email",
        name: "email",
        id: "email",
        disabled: true,
        events: {
            blur: () => profileInputs.emailInput.validateInput()
        }
    }),
    loginInput: new Input({
        class: "inputProfile-field",
        type: "text",
        name: "login",
        id: "login",
        disabled: true,
        events: {
            blur: () => profileInputs.loginInput.validateInput()
        }
    }),
    firstNameInput: new Input({
        class: "inputProfile-field",
        type: "text",
        name: "first_name",
        id: "first_name",
        disabled: true,
        events: {
            blur: () => profileInputs.firstNameInput.validateInput()
        }
    }),
    secondNameInput: new Input({
        class: "inputProfile-field",
        type: "text",
        name: "second_name",
        id: "second_name",
        disabled: true,
        events: {
            blur: () => profileInputs.secondNameInput.validateInput()
        }
    }),
    phoneInput: new Input({
        class: "inputProfile-field",
        type: "text",
        name: "phone",
        id: "phone",
        disabled: true,
        events: {
            blur: () => profileInputs.phoneInput.validateInput()
        }
    }),
    nameInput: new Input({
        class: "inputProfile-field",
        type: "name",
        name: "name",
        id: "name",
        disabled: true,
        events: {
            blur: () => profileInputs.nameInput.validateInput()
        }
    })
}
