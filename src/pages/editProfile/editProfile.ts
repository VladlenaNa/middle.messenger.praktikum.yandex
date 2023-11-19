import Block from "../../core/Block";
import { tmpl } from "./editProfile.tmpl";
import ProfileForm from "./../../partials/profile";
import Button from "./../../partials/button";
import ProfileHeader from "./../../partials/profileHeader"
import { renderDOM } from "../../core/renderDOM";
import backButton from "../../image/backButton.svg";

export class EditProfilePage extends Block {
    constructor() {
        super({
            profileForm: new ProfileForm({
                disabled: false
            }),
            profileHeader: new ProfileHeader(),
           
            backButton: new Button({
                classes: "back-button",
                imgSrc: backButton
            })
        })
    }

    render() {
        return this.compile(tmpl)
    }
}

const block = new EditProfilePage();

renderDOM("#main", block)
