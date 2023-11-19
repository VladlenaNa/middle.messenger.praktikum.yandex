import Block from "../../core/Block";
import { tmpl } from "./menu.tmpl";
import Button from "./../../partials/button";
import profileButton from "../../image/profile.svg";

export class Menu extends Block {

    constructor() {
        super({
            profileButton: new Button({
                classes: "profile-button",
                imgSrc: profileButton
            })
        })
    }
    
    render() {
        return this.compile(tmpl)
    }
}
