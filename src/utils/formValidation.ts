export const validationRules: Record<string, RegExp> = {
    login: /^[0-9a-zA-Z\-_]{3,20}/,
    password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,40}$/,
    phone: /^[+]?\d{10,15}$/,
    email: /^\S+@\S+\.\S+$/,
    firstName: /^(?=[A-ZА-Я])[A-Za-zА-Яа-я-]*$/,
    message: /.+/,
    oldPassword:  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,40}$/,
    newPassword:  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,40}$/,
    againNewPassword:  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,40}$/
};

export function validateInput(element: HTMLInputElement):boolean {
    const eValidationType = element.name;

    if (!eValidationType || !(eValidationType in validationRules)) {
        return true;
    }

    const rule = validationRules[eValidationType];

    if (element.value && element.value.search(rule) !== -1) {
        return true;
    }
    
    return false;
}
