import css from './style.css'
const template = document.createElement('template')
template.innerHTML = `
    <style>css</style>
    <slot></slot>
`
class RadioGroup extends HTMLElement {
    static get observedAttributes() {
        return ['']
    }

    constructor() {
        super()
        this._shadowRoot = this.attachShadow({ 'mode': 'open' })
        this._shadowRoot.appendChild(template.content.cloneNode(true))
        this._slot = this._shadowRoot.querySelector('slot')
        this._slot.addEventListener('slotchange', this.handleSlotChange.bind(this))
    }

    handleSlotChange(e) {
        console.log('slot change')
        this._radios = this.querySelectorAll('sky-radio')
        this._radios.forEach(radio => radio.addEventListener('onradio', this.toggleRadio.bind(this)))
    }

    toggleRadio(e) {
        this._radios.forEach(radio => {
            if(e.target != radio){
                radio.setAttribute('checked', false)
                radio.checked = false
            }
        })
    }

    attributeChangedCallback(name, old, value) {
        this[name] = value
    }

}
if (!window.customElements.get('sky-radio-group')) {
    window.customElements.define('sky-radio-group', RadioGroup)
}