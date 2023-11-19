import Block from "../../core/Block";
import { tmpl } from "./profileHeader.tmpl";
import Avatar from "../avatar"


export class ProfileHeader extends Block {
    constructor() {
        super({
            avatar: new Avatar()
        });
    }

    render() {
        return this.compile(tmpl)
    }
}


