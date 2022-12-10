import { ShoppingCart } from "phosphor-react";
import Coffe from '../../assets/Coffee.svg'
import { Buy, CardCoffe, Description, Name, Tag } from "./styles";



export function Card(){
  return(
    <CardCoffe>
      <img src={Coffe} alt="" />
      <Tag>TRADICIONAL</Tag>
      <Name>Expresso Tradicional</Name>
      <Description>O tradicional café feito com água quente e grãos moídos</Description>
      <Buy>
        <span>R$ <strong>9,90</strong></span>
        <input type="number" name="" id="" min={1} />
        <button><ShoppingCart weight="fill" size={22}/></button>
      </Buy>
    </CardCoffe>
  )
}