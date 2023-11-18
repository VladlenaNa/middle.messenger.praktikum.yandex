import Block from "../../core/Block";
import { tmpl } from "./chatListItem.tmpl";
import Avatar from "../avatar"

interface iChatListItemProps {
    title: string,
    time: string,
    text: string, 
    messageAmount: number
}

export class ChatListItem extends Block {

    constructor(props: iChatListItemProps) {
        super({
            ...props,
            avatar: new Avatar()
        })
    }
    
    render() {
        return this.compile(tmpl)
    }
}
