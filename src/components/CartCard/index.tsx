import { Trash } from 'phosphor-react'
import Coffe from '../../assets/images/Coffee.svg'
import { CountDownCoffe } from '../CountDown'
import { ActionsCar, ButtonCartCard, Details, InfoCoffe } from './styles'

export function CoffeSelected() {
  return (
    <InfoCoffe>
      <Details>
        <img src={Coffe} alt="" />
        <div>
          <span>Expresso Tradicional</span>
          <ActionsCar>
            <CountDownCoffe/>
            <ButtonCartCard type='button'>
              <Trash size={16} />
              REMOVER
            </ButtonCartCard>
          </ActionsCar>
        </div>
      </Details>
      <strong>R$ 9,90</strong>
    </InfoCoffe>
  )
}
