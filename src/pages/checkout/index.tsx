import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { CoffeSelected } from "../../components/CoffeSelected";
import { Input } from "../../components/Input";
import { 
  CheckoutContainer,
  CardCoffeInputs,
  CardCoffePayment,
  HeaderPayment, 
  HeaderBase,
  ContainerInputs, 
  SelectButton,
  ButtonContent,
  CoffeCard,
  ButtonCard,
  InfoItens,
  InfoTotal,
  ContentForm,
  } from "./styles";

export function Checkout(){
  return (
    <CheckoutContainer>
      <ContentForm>
        <section>
          <h1>Complete seu pedido</h1>
          <CardCoffeInputs>
            <HeaderBase>
              <MapPinLine size={22}/>
              <div>
                <p>Endereço de Entrega</p>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </HeaderBase>
              <ContainerInputs>
                <Input type={'text'} placeholder='CEP'/>
                <Input type={'text'} placeholder='Rua'/>
                <Input type={'text'} placeholder='Número'/>
                <Input type={'text'} placeholder='Complemento' isOptional/>
                <Input type={'text'} placeholder='Bairro'/>
                <Input type={'text'} placeholder='Cidade'/>
                <Input type={'text'} placeholder='UF'/>
              </ContainerInputs>
          </CardCoffeInputs>
          <CardCoffePayment>
            <HeaderPayment>
              <CurrencyDollar size={22}/>
              <div>
                <p>Pagamento</p>
                <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
              </div>
            </HeaderPayment>
            <ButtonContent>
              <SelectButton type="button">
                <CreditCard size={16}/>
                CARTÃO DE CRÉDITO
              </SelectButton>
              <SelectButton type="button">
                <Bank size={16}/>
                CARTÃO DE DÉBITO
              </SelectButton>
              <SelectButton type="button">
                <Money size={16}/>
                DINHEIRO
              </SelectButton>
            </ButtonContent>
          </CardCoffePayment>
        </section>
        <section>
          <h1>Cafés selecionados</h1>
          <CoffeCard>
            <CoffeSelected/>
            <CoffeSelected/>
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