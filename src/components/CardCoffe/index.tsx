import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { FormEvent, useState } from 'react'
import {CountDownCoffe } from '../CountDown'
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


interface card {
  image: string
  name: string
  description: string
  tag: string[]
  preço: string
}

export function Card({image, name, description, tag, preço}: card) {

// const [creatNewCartCard, setCreatNewCartCard] = useState<card[]>([])
// console.log(creatNewCartCard)

// function handleCreatCartCard(event: FormEvent){
//   event.preventDefault()

//   const newCart: card = {
//     description: '',
//     image: '',
//     name: '',
//     tag:[],
//     preço: ''
//   }

//   setCreatNewCartCard(state => [...state, newCart] )


// }



 
  return (
    <CardCoffe>
      <img src={image} alt="" />
      <TagContainer>
        {tag.map((tag) => {
          return <Tag>{tag}</Tag>
        })}
      </TagContainer>
      <Name>{name}</Name>
      <Description>{description}</Description>
      <FooterBuy>
        <div>
          <span>
            R$ <strong>{preço}</strong>
          </span>
        </div>
        <Actions >
          <CountDownCoffe/>
          <ButtonCart type="button">
            <ShoppingCart weight="fill" size={22} />
          </ButtonCart>
        </Actions>
      </FooterBuy>
    </CardCoffe>
  )
}
