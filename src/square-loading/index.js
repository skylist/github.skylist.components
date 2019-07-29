import css from './style.css'

class SquareLoaging extends HTMLElement {

    static get observedAttributes() {
        return ['qtd']
    }

    constructor() {
        super()
        this.state = {
            qtd: [0, 0, 0, 0, 0]
        }

        this.attachShadow({ 'mode': 'open' })
        this.render()
    }

    attributeChangedCallback(name, oldValue, value) {
        this[name] = value;
        switch (name) {
            case 'qtd':
                this.state.qtd = value;
                break;

        }
        console.log(`${name}: ${value}`)
    }

    get qtd() {
        return this.getAttribute('qtd')
    }

    set qtd(value) {
        if( value >= 2 && value <= 5 ){
            this.state.qtd = Array.from({ length: value }, (_, index) => index)
        } else{
            console.warn('apenas valores entre 2 e 5 são permitidos')
            this.state.qtd = Array.from({ length: 3 }, (_, index) => index)
        }

        this.render()
    }

    _renderSquares() {
        return (`<span></span>`)
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style>${css}</style>
        <div>
        ${this.state.qtd.map(this._renderSquares).toString().replace(/,/g, '')}
        </div>
    `
    }

}

window.customElements.define('sky-loading-square', SquareLoaging)