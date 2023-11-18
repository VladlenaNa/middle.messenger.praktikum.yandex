export const tmpl = `
  <button
    class="button {{classes}}" 
    {{#if type}}type="{{type}}"{{/if}}
    {{#if id}}id="{{id}}"{{/if}}
  >
      {{text}}
      {{#if imgSrc}}<img src="{{imgSrc}}">{{/if}}
  </button>
`
