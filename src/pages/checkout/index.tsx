import { FormProvider, useForm } from 'react-hook-form'
import { CoffeSelected } from '../../components/CartCard'
import { FormDelivery } from './components/FormDelivery'
import {
  CheckoutContainer,
  CoffeCard,
  ButtonCard,
  InfoItens,
  InfoTotal,
  ContentForm,
} from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SelectPayment } from './components/SelectPayment'
import { useNavigate } from 'react-router-dom'
import { CoffeContext } from '../../context/CoffeContext'
import { useContext } from 'react'

const newDeliveryFormValidationSchema = zod.object({
  cep: zod.string().min(8, 'Informe seu CEP'),
  street: zod.string().min(1, 'Informe a sua rua'),
  number: zod.string().min(1, 'Informe o número'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  uf: zod.string().min(1, 'Informe o UF').max(2, 'Informe o UF'),
  MethodPayment: zod.string(),
})

type NewDeliveryFormData = zod.infer<typeof newDeliveryFormValidationSchema>

export function Checkout() {
  const { creatNewDeliveryForm, newCartCard, ItemsValue } =
    useContext(CoffeContext)
  const createNewDelivery = useForm<NewDeliveryFormData>({
    resolver: zodResolver(newDeliveryFormValidationSchema),
  })

  const navigate = useNavigate()

  const totalItensInDelivery = ItemsValue + 3.5
  const FormatePrice = totalItensInDelivery.toFixed(2).replace('.', ',')
  const FormateTotalItens = ItemsValue.toFixed(2).replace('.', ',')

  function handleNewDelivery(data: NewDeliveryFormData) {
    navigate('/success', {
      state: data,
    })

    const addNewDelivery = { ...data }
    creatNewDeliveryForm(addNewDelivery)
  }

  const { handleSubmit } = createNewDelivery

  return (
    <CheckoutContainer>
      <ContentForm onSubmit={handleSubmit(handleNewDelivery)}>
        <section>
          <h1>Complete seu pedido</h1>
          <FormProvider {...createNewDelivery}>
            <FormDelivery />
            <SelectPayment />
          </FormProvider>
        </section>
        <section>
          <h1>Cafés selecionados</h1>
          <CoffeCard>
            {newCartCard.map((item) => {
              return <CoffeSelected key={item.id} coffe={item} />
            })}
            <InfoItens>
              <p>Total de itens</p>
              <span>R$ {FormateTotalItens}</span>
            </InfoItens>
            <InfoItens>
              <p>Entrega</p>
              <span>R$ 3,50</span>
            </InfoItens>
            <InfoTotal>
              <p>Total</p>
              <span>R$ {FormatePrice}</span>
            </InfoTotal>
            <ButtonCard type="submit">CONFIRMAR PEDIDO</ButtonCard>
          </CoffeCard>
        </section>
      </ContentForm>
    </CheckoutContainer>
  )
}
