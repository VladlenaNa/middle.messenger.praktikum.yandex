import Block from "../../core/Block";
import { tmpl } from "./editProfile.tmpl";
import ProfileForm from "./../../partials/profile";
import Button from "./../../partials/button";
import ProfileHeader from "./../../partials/profileHeader"
import { renderDOM } from "../../core/renderDOM";

export class EditProfilePage extends Block {
    constructor() {
        super({
            profileForm: new ProfileForm({
                disabled: false
            }),
            profileHeader: new ProfileHeader(),
            saveButton: new Button({
                classes: "button__solid saveButton",
                text: "Сохранить",
            })
        });
    }

    render() {
        return this.compile(tmpl)
    }
}

const block = new EditProfilePage();

renderDOM("#main", block)
