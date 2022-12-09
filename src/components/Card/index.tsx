import { ShoppingCart } from "phosphor-react";
import Coffe from '../../assets/Coffee.svg'
import { CardCoffe, Description, Name, Tag } from "./styles";



export function Card(){
  return(
    <CardCoffe>
      <img src={Coffe} alt="" />
      <Tag>TRADICIONAL</Tag>
      <Name>Expresso Tradicional</Name>
      <Description>O tradicional café feito com água quente e grãos moídos</Description>
      <div>
        <span>R$ 9,90</span>
        <input type="number" name="" id="" />
        <ShoppingCart/>
      </div>
    </CardCoffe>
  )
}