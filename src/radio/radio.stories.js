import { storiesOf } from '@storybook/polymer';
import { withKnobs, text, boolean } from "@storybook/addon-knobs/polymer";
import './index'
import '../radio-group'
import doc from './README.md'

storiesOf("sky-radio", module)
    .addDecorator(withKnobs)
    .add('Default', () => {
        const radio = document.createElement('sky-radio')

        radio.innerText = text('label', 'some text')
        radio.setAttribute('name', text('name', 'default_name'))
        radio.setAttribute('disabled', boolean('disabled', false))

        return radio
    }, {
            notes: {
                markdown: doc
            }
        }
    )
    .add('Group', () => {
        const radioGroup = document.createElement('sky-radio-group')
        const radio = document.createElement('sky-radio')
        const radio2 = document.createElement('sky-radio')

        radio.innerText = 'radio 1'
        radio.setAttribute('name', 'radios')
        radio.value = 'radio 1'

        radio2.innerText = 'radio 2'
        radio2.setAttribute('name', 'radios')
        radio2.value = 'radio 2'

        radioGroup.appendChild(radio)
        radioGroup.appendChild(radio2)

        return radioGroup
    })
