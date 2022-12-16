import { ShoppingCart } from "phosphor-react";
import { Buy, CardCoffe, Description, Name, Tag } from "./styles";

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
      <div>
        {tag.map(tag => {
          return (
            <Tag>{tag}</Tag>
          )
        })}
      </div>
      <Name>{name}</Name>
      <Description>{description}</Description>
      <Buy>
        <div>
          <span>R$<strong>{preço}</strong></span>
        </div>
        <input type="number" name="" id="" min={1} />
        <button><ShoppingCart weight="fill" size={22}/></button>
      </Buy>
    </CardCoffe>
  )
}