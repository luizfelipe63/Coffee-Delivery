import { Trash } from 'phosphor-react'
import { CoffeQuantities } from '../CoffeeQuantities'
import { ActionsCar, ButtonCartCard, Details, InfoCoffe } from './styles'
import { cardProps } from '../CardCoffe'
import { useContext } from 'react'
import { CoffeContext } from '../../context/CoffeContext'

interface cartCardCoffeProps {
  coffe: cardProps
}

export function CoffeSelected({ coffe }: cartCardCoffeProps) {
  const {
    DeleteCartCardCoffe,
    IncrementCartCardCoffe,
    DecrementCartCardCoffe,
  } = useContext(CoffeContext)

  function handleDeleteCartCardCoffe() {
    DeleteCartCardCoffe(coffe.id)
  }

  function handleIncrementCartCardCoffe() {
    IncrementCartCardCoffe(coffe.id)
  }

  function handleDecrementCartCardCoffe() {
    DecrementCartCardCoffe(coffe.id)
  }

  return (
    <InfoCoffe>
      <Details>
        <img src={coffe.image} alt="" />
        <div>
          <span>{coffe.name}</span>
          <ActionsCar>
            <CoffeQuantities
              quantity={coffe.quantity}
              onDecrement={handleDecrementCartCardCoffe}
              onIncrement={handleIncrementCartCardCoffe}
            />
            <ButtonCartCard onClick={handleDeleteCartCardCoffe} type="button">
              <Trash size={16} />
              REMOVER
            </ButtonCartCard>
          </ActionsCar>
        </div>
      </Details>
      <strong>R$ {coffe.price}</strong>
    </InfoCoffe>
  )
}
