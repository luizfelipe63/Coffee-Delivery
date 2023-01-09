import { createContext, ReactNode, useState } from 'react'
 
interface OrderInfos{
  street: string,
  number: string, 
  district: string
  city: string,
  uf:string,
  cep: string,
  complement: string
  MethodPayment:string 
}

interface CoffeContextType{
  delivery: OrderInfos[]
  creatNewDeliveryForm: (data: OrderInfos) => void
}

export const CoffeContext = createContext({} as CoffeContextType)

interface CoffeContetexProviderProps {
  children: ReactNode
}

export function CoffeContextProvider({children}:CoffeContetexProviderProps){

  const [delivery, setDeliveryState] = useState<OrderInfos[]>([])


  function creatNewDeliveryForm(data: OrderInfos){
    setDeliveryState(state => [...state, data])
  }

  return(
    <CoffeContext.Provider value={{creatNewDeliveryForm, delivery}}>
      {children}
    </CoffeContext.Provider>
  )
}