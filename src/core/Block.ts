import { v4 as makeId } from "uuid"
import EventBus from "./EventBus";
import * as Handlebars from "handlebars"

type Props = Record<string, any>;


export default class Block {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render"
    };

    protected _element: HTMLElement | null = null;
    private _tagName: string;
    public _children: { [id: string]: Block };

    public props: Props;
    public eventBus: () => EventBus;
    private _setUpdate: boolean = false;
    private _id: string;
  
    /** JSDoc
         * @param {string} tagName
         * @param {Object} props
         *
         * @returns {void}
     */
    constructor(propsAndChildren: Props = {}) {
        const { props, children } = this.getChildren(propsAndChildren)

        const eventBus = new EventBus();

        this._setUpdate = false;

        this._id = makeId();
        this._tagName = "div";

        this.props = this._makePropsProxy({ ...props, __id: this._id });
        this._children = this._makePropsProxy(children)

        this.eventBus = () => eventBus;

        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }
  
    _registerEvents(eventBus: EventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }
    
    _createResources() {
        this._element = this._createDocumentElement(this._tagName);
    }
    
    init() {
        this._createResources();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER, this.props);
    }
    
    _componentDidMount() {
        this.componentDidMount();
        Object.values(this._children).forEach(child => {
            child.dispatchComponentDidMount();
        })
    }
  
    // Может переопределять пользователь, необязательно трогать
    componentDidMount() {}
    
    dispatchComponentDidMount() {
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
        if (Object.keys(this._children).length)
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
    }
  
    _componentDidUpdate(oldProps: Props, newProps: Props) {
        const isRender = this.componentDidUpdate(oldProps, newProps);
        if (isRender) {
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        }
    }
    
    // Может переопределять пользователь, необязательно трогать
    componentDidUpdate(oldProps: Props, newProps: Props) {
        console.log(oldProps, newProps)
        return true;
    }

    getChildren(propsAndChildren: Props) {
        const children: Record<string, Block> = {};
        const props: Record<string, Block> = {};

        Object.keys(propsAndChildren).forEach(key => {
            if (propsAndChildren[key] instanceof Block)
                children[key as string] = propsAndChildren[key];
            else 
                props[key] = propsAndChildren[key];
        });

        return { children, props };
    }
    
    setProps = (nextProps: Props) => {
        if (!nextProps) {
            return;
        }

        this._setUpdate = false;
        const oldValue = {...this.props};

        const { props, children } = this.getChildren(nextProps);
    
        if (Object.values(props).length > 0)
            Object.assign(this.props, props);
        
        if (Object.values(children).length > 0)
            Object.assign(this._children, children);

        if (this._setUpdate) {
            this.eventBus().emit(Block.EVENTS.FLOW_CDU, { ...oldValue }, this.props);
            this._setUpdate = false;
        }
    };
    
    get element() {
        return this._element;
    }

    compile(template: string, props?: Props) {
        if (typeof(props) == "undefined") {
            props = this.props;
        }
        
        const propsAndStubs = { ...props };
        
        Object.entries(this._children).forEach(([key, child]) => {
            propsAndStubs[key] = `<div data-id="${child._id}"></div>`
        });
        
        const fragment = document.createElement("template");
        fragment.innerHTML = Handlebars.compile(template)(propsAndStubs);
        
        Object.values(this._children).forEach(child => {
            const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);
            
            const content = child.getContent();

            if (stub && content) {
                stub.replaceWith(content);
            }
        });

        return fragment.content;
    }
  
    _render() {
        const fragment = this.render();

        const element = fragment.firstElementChild;

        this._removeEvents();

        if (!element) {
            return;
        }

        this._element = element as HTMLElement;

        this._addEvents();
    }

    // Может переопределять пользователь, необязательно трогать
    protected render() {
        return new DocumentFragment();
    }

    _removeEvents() {
        const events: Record<string, () => void> = (this.props as any).events;

        if (!events || !this._element) {
            return;
        }

        Object.entries(events).forEach(([event, listener]) => {
            this._element!.removeEventListener(event, listener);
        });
    }

    _addEvents() {
        const events: Record<string, () => void> = (this.props as any).events;

        if (!events) {
            return;
        }

        Object.entries(events).forEach(([event, listener]) => {
            this._element!.addEventListener(event, listener);
        });
    }
    
    getContent() {
        return this._element;
    }
    
    _makePropsProxy(props: Props) {
        const self = this;

        return new Proxy(props, {
            get(target, prop: string) {
                const value = target[prop];
                return typeof value === "function" ? value.bind(target) : value;
            },
            set(target, prop: string, value: unknown) {
                if (target[prop] !== value) {
                    target[prop] = value;
                    // eslint-disable-next-line 
                    self.eventBus().emit(Block.EVENTS.FLOW_CDU, { ...target }, target);
                    self._setUpdate = true;
                }
                return true;
            },
            deleteProperty() {
                throw new Error("Нет доступа");
            },
        });
    }
  
    _createDocumentElement(tagName: string) {
        const element = document.createElement(tagName);

        return element;
    }
    
    show() {
        const content = this.getContent();

        if (content) {
            content.style.display = "block";
        }
    }
    
    hide() {
        const content = this.getContent();

        if (content) {
            content.style.display = "none";
        }
    }
}

/* eslint-disable @typescript-eslint/no-empty-function */


