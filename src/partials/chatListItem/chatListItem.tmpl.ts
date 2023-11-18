export const tmpl = `
    <div class="chat-list-item">
        {{{avatar}}}
        <div class="chat-list-item__content">
            <p class="content__name">{{name}}</p>
            <p class="content__message">{{text}}</p>
        </div>
        {{#if messageAmount}}
            <div class="chat-list-item__info">
                <p class="time">{{time}}</p>
                <p class="messageAmount">{{messageAmount}}</p>
            </div>
        {{/if}}
    </div>
`
