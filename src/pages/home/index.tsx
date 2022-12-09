import { Card } from "../../components/Card"
import { Header } from "./components/header"
import { HomeContainer, HomeContent } from "./styles"




export function Home(){
  return(
    <>
    <Header/>
    <HomeContainer>
      <h1>Nossos cafés</h1>
      <HomeContent>
        <Card/>
      </HomeContent>
    </HomeContainer>
    </>
  ) 
}