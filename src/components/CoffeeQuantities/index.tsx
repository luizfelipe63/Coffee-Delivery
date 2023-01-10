import { Minus, Plus } from 'phosphor-react'
import { useContext } from 'react'
import { CoffeContext } from '../../context/CoffeContext'
import { cardProps } from '../CardCoffe'
import { CountDown, QuantityButton } from './styles'

interface CoffeQuantitiesProps {
  quantity: number
  onIncrement: () => void
  onDecrement: () => void
}

export function CoffeQuantities({
  quantity,
  onIncrement,
  onDecrement,
}: CoffeQuantitiesProps) {
  return (
    <CountDown>
      <QuantityButton
        disabled={quantity <= 1}
        onClick={onDecrement}
        type="button"
      >
        <Minus />
      </QuantityButton>
      {quantity}
      <QuantityButton onClick={onIncrement} type="button">
        <Plus />
      </QuantityButton>
    </CountDown>
  )
}
