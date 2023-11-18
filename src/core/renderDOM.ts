import Block from "./Block";

export function renderDOM(query: string, block: Block) {
    const root = document.querySelector(query);
    console.log(root)

    if (root) {
        const content = block.getContent();

        console.log(content)

        if (content) {
            root.appendChild(content);
        }
    }

    return root;
} 
