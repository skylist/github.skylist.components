import css from './style.css'

class Button extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({ 'mode': 'open' });
        this.shadowRoot.innerHTML = ` 
        <style>${css}</style>
        <button><slot></slot></button>`
    }
}

window.customElements.define('sky-button', Button)
