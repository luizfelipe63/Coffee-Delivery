import { ShoppingCart } from "phosphor-react";
import {
  Actions, 
  CardCoffe, 
  Description, 
  FooterBuy, 
  Name, 
  Tag, 
  TagContainer } from "./styles";

interface CardProps {
  image:string
  name: string,
  description: string,
  tag: string[],
  preço:string
}


export function Card({image, name, description, tag, preço}:CardProps){
  return(
    <CardCoffe>
      <img src={image} alt="" />
      <TagContainer>
        {tag.map(tag => {
          return (
            <Tag>{tag}</Tag>
          )
        })}
      </TagContainer>
      <Name>{name}</Name>
      <Description>{description}</Description>
      <FooterBuy>
        <div><span>R$ <strong>{preço}</strong></span></div>
        <Actions>
          <input min={1} type="number"/>
          <button type="button"><ShoppingCart weight="fill" size={22}/></button>
        </Actions>
      </FooterBuy>
    </CardCoffe>
  )
}