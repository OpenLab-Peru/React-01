## Segun Taller OpenLab 

Segunda sesión de ReactJS con 

Colaborador:  [joshDev1205](https://github.com/joshDev1205/ "Coache Josh")

### Temas de la sesión
-  Un poco más de [Parcel JS](https://parceljs.org/ "Parcel.js")
-  Un poco más de [Babel](https://babeljs.io/ "Babel.js")


### Comandos para el día de hoy
- npm init -y









- npm i react react-dom -S
- npm i -D parcel-bundler babel-preset-env babel-preset-react
- Crear un archivo HTML  `index.html ` y crear un elemento con un ID "app"  ejemplo:
```html
<div id="app">
    <h1>Hola Mundo</h1>
</div>
```
- Crear un archivo index.js y escribir el siguiente código 
```javascript
import React from 'react'
import {render} from 'react-dom'

class App extends React.Component{
    render(){
        return (<h1> Hola Mundo! edwin </h1>);
    }
}

const mount = document.querySelector('#app')

render(<App/>, mount)
```

- Terminar agregando la linea ` "dev": "parcel index.html", ` en "scripts" dentro del package.json
- Terminar con la linea: npm run dev
