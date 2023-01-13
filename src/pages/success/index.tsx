import illustration from '../../assets/Illustration.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  ContentSuccess,
  IconLocal,
  IconPayment,
  Local,
  OrderInfo,
  Payment,
  SuccessContainer,
  Time,
  Title,
} from './styles'
import { IconClock } from '../home/components/header/styles'
import { useContext } from 'react'

import { CoffeContext } from '../../context/CoffeContext'

export function Success() {
  const { delivery } = useContext(CoffeContext)

  return (
    <SuccessContainer>
      <Title>
        <h1>Uhu! Pedido confirmado</h1>
        <h2>Agora é só aguardar que logo o café chegará até você</h2>
      </Title>
      <ContentSuccess>
        {delivery.map((orderInfos) => {
          return (
            <OrderInfo key={orderInfos.cep}>
              <Local>
                <IconLocal>
                  <MapPin weight="fill" size={16} />
                </IconLocal>
                <div>
                  <p>
                    Entrega em <strong>{orderInfos.street}</strong>,{' '}
                    <strong>{orderInfos.number}</strong>
                  </p>
                  <p>
                    {' '}
                    {orderInfos.district} - {orderInfos.city}, {orderInfos.uf}
                  </p>
                </div>
              </Local>
              <Time>
                <IconClock>
                  <Timer weight="fill" size={16} />
                </IconClock>
                <div>
                  <p>Previsão de entrega</p>
                  <strong>20 min - 30 min</strong>
                </div>
              </Time>
              <Payment>
                <IconPayment>
                  <CurrencyDollar weight="fill" size={16} />
                </IconPayment>
                <div>
                  <p>Pagamento na entrega</p>
                  {orderInfos.MethodPayment === 'credit' && (
                    <strong>Cartão de crédito</strong>
                  )}
                  {orderInfos.MethodPayment === 'debit' && (
                    <strong>Cartão de débito</strong>
                  )}
                  {orderInfos.MethodPayment === 'money' && (
                    <strong>Dinheiro</strong>
                  )}
                </div>
              </Payment>
            </OrderInfo>
          )
        })}
        <img src={illustration} alt="" />
      </ContentSuccess>
    </SuccessContainer>
  )
}
