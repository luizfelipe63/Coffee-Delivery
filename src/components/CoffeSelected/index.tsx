import { Trash } from 'phosphor-react'
import Coffe from '../../assets/Coffee.svg'
import { Details, InfoCoffe } from './styles'

export function CoffeSelected(){
  return(
    <InfoCoffe>
      <img src={Coffe} alt="" />
      <Details>
        <span>Expresso Tradicional</span>
        <div>
          <input type="number" />
          <button>
            <Trash size={16}/>
            REMOVER
          </button>
        </div>
      </Details>
    </InfoCoffe>
  )
}