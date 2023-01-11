import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { FormEvent, useContext, useState } from 'react'
import { CoffeContext } from '../../context/CoffeContext'
import { CoffeQuantities } from '../CoffeeQuantities'
import {
  Actions,
  ButtonCart,
  CardCoffe,
  Description,
  FooterBuy,
  Name,
  Tag,
  TagContainer,
} from './styles'

export interface cardProps {
  id: string
  image: string
  name: string
  description: string
  tag: string[]
  price: string
  quantity: number
}

interface coffeCardProps {
  coffe: cardProps
}

export function Card({ coffe }: coffeCardProps) {
  const { creatNewCartCard } = useContext(CoffeContext)
  const [quantity, setQuantityOfCoffes] = useState(1)

  function handleCreatCartCard() {
    const addNewCartCoffe = { ...coffe, quantity }
    creatNewCartCard(addNewCartCoffe)
    console.log(coffe)
  }

  function handleAddMoreCoffe() {
    setQuantityOfCoffes((state) => state + 1)
  }

  function handleAddLessCoffe() {
    setQuantityOfCoffes((state) => state - 1)
  }

  return (
    <CardCoffe>
      <img src={coffe.image} alt="" />
      <TagContainer>
        {coffe.tag.map((tag) => {
          return <Tag key={tag}>{tag}</Tag>
        })}
      </TagContainer>
      <Name>{coffe.name}</Name>
      <Description>{coffe.description}</Description>
      <FooterBuy>
        <div>
          <span>
            R$ <strong>{coffe.price}</strong>
          </span>
        </div>
        <Actions>
          <CoffeQuantities
            quantity={quantity}
            onDecrement={handleAddLessCoffe}
            onIncrement={handleAddMoreCoffe}
          />
          <ButtonCart type="button" onClick={handleCreatCartCard}>
            <ShoppingCart weight="fill" size={22} />
          </ButtonCart>
        </Actions>
      </FooterBuy>
    </CardCoffe>
  )
}
