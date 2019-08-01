import css from './style.css'

const template = document.createElement('template')
template.innerHTML = `
    <style>${css}</style>
    <span></span>
`

class Spinner extends HTMLElement{
    static get observedAttributes(){
        return ['size', 'color', 'background', 'speed']
    }

    constructor(){
        super()
        this._shadownRoot = this.attachShadow({'mode': 'open'})
        this._shadownRoot.appendChild(template.content.cloneNode(true))
        this._spinner = this._shadownRoot.querySelector('span')
    }

    attributeChangedCallback(name, oldValue, value){
        this[name] = value
    }

    set size(value){
        if(value >= 32){
            this._spinner.style.width = `${value}px`
            this._spinner.style.height = `${value}px`
            this._spinner.style.borderWidth = `${value/4}px`
        } else{
            this._spinner.style.width = `64px`
            this._spinner.style.height = `64px`
        }
    }

    set color(value){
        this._spinner.style.borderTopColor = value;
    }

    set background(value){
        this._spinner.style.borderColor = value
    }

    set speed(value){
        this._spinner.style.animationDuration =  `${value}ms`
    }
}

if( !window.customElements.get('sky-loading-spinner')) {
    window.customElements.define('sky-loading-spinner', Spinner)
}