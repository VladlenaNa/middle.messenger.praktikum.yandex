import Block from "../../core/Block";
import { tmpl } from "./chat.tmpl";
import ProfileHeader from "./../../partials/profileHeader";
import Menu from "./../../partials/menu";
import SearchForm from "./../../partials/searchForm"
import ChatListItem from "./../../partials/chatListItem"
import Input from "./../../partials/input";
import { renderDOM } from "../../core/renderDOM";
import Button from "./../../partials/button";
import Message from "./../../partials/message";
import "../../styles.scss";

const messageInput = new Input({
    class: "inputChat-field",
    type: "text",
    placeholder: "Введите сообщение",
    name: "message",
    id: "message"
})

const msg2 = new Message({
    text: "Хорошо как у тебя?",
    classes: "ownMessage",
    time: "12:54"
})

const msg1 = new Message({
    text: "Привет, как дела?",
    classes: "notOwnMessage",
    time: "12:45"
})

export class ChatPage extends Block {
    constructor() {
        super({
            menu: new Menu(),
            searchForm: new SearchForm(),
            profileHeader: new ProfileHeader(),
            chatListItems: new ChatListItem({
                title: "Михаил",
                time: "23:05",
                text: "Хорошо, как у тебя?", 
                messageAmount: 2
            }),
            messageInput,
            msg1,
            msg2,
            sendButton: new Button({
                classes: "sendMsg-button",
                imgSrc: "/image/sendButton.svg",
                events: {
                    click: () => {
                        const msg = messageInput.getValue();

                        if (msg?.length === 0) {
                            messageInput.element?.classList.add("input-error")
                        }
                        console.log("message:", messageInput.getValue)
                    }
                }
            })
        });
    }

    sendMsgHandler() {
        console.log("validate msg")
        messageInput.validateInput();
    }

    render() {
        return this.compile(tmpl)
    }
}


const block = new ChatPage();

renderDOM("#main", block)


