import Block from "../../core/Block";
import { tmpl } from "./profile.tmpl";
import ProfileForm from "./../../partials/profile";
import ProfileHeader from "./../../partials/profileHeader"
import { renderDOM } from "../../core/renderDOM";

export class ProfilePage extends Block {
    constructor() {
        super({
            profileForm: new ProfileForm({
                disabled: true
            }),
            profileHeader: new ProfileHeader()
        });
    }

    render() {
        return this.compile(tmpl)
    }
}

const block = new ProfilePage();

renderDOM("#main", block)
