export const tmpl = `
    <input
        class="{{class}}"
        type={{type}}
        placeholder="{{placeholder}}" 
        name={{name}}
        value="{{value}}"
        id={{id}}
        {{#if disabled}}disabled{{/if}}
    />
`

