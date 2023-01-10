import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import {
  AddBorderInput,
  ButtonContent,
  CardCoffePayment,
  HeaderPayment,
  PaymentButton,
  RadioButton,
} from './styles'

export function SelectPayment() {
  const { register, watch } = useFormContext()

  const radioInputValue = watch('MethodPayment')

  return (
    <CardCoffePayment>
      <HeaderPayment>
        <CurrencyDollar size={22} />
        <div>
          <p>Pagamento</p>
          <span>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
        </div>
      </HeaderPayment>
      <ButtonContent>
        <PaymentButton>
          {radioInputValue === 'credit' && <AddBorderInput />}
          <RadioButton
            value={'credit'}
            type={'radio'}
            {...register('MethodPayment')}
          />
          <CreditCard size={16} />
          CARTÃO DE CRÉDITO
        </PaymentButton>
        <PaymentButton>
          {radioInputValue === 'debit' && <AddBorderInput />}
          <RadioButton
            value={'debit'}
            type={'radio'}
            {...register('MethodPayment')}
          />
          <Bank size={16} />
          CARTÃO DE DÉBITO
        </PaymentButton>
        <PaymentButton>
          {radioInputValue === 'money' && <AddBorderInput />}
          <RadioButton
            value={'money'}
            type={'radio'}
            {...register('MethodPayment')}
          />
          <Money size={16} />
          DINHEIRO
        </PaymentButton>
      </ButtonContent>
    </CardCoffePayment>
  )
}
