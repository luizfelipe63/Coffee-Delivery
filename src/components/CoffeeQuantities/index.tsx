import { Minus, Plus } from "phosphor-react";
import { useState } from "react";
import { CountDown, QuantityButton } from './styles'

export function CoffeQuantities(){
  const [quantityOfProducts, setQuantityOfProducts] = useState(1)

  function handleAddLessCoffe(){
    setQuantityOfProducts(quantityOfProducts - 1)
  }
  function handleAddMoreCoffe(){
    setQuantityOfProducts(quantityOfProducts + 1)
  }

  const disableCountDouwn  = quantityOfProducts <= 1

  return(
    <CountDown>
      <QuantityButton disabled={disableCountDouwn}  onClick={handleAddLessCoffe} type="button">
        <Minus/>
      </QuantityButton>
        {quantityOfProducts}
      <QuantityButton onClick={handleAddMoreCoffe} type="button">
        <Plus />
      </QuantityButton>
    </CountDown>
  )
  
}