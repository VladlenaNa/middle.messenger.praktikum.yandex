import Block from "./Block";

export function renderDOM(query: string, block: Block) {
    const root = document.querySelector(query);

    if (root) {
        const content = block.getContent();

        if (content) {
            root.appendChild(content);
        }
    }

    return root;
} 
