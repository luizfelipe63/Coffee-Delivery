import illustration from '../../assets/Illustration.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { ContentSuccess, IconLocal, IconPayment, Local, OrderInfo, Payment, SuccessContainer, Time, Title } from './styles'
import { IconClock } from '../home/components/header/styles'

export function Success(){
  return (
    <SuccessContainer>
        <Title>
          <h1>Uhu! Pedido confirmado</h1>
          <h2>Agora é só aguardar que logo o café chegará até você</h2>
        </Title>
      <ContentSuccess>
        <OrderInfo>
          <Local>
           <IconLocal><MapPin weight='fill' size={16} /></IconLocal>  
            <div>
              <p>
                Entrega em Rua João Daniel Martinelli, <strong>102</strong>
              </p>
              <strong>Farrapos - Porto Alegre, RS</strong>
            </div>
          </Local>
          <Time>
            <IconClock><Timer weight='fill' size={16}/></IconClock>
            <div>
              <p>
                Previsão de entrega
              </p>
              <strong>20 min - 30 min</strong>
            </div>
          </Time>
          <Payment>
            <IconPayment><CurrencyDollar weight='fill' size={16}/></IconPayment>
            <div>
              <p>
                Pagamento na entrega
              </p>
              <strong>Cartão de Crédito</strong>
            </div>
          </Payment>
        </OrderInfo>
        <img src={illustration} alt="" />
      </ContentSuccess>
    </SuccessContainer>
  ) 
}