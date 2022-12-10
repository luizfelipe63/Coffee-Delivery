import { Card } from "../../components/CardCoffe"
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
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </HomeContent>
    </HomeContainer>
    </>
  ) 
}