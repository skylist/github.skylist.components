import { storiesOf } from '@storybook/polymer';
import { withKnobs, number, color } from '@storybook/addon-knobs';
import './index'

storiesOf("sky-loading-square", module)
    .addDecorator(withKnobs)
    .add('square', ()=>{
        const loading = document.createElement('sky-loading-square')
        loading.number = number('number', 3)
        loading.color = color('color', '#000000')
        return loading
    })