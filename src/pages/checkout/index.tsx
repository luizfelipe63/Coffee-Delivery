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


const newDeliveryFormValidationSchema =  zod.object({
  cep: zod.string().min(8,'Informe seu CEP'),
  street: zod.string().min(1, 'Informe a sua rua'),
  number: zod.string().min(1, 'Informe o número'),
  complement:zod.string(),
  district: zod.string().min(1,'Informe o bairro'),
  city: zod.string().min(1,'Informe a cidade'),
  uf:zod.string().min(1,'informe o UF').max(2, 'Informe o UF')
})

type NewDeliveryFormData = zod.infer<typeof newDeliveryFormValidationSchema>

export function Checkout() {
  const createNewDelivery = useForm<NewDeliveryFormData>({
    resolver: zodResolver(newDeliveryFormValidationSchema),
  })

  function handleSubmitPageSuccess(data: NewDeliveryFormData) {
    console.log(data)
  }

  const { handleSubmit } = createNewDelivery



  return (
    <CheckoutContainer>
      <ContentForm onSubmit={handleSubmit(handleSubmitPageSuccess)}>
        <section>
          <h1>Complete seu pedido</h1>
          <FormProvider {...createNewDelivery}>
            <FormDelivery />
            <SelectPayment/>
          </FormProvider>
        </section>
        <section>
          <h1>Cafés selecionados</h1>
          <CoffeCard>
            <CoffeSelected />
            <CoffeSelected />
            <InfoItens>
              <p>Total de itens</p>
              <span>R$ 29,70</span>
            </InfoItens>
            <InfoItens>
              <p>Entrega</p>
              <span>R$ 3,50</span>
            </InfoItens>
            <InfoTotal>
              <p>Total</p>
              <span>R$ 33,20</span>
            </InfoTotal>
            <ButtonCard>CONFIRMAR PEDIDO</ButtonCard>
          </CoffeCard>
        </section>
      </ContentForm>
    </CheckoutContainer>
  )
}
