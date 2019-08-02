import css from './style.css'
import { createGlobal } from '@storybook/theming';
import { loadavg } from 'os';

const template = document.createElement('template')
template.innerHTML = `
    <style>${css}</style>
    <div>
    </div>
`

class SquareLoaging extends HTMLElement {

    static get observedAttributes() {
        return ['number', 'color']
    }

    constructor() {
        super()
        this._shadownRoot = this.attachShadow({ 'mode': 'open' })
        this._shadownRoot.appendChild(template.content.cloneNode(true))
        this._loading = this._shadownRoot.querySelector('div')
        this._loading.number = 3
    }

    attributeChangedCallback(name, oldValue, value) {
        this[name] = value;
    }

    set color(value){
        for( let index = 0; index < this._loading.childElementCount; index++ ){
            this._loading.children[index].style.background = `${value}`
        }
    }

    set number(value) {
        if( value >= 2 && value <= 5 ){
            for(let count=0;count<this._loading.childElementCount; count++){
                this._loading.removeChild(this._loading.firstElementChild)
            }
            
            for(let count=0;count<value; count++){
                this._loading.appendChild(document.createElement('span'))
            }
        } else{
            console.warn('apenas valores entre 2 e 5 são permitidos')
            for(let count=0;count<3; count++){
                this._loading.appendChild(document.createElement('span'))
            }
        }
    }
}

if(!window.customElements.get('sky-loading-square')){
    window.customElements.define('sky-loading-square', SquareLoaging)
}