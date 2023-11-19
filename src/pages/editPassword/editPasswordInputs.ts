import Input from "./../../partials/input";

export interface iEditPasswordInputs {
    oldPasswordInput: Input,
    newPasswordInput: Input,
    newPasswordAgainInput: Input
}


export const inputs:iEditPasswordInputs = {
    oldPasswordInput: new Input({
        type: "password",
        placeholder: "Старый пароль", 
        name: "oldPassword",
        id: "oldPassword",
    }),
    newPasswordInput: new Input({
        type: "password",
        placeholder: "Новый пароль",
        name: "newPassword",
        id: "newPassword",
        events: {
            blur: () => inputs.newPasswordAgainInput.validateInput()
        }
    }),
    newPasswordAgainInput: new Input({
        type: "password",
        placeholder: "Новый пароль еще раз",
        name: "newPasswordAgain",
        id: "newPasswordAgain",
        events: {
            blur: () => inputs.newPasswordAgainInput.validateInput()
        }
    }),
}
