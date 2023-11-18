export const tmpl = `
    <div class="chat-page">
        <div class="chat-column">
            <div class="chat-column__header">
                {{{menu}}}
                {{{searchForm}}}
            </div>
            <div class="chat-column__list">
                {{{chatListItems}}}
            </div>
            </div>
            <div class="chat">
            <div class="chat__header">
                {{{avatar}}}
                <div class="name">
                    Влада
                </div>
            </div>
            <div class="chat__content">
                {{{msg1}}}
                {{{msg2}}}
            </div>
            <div class="chat__footer">
                <img class="attachButton" src="/image/attach.svg" width="30" height="30" alt="attach">
                {{{messageInput}}}
                {{{sendButton}}}
            </div>
        </div>
    </div>
`
