import './style.css'

import { charmander } from './bases/04-inyection'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  
  <h1>
  Hola !
  </h1>
  <h1>
  ${charmander.name} ${charmander.id}
  </h1>
  </hr> 
  </div>
`

document.querySelector<HTMLButtonElement>('#counter')
