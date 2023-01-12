import { Card } from '../../components/CardCoffe'
import { Header } from './components/header'
import { HeaderTitle, HomeContainer, HomeContent } from './styles'

import { CoffeCard } from '../../mocks/coffe'
import { Filter } from './components/Filter'

export function Home() {
  return (
    <>
      <Header />
      <HomeContainer>
        <HeaderTitle>
          <h1>Nossos cafés</h1>
          <Filter />
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
