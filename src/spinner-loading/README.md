# sky-loading-spinner

## tag
```html
<body>
    ...
    <sky-loading-spinner></sky-loading-spinner>
    ...
</body>
```
## Atributos disponiveis

| atributo  | default | type   |
|----------:|:-------:|:------:|
| background| #ffffff | string |
| color     | #cccccc | string |
| size      | 64      | number |
| speed     | 2000    | number |

> **speed** determinia a o tempo total para completar uma rotação, quanto maior o numero mais lenta sera a animação. os valores devem ser passados em milissegundos.

> os atributos **background** e **color** aceitam HEX, REGB e RGBA como string. ex: 
```html 
    <sky-loading-spinner background="rgba(0,0,0, 0.1)" color="#c45ea0"><sky-loading-spinner>
```