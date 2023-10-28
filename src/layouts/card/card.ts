import { HelperOptions } from 'handlebars';

export default function card(this: object, { fn }: HelperOptions): string {
    return `
        <div class="card">
            ${fn(this)}
        </div>
    `
}