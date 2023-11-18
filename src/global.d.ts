declare module "*.hbs" {
    const tpl: (param?: any) => string
    export default tpl
}

declare module "*.svg" {
    const content: string;
    export default content;
}
