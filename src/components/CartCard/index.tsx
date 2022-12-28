import { Trash } from 'phosphor-react'
import Coffe from '../../assets/images/Coffee.svg'
import { ActionsCar, Details, InfoCoffe } from './styles'

export function CoffeSelected() {
  return (
    <InfoCoffe>
      <Details>
        <img src={Coffe} alt="" />
        <div>
          <span>Expresso Tradicional</span>
          <ActionsCar>
            <input type="number" min={1} />
            <button>
              <Trash size={16} />
              REMOVER
            </button>
          </ActionsCar>
        </div>
      </Details>
      <strong>R$ 9,90</strong>
    </InfoCoffe>
  )
}
