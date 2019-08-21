import css from './style.css'

const template = document.createElement('template')
template.innerHTML = `
    <style>${css}</style>
    <label for="sky_radio">
        <input id="sky_radio" type="radio"/>
        <div class="icon"></div>
        <slot></slot>
    </label>
`

class Radio extends HTMLElement {

    static get observedAttributes() {
        return ['disabled', 'checked', 'name', 'value', 'label']
    }

    constructor() {
        super()
        this._shadowRoot = this.attachShadow({ 'mode': 'open' })
        this._shadowRoot.appendChild(template.content.cloneNode(true))
        this._label = this._shadowRoot.querySelector('label')
        this._radio = this._shadowRoot.querySelector('input')
        
        this._radio.addEventListener('click', (e) => {
            this.dispatchEvent(new CustomEvent('onradio'))
        })
    }

    attributeChangedCallback(name, old, value) {
        this[name] = value
    }

    // #region value
    get value() {
        return this._radio.getAttribute('value')
    }

    set value(value) {
        this._radio.setAttribute('value', value)
    }
    // #endregion

    // #region label
    get label() {
        return this._label.innerText
    }
    // #endregion

    // #region name
    get name() {
        return this._radio.getAttribute('name')
    }

    set name(value) {
        this._radio.setAttribute('name', value)
    }
    // #endregion

    // #region disabled
    get disabled() {
        return this._radio.hasAttribute('disabled')
    }

    set disabled(value) {
        if (JSON.parse(value)) {
            this._radio.setAttribute('disabled', true)
        } else {
            this._radio.removeAttribute('disabled')
        }
    }
    // #endregion

    // #region checked
    get checked() {
        return this._radio.hasAttribute('checked')
    }

    set checked(value) {
        if (JSON.parse(value)) {
            this._radio.setAttribute('checked', true)
            this._radio.checked = true
        } else {
            this._radio.removeAttribute('checked')
            this._radio.checked = false
        }
    }
    //#endregion

}

if (!window.customElements.get('sky-radio')) {
    window.customElements.define('sky-radio', Radio)
}
