import './style.css'

import { charmander} from './bases/05-decorators'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  
  <h1>
  Hola ${charmander.id} ${charmander.name}!
  </h1>
  
  </hr> 
  </div>
`

document.querySelector<HTMLButtonElement>('#counter')
