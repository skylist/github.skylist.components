import { storiesOf } from '@storybook/html';
import { withKnobs, color, number } from "@storybook/addon-knobs/polymer";

import '../../dist/bundle'

storiesOf("Loading", module)
    .addDecorator(withKnobs)
    .add('Spinner', ()=> {
        const loading = document.createElement('sky-loading-spinner')
        loading.background = color('background', '#ffffff')
        loading.color = color('color','#cccccc')
        loading.size = number('size', 64)
        loading.speed = number('speed', 2000)
        return loading
    })
    
    