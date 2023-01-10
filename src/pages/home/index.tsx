import { Card } from '../../components/CardCoffe'
import { Header } from './components/header'
import {
  ButtonFilter,
  Filter,
  HeaderTitle,
  HomeContainer,
  HomeContent,
} from './styles'

import { CoffeCard } from '../../mocks/coffe'
import { useEffect, useState } from 'react'

export function Home() {
  // const [listCard, setListCard] = useState<string[]>([])
  // const [filter, setFilter] = useState('')

  // useEffect(() => {
  //   console.log(listCard)
  // } ,[listCard])

  // const filtrerList = listCard.filter(item => item.includes(filter))

  return (
    <>
      <Header />
      <HomeContainer>
        <HeaderTitle>
          <h1>Nossos cafés</h1>
          <Filter>
            <ButtonFilter>Tradicional</ButtonFilter>
            <ButtonFilter>Especial</ButtonFilter>
            <ButtonFilter>Com Leite</ButtonFilter>
            <ButtonFilter>Alcoólico</ButtonFilter>
            <ButtonFilter>Gelado</ButtonFilter>
          </Filter>
        </HeaderTitle>
        <HomeContent>
          {CoffeCard.map((card) => {
            return <Card key={card.id} coffe={card} />
          })}
        </HomeContent>
      </HomeContainer>
    </>
  )
}
