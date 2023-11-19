import { inputErrorMsgs } from "../utils/constants";
import { validationRules } from "../utils/formValidation";
import Block from "./Block";


export default class InputControler extends Block {
    public validationType: string;
    private error: boolean = false;

    protected constructor(props: Record<string, any>, validationType: string) {
        super(props);
        this.validationType = validationType;
    }

    public validateInput() {
        const eValidationType = this.validationType;
        
        const rule = validationRules[eValidationType];
        
        const elem = this.element as HTMLInputElement;

        if (this.element && elem.value && elem.value.search(rule) === -1 ) {
            if (this.error)
                return true
            const errorMsg = document.createElement("div");
            errorMsg.classList.add("error-msg");
            errorMsg.classList.add(`error-${this.props.name}`)
            errorMsg.innerHTML = inputErrorMsgs[this.validationType as keyof typeof inputErrorMsgs];
            this.element.parentNode?.insertBefore(errorMsg, this.element.nextSibling);
            this.error = true;
            return true;
        }
        else {
            if (this.error) {
                const errorMsg = document.querySelector(`.error-${this.props.name}`)

                if (errorMsg) {
                    errorMsg.remove();
                }
            }

            return false;
        }
    }
}
