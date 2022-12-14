import { Card } from "../../components/CardCoffe"
import { Header } from "./components/header"
import { HomeContainer, HomeContent } from "./styles"

import {CoffeCard} from '../../mocks/coffe'




export function Home(){
  return(
    <>
    <Header/>
    <HomeContainer>
      <h1>Nossos cafés</h1>
      <HomeContent>
        {CoffeCard.map(card => {
          return (
            <Card
            key={card.id} 
            name={card.name}
            image={card.image}
            description={card.description}
            preço={card.preço}
            tag = {card.tag}
            />
          )
        } )}
      </HomeContent>
    </HomeContainer>
    </>
  ) 
}