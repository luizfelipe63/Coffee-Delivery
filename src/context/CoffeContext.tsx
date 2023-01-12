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

export type FilterProps =
  | 'Todos'
  | 'Tradicional'
  | 'Especial'
  | 'Com Leite'
  | 'Alcoólico'
  | 'Gelado'

interface CoffeContextType {
  newCartCard: cardProps[]
  delivery: OrderInfos[]
  lengthNavBarCartCard: number
  ItemsValue: number
  filter: FilterProps
  updateFilter: (filterValue: FilterProps) => void
  IncrementCartCardCoffe: (id: string) => void
  DecrementCartCardCoffe: (id: string) => void
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
  const [newCartCard, setCreatNewCartCard] = useState<cardProps[]>([])
  const [filter, setFilter] = useState<FilterProps>('Todos')

  const lengthNavBarCartCard = newCartCard.length

  const ItemsValue = newCartCard.reduce((acumulador, valorAtual) => {
    return (acumulador +=
      parseFloat(valorAtual.price.replace(',', '.')) * valorAtual.quantity)
  }, 0)

  function updateFilter(filterValue: FilterProps) {
    setFilter(filterValue)
  }

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
              quantity: item.quantity + coffe.quantity,
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

  function IncrementCartCardCoffe(id: string) {
    setCreatNewCartCard((state) =>
      state.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          }
        } else {
          return item
        }
      }),
    )
  }

  function DecrementCartCardCoffe(id: string) {
    setCreatNewCartCard((state) =>
      state.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          }
        } else {
          return item
        }
      }),
    )
  }

  function DeleteCartCardCoffe(id: string) {
    const cartCardWhithoutDeleteOne = newCartCard.filter((cartCoffe) => {
      return cartCoffe.id !== id
    })

    setCreatNewCartCard(cartCardWhithoutDeleteOne)
  }

  function creatNewDeliveryForm(data: OrderInfos) {
    setDeliveryState((state) => [...state, data])
  }

  return (
    <CoffeContext.Provider
      value={{
        creatNewDeliveryForm,
        delivery,
        creatNewCartCard,
        newCartCard,
        lengthNavBarCartCard,
        DeleteCartCardCoffe,
        IncrementCartCardCoffe,
        DecrementCartCardCoffe,
        ItemsValue,
        filter,
        updateFilter,
      }}
    >
      {children}
    </CoffeContext.Provider>
  )
}
