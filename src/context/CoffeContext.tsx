import { createContext, ReactNode, useState } from 'react'

import { cardProps } from '../components/CardCoffe'

interface OrderInfos {
  street: string
  number: string
  district: string
  city: string
  uf: string
  cep: string
  complement: string
  MethodPayment: string
}

interface CoffeContextType {
  newCartCard: cardProps[]
  delivery: OrderInfos[]
  lengthNavBarCartCard: number
  quantityOfCoffes: number
  // DisableCounterQuantity: boolean
  AddMoreCoffe: () => void
  AddLessCoffe: () => void
  DeleteCartCardCoffe: (id: string) => void
  creatNewCartCard: (coffe: cardProps) => void
  creatNewDeliveryForm: (data: OrderInfos) => void
}

export const CoffeContext = createContext({} as CoffeContextType)

interface CoffeContetexProviderProps {
  children: ReactNode
}

export function CoffeContextProvider({ children }: CoffeContetexProviderProps) {
  const [delivery, setDeliveryState] = useState<OrderInfos[]>([])
  const [quantityOfCoffes, setQuantityOfCoffes] = useState(1)

  const [newCartCard, setCreatNewCartCard] = useState<cardProps[]>([])

  function creatNewCartCard(coffe: cardProps) {
    const orderAlreadyExist = newCartCard.findIndex((coffeeCart) => {
      return coffeeCart.id === coffe.id
    })

    if (orderAlreadyExist >= 0) {
      setCreatNewCartCard((state) =>
        state.map((item) => {
          if (coffe.id === item.id) {
            return {
              ...item,
            }
          } else {
            return item
          }
        }),
      )
    } else {
      setCreatNewCartCard((state) => [...state, coffe])
    }
  }

  function AddLessCoffe() {
    setQuantityOfCoffes(quantityOfCoffes - 1)
  }
  function AddMoreCoffe() {
    setQuantityOfCoffes(quantityOfCoffes + 1)
  }

  // const DisableCounterQuantity = quantityOfCoffes <= 0

  function DeleteCartCardCoffe(id: string) {
    const cartCardWhithoutDeleteOne = newCartCard.filter((cartCoffe) => {
      return cartCoffe.id !== id
    })

    setCreatNewCartCard(cartCardWhithoutDeleteOne)
  }

  function creatNewDeliveryForm(data: OrderInfos) {
    setDeliveryState((state) => [...state, data])
  }

  const lengthNavBarCartCard = newCartCard.length

  return (
    <CoffeContext.Provider
      value={{
        creatNewDeliveryForm,
        delivery,
        creatNewCartCard,
        newCartCard,
        lengthNavBarCartCard,
        DeleteCartCardCoffe,
        AddMoreCoffe,
        AddLessCoffe,
        quantityOfCoffes,
      }}
    >
      {children}
    </CoffeContext.Provider>
  )
}
