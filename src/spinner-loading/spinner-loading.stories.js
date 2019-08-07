import { storiesOf } from '@storybook/polymer';
import { withKnobs, color, number } from "@storybook/addon-knobs/polymer";
import { withMarkdownNotes } from "@storybook/addon-notes";
import './index'
import doc from './README.md'

storiesOf("sky-loading-spinner", module)
    .addDecorator(withKnobs)
    .add('Loading', ()=> {
        const loading = document.createElement('sky-loading-spinner')
        loading.background = color('background', '#ffffff')
        loading.color = color('color','#cccccc')
        loading.size = number('size', 64)
        loading.speed = number('speed', 2000)
        return loading
    },{
        notes:{
            markdown: doc
        }
    })
    