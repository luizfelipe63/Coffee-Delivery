import { Card } from '../../components/CardCoffe'
import { Header } from './components/header'
import { HeaderTitle, HomeContainer, HomeContent } from './styles'

import { CoffeCard } from '../../mocks/coffe'
import { useContext } from 'react'
import { CoffeContext } from '../../context/CoffeContext'

import { Filter } from './components/Filter'

export function Home() {
  const { filter } = useContext(CoffeContext)

  const FilterCoffesCards =
    filter !== 'Todos'
      ? CoffeCard.filter((coffe) => coffe.tag.includes(filter))
      : CoffeCard

  return (
    <>
      <Header />
      <HomeContainer>
        <HeaderTitle>
          <h1>Nossos cafés</h1>
          <Filter />
        </HeaderTitle>
        <HomeContent>
          {FilterCoffesCards.map((card) => {
            return <Card key={card.id} coffe={card} />
          })}
        </HomeContent>
      </HomeContainer>
    </>
  )
}
