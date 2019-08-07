import { storiesOf } from '@storybook/polymer';
import { withKnobs, number, color } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes'
import doc from "./README.md";
import './index'


storiesOf("sky-loading-square", module)
    .addDecorator(withKnobs)
    .addDecorator(withNotes)
    .add('square', ()=>{
        const loading = document.createElement('sky-loading-square')
        loading.number = number('number', 3)
        loading.color = color('color', '#000000')
        return loading
    },{
        notes:{
            markdown: doc
        }
    })